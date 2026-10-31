// =====================================================================
// Área de Entrega - Raio máximo a partir da loja
// Loja: Rua Domingos Alves Ribeiro, 32 - Campo Grande, Rio de Janeiro/RJ
// =====================================================================

const STORE_LOCATION = { lat: -22.9207602, lng: -43.5465821 }; // OpenStreetMap
const MAX_DELIVERY_KM = 5;

// Estado da verificação do endereço
// status: 'pending' | 'checking' | 'ok' | 'out' | 'notfound'
let deliveryCheck = { status: 'pending', distanceKm: null, lat: null, lng: null, source: null };

document.addEventListener('DOMContentLoaded', () => {
  setupCepField();

  // Qualquer alteração no endereço invalida a confirmação anterior
  ['custCep', 'custStreet', 'custNumber', 'custNeighborhood'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', () => {
      if (deliveryCheck.status !== 'pending' && deliveryCheck.status !== 'checking') resetDeliveryCheck();
    });
  });
});

// Distância em linha reta entre dois pontos (fórmula de Haversine)
function haversineKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const toRad = d => d * Math.PI / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a = Math.sin(dLat / 2) ** 2 +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

function formatKm(km) {
  return km.toFixed(1).replace('.', ',') + ' km';
}

// ---------------- CEP (ViaCEP) ----------------
function setupCepField() {
  const cepInput = document.getElementById('custCep');
  if (!cepInput) return;

  cepInput.addEventListener('input', (e) => {
    let v = e.target.value.replace(/\D/g, '').slice(0, 8);
    e.target.value = v.length > 5 ? `${v.slice(0, 5)}-${v.slice(5)}` : v;
    if (v.length === 8) lookupCep(v);
  });
}

async function lookupCep(cep) {
  const status = document.getElementById('cepStatus');
  status.className = 'col-span-2 self-center text-[11px] text-gray-400';
  status.innerText = 'Buscando CEP...';
  try {
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await res.json();
    if (data.erro) throw new Error('CEP não encontrado');

    if (data.logradouro) document.getElementById('custStreet').value = data.logradouro;
    if (data.bairro) document.getElementById('custNeighborhood').value = data.bairro;
    status.className = 'col-span-2 self-center text-[11px] text-emerald-400';
    status.innerText = `${data.localidade}/${data.uf} ✓`;
    document.getElementById('custNumber').focus();
  } catch (e) {
    status.className = 'col-span-2 self-center text-[11px] text-red-400';
    status.innerText = 'CEP não encontrado. Preencha a rua manualmente.';
  }
}

// ---------------- Geocodificação (OpenStreetMap / Nominatim) ----------------
async function nominatimSearch(params) {
  const query = new URLSearchParams({ format: 'json', limit: '1', countrycodes: 'br', ...params });
  const res = await fetch(`https://nominatim.openstreetmap.org/search?${query}`, {
    headers: { 'Accept-Language': 'pt-BR' }
  });
  const data = await res.json();
  return data && data.length ? { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) } : null;
}

// Tenta do mais preciso (rua + número) ao mais genérico (CEP)
async function geocodeAddress({ street, number, neighborhood, cep }) {
  const attempts = [];
  if (street) {
    if (neighborhood) {
      attempts.push({ q: `${street}, ${number ? number + ', ' : ''}${neighborhood}, Rio de Janeiro, RJ` });
      attempts.push({ q: `${street}, ${neighborhood}, Rio de Janeiro, RJ` });
    }
    attempts.push({ street: `${number ? number + ' ' : ''}${street}`, city: 'Rio de Janeiro', state: 'RJ', country: 'Brasil' });
  }
  if (cep) attempts.push({ postalcode: cep, country: 'Brasil' });

  for (const params of attempts) {
    try {
      const r = await nominatimSearch(params);
      if (r) return r;
    } catch (e) {
      console.error('Falha na geocodificação', e);
    }
  }
  return null;
}

// ---------------- Ações do cliente ----------------
async function confirmAddress() {
  const street = document.getElementById('custStreet').value.trim();
  const number = document.getElementById('custNumber').value.trim();
  const neighborhood = document.getElementById('custNeighborhood').value.trim();
  const cep = document.getElementById('custCep').value.replace(/\D/g, '');

  if (!street || !number || !neighborhood) {
    showDeliveryStatus('error', 'Preencha Rua, Número e Bairro antes de confirmar.');
    return;
  }

  deliveryCheck.status = 'checking';
  showDeliveryStatus('info', '<i class="fa-solid fa-spinner fa-spin mr-1"></i>Verificando a distância até a loja...');

  const coords = await geocodeAddress({ street, number, neighborhood, cep });
  if (!coords) {
    deliveryCheck = { status: 'notfound', distanceKm: null, lat: null, lng: null, source: null };
    showDeliveryStatus('error',
      'Não conseguimos localizar esse endereço no mapa. Confira os dados ou toque em <strong>"Usar minha localização"</strong>.');
    return;
  }
  applyDeliveryResult(coords.lat, coords.lng, 'endereço');
}

function useMyLocation() {
  if (!navigator.geolocation) {
    showDeliveryStatus('error', 'Seu navegador não permite obter a localização.');
    return;
  }
  if (!window.isSecureContext) {
    showDeliveryStatus('error',
      'A localização do aparelho só funciona em site seguro (https). Por enquanto, use "Confirmar endereço".');
    return;
  }

  deliveryCheck.status = 'checking';
  showDeliveryStatus('info', '<i class="fa-solid fa-spinner fa-spin mr-1"></i>Obtendo sua localização...');

  navigator.geolocation.getCurrentPosition(
    pos => applyDeliveryResult(pos.coords.latitude, pos.coords.longitude, 'GPS'),
    () => {
      deliveryCheck.status = 'pending';
      showDeliveryStatus('error', 'Não foi possível obter sua localização. Permita o acesso ou use "Confirmar endereço".');
    },
    { enableHighAccuracy: true, timeout: 15000 }
  );
}

function applyDeliveryResult(lat, lng, source) {
  const distanceKm = haversineKm(STORE_LOCATION.lat, STORE_LOCATION.lng, lat, lng);
  const ok = distanceKm <= MAX_DELIVERY_KM;
  deliveryCheck = { status: ok ? 'ok' : 'out', distanceKm, lat, lng, source };

  if (ok) {
    showDeliveryStatus('success',
      `<i class="fa-solid fa-circle-check mr-1"></i><strong>Entregamos no seu endereço!</strong> ` +
      `Distância aproximada: ${formatKm(distanceKm)} da loja.`);
  } else {
    showDeliveryStatus('error',
      `<i class="fa-solid fa-circle-xmark mr-1"></i><strong>Fora da área de entrega.</strong> ` +
      `Seu endereço fica a ${formatKm(distanceKm)} da loja e entregamos até ${MAX_DELIVERY_KM} km. ` +
      `<button type="button" onclick="setDeliveryType('retirada')" class="underline font-bold">Escolher retirada no local</button>`);
  }
}

function resetDeliveryCheck() {
  deliveryCheck = { status: 'pending', distanceKm: null, lat: null, lng: null, source: null };
  const box = document.getElementById('deliveryCheckStatus');
  if (box) box.classList.add('hidden');
}

function showDeliveryStatus(type, html) {
  const box = document.getElementById('deliveryCheckStatus');
  const styles = {
    success: 'bg-emerald-950/50 border border-emerald-500/40 text-emerald-300',
    error: 'bg-red-950/50 border border-red-500/40 text-red-300',
    info: 'bg-brand-card border border-brand-border text-gray-300'
  };
  box.className = `text-[11px] rounded-lg p-2 leading-snug ${styles[type]}`;
  box.innerHTML = html;
}

// Usado no envio do pedido: retorna true se pode prosseguir com a entrega
function validateDeliveryArea() {
  switch (deliveryCheck.status) {
    case 'ok':
      return true;
    case 'checking':
      alert('Aguarde, estamos verificando seu endereço...');
      return false;
    case 'out':
      alert(`Seu endereço fica a ${formatKm(deliveryCheck.distanceKm)} da loja. Entregamos somente até ${MAX_DELIVERY_KM} km.\n\nVocê pode escolher "Retirada no Local".`);
      return false;
    case 'notfound':
      alert('Não conseguimos localizar seu endereço. Confira os dados ou use "Usar minha localização".');
      return false;
    default:
      alert('Toque em "Confirmar endereço" para verificarmos se entregamos na sua região.');
      document.getElementById('btnConfirmAddress').scrollIntoView({ behavior: 'smooth', block: 'center' });
      return false;
  }
}
