// Banco de Dados de Produtos baseado no Cardápio Real do Churrasquinho do Ivanzinho
const products = [
  // 1. REFEIÇÕES MISTAS
  {
    id: 'ref-1',
    category: 'refeicoes',
    name: 'Refeição Mista - Individual (1 Pessoa)',
    description: 'Churrasco misto suculento com arroz, farofa, vinagrete e salpicão.',
    price: 25.00,
    icon: 'fa-drumstick-bite'
  },
  {
    id: 'ref-2',
    category: 'refeicoes',
    name: 'Refeição Mista - 2 Pessoas',
    description: 'Generosa porção de churrasco misto com todos os acompanhamentos para 2 pessoas.',
    price: 49.00,
    icon: 'fa-drumstick-bite'
  },
  {
    id: 'ref-3',
    category: 'refeicoes',
    name: 'Refeição Mista - 3 Pessoas',
    description: 'Ideal para compartilhar em família: churrasco misto farto com acompanhamentos completos.',
    price: 70.00,
    icon: 'fa-drumstick-bite'
  },
  {
    id: 'ref-4',
    category: 'refeicoes',
    name: 'Refeição Mista - 4 Pessoas',
    description: 'Combo família especial: muito churrasco misto acompanhado de arroz, farofa, vinagrete e salpicão.',
    price: 95.00,
    icon: 'fa-drumstick-bite'
  },

  // 2. PORÇÕES MISTAS
  {
    id: 'porc-1',
    category: 'porcoes',
    name: 'Porção Mista - Individual (1 Pessoa)',
    description: 'Carne de boi, carne de porco, linguiça toscana e frango grelhado na brasa.',
    price: 25.00,
    icon: 'fa-fire'
  },
  {
    id: 'porc-2',
    category: 'porcoes',
    name: 'Porção Mista - Pequena (2 Pessoas)',
    description: 'Carne de boi, carne de porco, linguiça toscana e frango para 2 pessoas.',
    price: 45.00,
    icon: 'fa-fire'
  },
  {
    id: 'porc-3',
    category: 'porcoes',
    name: 'Porção Mista - Média (3 Pessoas)',
    description: 'Carne de boi, carne de porco, linguiça toscana e frango para 3 pessoas.',
    price: 65.00,
    icon: 'fa-fire'
  },
  {
    id: 'porc-4',
    category: 'porcoes',
    name: 'Porção Mista - Grande (4 Pessoas)',
    description: 'Porção turbinada de carne de boi, porco, linguiça e frango para até 4 pessoas.',
    price: 75.00,
    icon: 'fa-fire'
  },

  // 3. EXTRAS & ACOMPANHAMENTOS
  {
    id: 'ext-1',
    category: 'acompanhamentos',
    name: 'Batata com Cheddar',
    description: 'Batata frita sequinha e crocante coberta com cheddar cremoso e bacon.',
    price: 18.00,
    icon: 'fa-bowl-rice'
  },
  {
    id: 'ext-2',
    category: 'acompanhamentos',
    name: 'Batata Frita Tradicional',
    description: 'Porção de batatas douradas e crocantes, preparadas na hora.',
    price: 15.00,
    icon: 'fa-bowl-rice'
  },
  {
    id: 'ext-3',
    category: 'acompanhamentos',
    name: 'Pão de Alho Recheado (Unidade)',
    description: 'Pão de alho crocante por fora e ultra recheado por dentro.',
    price: 4.00,
    icon: 'fa-bread-slice'
  },

  // 4. BALDES DE CERVEJA
  {
    id: 'bald-1',
    category: 'baldes',
    name: 'Balde Cerveja (5 Unidades) - Brahma, Antártica ou Império',
    description: 'Balde com 5 latinhas estalando de geladas no gelo. Escolha a marca!',
    price: 35.00,
    hasOptions: true,
    optionTitle: 'Escolha a marca da cerveja do balde:',
    options: ['Brahma', 'Antártica', 'Império'],
    icon: 'fa-beer-mug-empty'
  },
  {
    id: 'bald-2',
    category: 'baldes',
    name: 'Balde Amstel Lager (5 Unidades)',
    description: 'Balde com 5 latões/latas de Amstel puro malte bem geladas.',
    price: 40.00,
    icon: 'fa-beer-mug-empty'
  },
  {
    id: 'bald-3',
    category: 'baldes',
    name: 'Balde Heineken (5 Unidades)',
    description: 'Balde com 5 latinhas de Heineken no gelo trincando.',
    price: 48.00,
    icon: 'fa-beer-mug-empty'
  },

  // 5. BEBIDAS & REFRIGERANTES
  {
    id: 'beb-1',
    category: 'bebidas',
    name: 'Refrigerante Lata (350ml)',
    description: 'Lata gelada. Escolha o sabor.',
    price: 8.00,
    hasOptions: true,
    optionTitle: 'Escolha o sabor da lata:',
    options: ['Coca-Cola Normal', 'Coca-Cola Zero', 'Guaraná Antarctica', 'Fanta Laranja'],
    icon: 'fa-wine-bottle'
  },
  {
    id: 'beb-2',
    category: 'bebidas',
    name: 'Coca-Cola 1,5L',
    description: 'Garrafa de 1,5 Litro bem gelada para toda a família.',
    price: 14.00,
    icon: 'fa-bottle-water'
  },
  {
    id: 'beb-3',
    category: 'bebidas',
    name: 'Refrigerante 1,5L Sabores',
    description: 'Garrafa 1,5L. Escolha entre Laranja, Guaraná, Pepsi ou Fanta Uva.',
    price: 13.00,
    hasOptions: true,
    optionTitle: 'Escolha o sabor de 1,5L:',
    options: ['Laranja', 'Guaraná', 'Pepsi', 'Fanta Uva'],
    icon: 'fa-bottle-water'
  },
  {
    id: 'beb-4',
    category: 'bebidas',
    name: 'H2O Limoneto',
    description: 'Bebida levemente gaseificada com suco de limão natural.',
    price: 8.00,
    icon: 'fa-bottle-water'
  },
  {
    id: 'beb-5',
    category: 'bebidas',
    name: 'Cerveja Império (Lata)',
    description: 'Cerveja puro malte gelada em lata.',
    price: 7.50,
    icon: 'fa-beer-mug-empty'
  },
  {
    id: 'beb-6',
    category: 'bebidas',
    name: 'Cerveja Brahma (Lata)',
    description: 'Cerveja clássica refrescante em lata.',
    price: 7.50,
    icon: 'fa-beer-mug-empty'
  },
  {
    id: 'beb-7',
    category: 'bebidas',
    name: 'Latão Cerveja Amstel',
    description: 'Latão puro malte 473ml geladíssimo.',
    price: 8.50,
    icon: 'fa-beer-mug-empty'
  },
  {
    id: 'beb-8',
    category: 'bebidas',
    name: 'Latão Cerveja Antártica',
    description: 'Latão 473ml trincando de gelado.',
    price: 7.50,
    icon: 'fa-beer-mug-empty'
  },
  {
    id: 'beb-9',
    category: 'bebidas',
    name: 'Latão Cerveja Heineken',
    description: 'Latão 473ml Heineken puro malte importada.',
    price: 10.00,
    icon: 'fa-beer-mug-empty'
  },
  {
    id: 'beb-10',
    category: 'bebidas',
    name: 'Água Mineral 500ml',
    description: 'Água mineral fresca e gelada.',
    price: 4.00,
    hasOptions: true,
    optionTitle: 'Selecione o tipo de água:',
    options: ['Sem Gás', 'Com Gás'],
    icon: 'fa-glass-water'
  },
  {
    id: 'beb-11',
    category: 'bebidas',
    name: 'Guaravita',
    description: 'Copo tradicional de Guaravita carioca geladinho.',
    price: 4.00,
    icon: 'fa-glass-water'
  },

  // 6. DRINKS & COPÕES
  {
    id: 'drk-1',
    category: 'drinks',
    name: 'Copão de Gin',
    description: 'Copão caprichado de Gin com tônica/energético, gelo e frutas/limão.',
    price: 15.00,
    icon: 'fa-martini-glass-citrus'
  },
  {
    id: 'drk-2',
    category: 'drinks',
    name: 'Copão de Vinho (300 ml)',
    description: 'Vinho tinto selecionado servido bem gelado no copo de 300ml.',
    price: 6.00,
    icon: 'fa-wine-glass'
  }
];

// Estado do Carrinho: Map de itemKey -> { product, quantity, selectedOption }
let cart = {};
let currentDeliveryType = 'entrega'; // 'entrega' ou 'retirada'

// Variáveis de controle para o Modal de Opções
let pendingOptionProduct = null;

// Inicialização da Página
document.addEventListener('DOMContentLoaded', () => {
  renderAllProducts();
  loadCartFromStorage();
  loadCustomerFromStorage();
  updateDeliveryRestrictions();
  updateCartUI();
  setupPhoneMask();
});

// Verifica se o item está bloqueado para entrega (Baldes e Drinks)
function isItemBlockedForDelivery(prod) {
  return currentDeliveryType === 'entrega' && (prod.category === 'baldes' || prod.category === 'drinks');
}

// Renderização dos Produtos nas seções
function renderAllProducts() {
  const sections = {
    'refeicoes': document.getElementById('list-refeicoes'),
    'porcoes': document.getElementById('list-porcoes'),
    'acompanhamentos': document.getElementById('list-acompanhamentos'),
    'baldes': document.getElementById('list-baldes'),
    'bebidas': document.getElementById('list-bebidas'),
    'drinks': document.getElementById('list-drinks'),
  };

  products.forEach(prod => {
    const targetEl = sections[prod.category];
    if (!targetEl) return;

    const card = document.createElement('div');
    card.id = `card-${prod.id}`;
    card.className = 'product-card flex items-center justify-between gap-3';
    
    // Contagem atual desse produto (seja com ou sem opções)
    const currentQty = getTotalQtyForProduct(prod.id);
    const isBlocked = isItemBlockedForDelivery(prod);

    card.innerHTML = `
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2">
          <i class="fa-solid ${prod.icon} text-brand-gold text-sm"></i>
          <h3 class="font-bold text-sm text-gray-100 leading-snug truncate">${prod.name}</h3>
        </div>
        <p class="text-xs text-gray-400 mt-1 line-clamp-2 leading-relaxed">${prod.description}</p>
        <div class="mt-2 flex items-center gap-2 flex-wrap">
          <span class="text-sm font-extrabold text-brand-gold">R$ ${prod.price.toFixed(2).replace('.', ',')}</span>
          ${prod.hasOptions ? '<span class="text-[10px] bg-brand-border text-gray-300 px-2 py-0.5 rounded-full font-semibold">Escolher sabor/opção</span>' : ''}
          <span id="blocked-tag-${prod.id}" class="blocked-pill ${isBlocked ? '' : 'hidden'}">
            <i class="fa-solid fa-ban text-[10px]"></i> Apenas Retirada
          </span>
        </div>
      </div>
      
      <!-- Controles de Quantidade -->
      <div class="flex items-center space-x-1.5 flex-shrink-0">
        <button id="btn-minus-${prod.id}" onclick="handleDecrease('${prod.id}')" class="qty-btn qty-btn-minus" title="Diminuir">
          <i class="fa-solid fa-minus text-xs"></i>
        </button>
        <span id="qty-display-${prod.id}" class="w-6 text-center font-bold text-sm text-white">
          ${currentQty}
        </span>
        <button id="btn-plus-${prod.id}" onclick="handleIncrease('${prod.id}')" class="qty-btn qty-btn-plus shadow-md" title="Adicionar">
          <i class="fa-solid fa-plus text-xs"></i>
        </button>
      </div>
    `;

    targetEl.appendChild(card);
    updateCardHighlight(prod.id);
  });
}

// Filtro de Categorias da Barra Deslizante
function filterCategory(cat) {
  const buttons = document.querySelectorAll('.category-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  
  // Acha o botão clicado
  const activeBtn = Array.from(buttons).find(b => b.getAttribute('onclick')?.includes(cat));
  if (activeBtn) activeBtn.classList.add('active');

  const sections = document.querySelectorAll('.product-section');
  if (cat === 'todos') {
    sections.forEach(s => s.classList.remove('hidden'));
  } else {
    sections.forEach(s => {
      if (s.id === `sec-${cat}`) {
        s.classList.remove('hidden');
        s.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        s.classList.add('hidden');
      }
    });
  }
}

// Manipulação de Aumento de Quantidade
function handleIncrease(productId) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  // Bloqueio para entrega
  if (isItemBlockedForDelivery(prod)) {
    showToast(`⚠️ "${prod.name}" disponível apenas para Retirada no Local.`);
    return;
  }

  if (prod.hasOptions) {
    // Abre modal para escolher a opção/sabor
    openOptionModal(prod);
  } else {
    addItemToCart(prod.id, null);
  }
}

// Manipulação de Diminuição de Quantidade
function handleDecrease(productId) {
  // Procura no carrinho chaves que começam com esse productId
  const keys = Object.keys(cart).filter(k => cart[k].product.id === productId);
  if (keys.length === 0) return;

  // Se tiver mais de uma variação (ex: com sabor), remove da última adicionada ou pede no carrinho
  const targetKey = keys[keys.length - 1];
  if (cart[targetKey].quantity > 1) {
    cart[targetKey].quantity--;
  } else {
    delete cart[targetKey];
  }

  saveCartToStorage();
  updateCartUI();
  updateProductDisplay(productId);
}

// Adiciona item com ou sem opção ao carrinho
function addItemToCart(productId, selectedOption) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  const key = selectedOption ? `${productId}___${selectedOption}` : productId;

  if (cart[key]) {
    cart[key].quantity++;
  } else {
    cart[key] = {
      product: prod,
      quantity: 1,
      selectedOption: selectedOption || null
    };
  }

  showToast(`"${prod.name}${selectedOption ? ' (' + selectedOption + ')' : ''}" adicionado!`);
  saveCartToStorage();
  updateCartUI();
  updateProductDisplay(productId);
}

// Modal de Opções (Sabores / Marcas)
function openOptionModal(prod) {
  pendingOptionProduct = prod;
  const modal = document.getElementById('optionModal');
  const title = document.getElementById('optionModalTitle');
  const subtitle = document.getElementById('optionModalSubtitle');
  const choicesContainer = document.getElementById('optionModalChoices');

  title.innerText = prod.name;
  subtitle.innerText = prod.optionTitle || 'Escolha uma das opções abaixo:';

  choicesContainer.innerHTML = '';
  prod.options.forEach((opt, idx) => {
    const label = document.createElement('label');
    label.className = 'flex items-center justify-between p-3 rounded-xl border border-brand-border bg-brand-dark/80 cursor-pointer hover:border-brand-gold/60 transition-all';
    label.innerHTML = `
      <div class="flex items-center space-x-2.5">
        <input type="radio" name="optChoice" value="${opt}" ${idx === 0 ? 'checked' : ''} class="text-brand-gold focus:ring-brand-gold">
        <span class="text-sm font-semibold text-gray-200">${opt}</span>
      </div>
      <i class="fa-solid fa-check text-brand-gold text-xs opacity-0 check-indicator"></i>
    `;
    choicesContainer.appendChild(label);
  });

  const confirmBtn = document.getElementById('optionModalConfirmBtn');
  confirmBtn.onclick = () => {
    const selected = document.querySelector('input[name="optChoice"]:checked');
    if (selected) {
      addItemToCart(prod.id, selected.value);
    }
    closeOptionModal();
  };

  modal.classList.remove('hidden');
}

function closeOptionModal() {
  document.getElementById('optionModal').classList.add('hidden');
  pendingOptionProduct = null;
}

// Retorna quantidade total de um determinado produto (somando variações de opções)
function getTotalQtyForProduct(productId) {
  let total = 0;
  for (const key in cart) {
    if (cart[key].product.id === productId) {
      total += cart[key].quantity;
    }
  }
  return total;
}

// Atualiza o contador exibido no card do produto
function updateProductDisplay(productId) {
  const qtyEl = document.getElementById(`qty-display-${productId}`);
  if (qtyEl) {
    qtyEl.innerText = getTotalQtyForProduct(productId);
  }
  updateCardHighlight(productId);
}

function updateCardHighlight(productId) {
  const card = document.getElementById(`card-${productId}`);
  if (!card) return;
  const prod = products.find(p => p.id === productId);
  const total = getTotalQtyForProduct(productId);
  const isBlocked = prod ? isItemBlockedForDelivery(prod) : false;

  // Destaque de itens no carrinho
  if (total > 0) {
    card.classList.add('has-items');
  } else {
    card.classList.remove('has-items');
  }

  // Estilo visual de bloqueio para entrega
  const btnPlus = document.getElementById(`btn-plus-${productId}`);
  const btnMinus = document.getElementById(`btn-minus-${productId}`);
  const blockedTag = document.getElementById(`blocked-tag-${productId}`);

  if (isBlocked) {
    card.classList.add('delivery-blocked');
    if (blockedTag) blockedTag.classList.remove('hidden');
    if (btnPlus) {
      btnPlus.classList.add('opacity-40', 'cursor-not-allowed');
      btnPlus.title = 'Indisponível para entrega (apenas retirada)';
    }
  } else {
    card.classList.remove('delivery-blocked');
    if (blockedTag) blockedTag.classList.add('hidden');
    if (btnPlus) {
      btnPlus.classList.remove('opacity-40', 'cursor-not-allowed');
      btnPlus.title = 'Adicionar';
    }
  }
}

// Atualiza a exibição de restrições de entrega em todos os cards e banners
function updateDeliveryRestrictions() {
  const alertBaldes = document.getElementById('alert-baldes-delivery');
  const alertDrinks = document.getElementById('alert-drinks-delivery');
  const badgeBaldes = document.getElementById('badge-baldes-exclusivo');
  const badgeDrinks = document.getElementById('badge-drinks-exclusivo');

  const isDelivery = currentDeliveryType === 'entrega';

  if (alertBaldes) alertBaldes.classList.toggle('hidden', !isDelivery);
  if (alertDrinks) alertDrinks.classList.toggle('hidden', !isDelivery);
  if (badgeBaldes) badgeBaldes.classList.toggle('hidden', !isDelivery);
  if (badgeDrinks) badgeDrinks.classList.toggle('hidden', !isDelivery);

  // Se o usuário mudou para Entrega, remove automaticamente baldes e drinks que já estavam no carrinho
  if (isDelivery) {
    let removedItems = [];
    Object.keys(cart).forEach(key => {
      const item = cart[key];
      if (item.product.category === 'baldes' || item.product.category === 'drinks') {
        removedItems.push(item.product.name);
        delete cart[key];
      }
    });

    if (removedItems.length > 0) {
      showToast(`⚠️ Itens de Baldes/Drinks foram removidos do carrinho pois não estão disponíveis para entrega.`);
      saveCartToStorage();
      updateCartUI();
    }
  }

  // Atualiza visual de todos os produtos
  products.forEach(p => updateProductDisplay(p.id));
}


// Atualiza a Barra Inferior e os Valores do Carrinho
function updateCartUI() {
  const floatingCart = document.getElementById('floatingCart');
  const cartCountBadge = document.getElementById('cartCountBadge');
  const cartTotalHeader = document.getElementById('cartTotalHeader');
  const modalSubtotal = document.getElementById('modalSubtotal');
  const modalTotal = document.getElementById('modalTotal');
  const cartItemsList = document.getElementById('cartItemsList');

  let totalItems = 0;
  let totalPrice = 0;

  cartItemsList.innerHTML = '';

  const entries = Object.entries(cart);

  if (entries.length === 0) {
    floatingCart.classList.add('translate-y-full');
    cartItemsList.innerHTML = `
      <div class="text-center py-8 text-gray-400">
        <i class="fa-solid fa-basket-shopping text-3xl mb-2 text-gray-500"></i>
        <p class="text-xs">Seu carrinho está vazio.</p>
        <p class="text-[11px] text-gray-500">Escolha os itens no cardápio acima para começar!</p>
      </div>
    `;
  } else {
    floatingCart.classList.remove('translate-y-full');

    entries.forEach(([key, item]) => {
      totalItems += item.quantity;
      const itemSubtotal = item.product.price * item.quantity;
      totalPrice += itemSubtotal;

      const itemRow = document.createElement('div');
      itemRow.className = 'flex items-center justify-between p-2.5 rounded-xl bg-brand-dark/80 border border-brand-border';
      itemRow.innerHTML = `
        <div class="flex-1 min-w-0 pr-2">
          <p class="font-bold text-xs text-gray-200 truncate">
            ${item.product.name}
          </p>
          ${item.selectedOption ? `<p class="text-[11px] text-yellow-400 font-semibold">• Opção: ${item.selectedOption}</p>` : ''}
          <span class="text-xs text-gray-400">R$ ${item.product.price.toFixed(2).replace('.', ',')} un.</span>
        </div>

        <div class="flex items-center space-x-2">
          <div class="flex items-center bg-brand-cardLight border border-brand-border rounded-lg">
            <button onclick="changeCartItemQty('${key}', -1)" class="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white">
              <i class="fa-solid fa-minus text-[10px]"></i>
            </button>
            <span class="w-6 text-center text-xs font-bold text-white">${item.quantity}</span>
            <button onclick="changeCartItemQty('${key}', 1)" class="w-6 h-6 flex items-center justify-center text-brand-gold hover:text-yellow-300">
              <i class="fa-solid fa-plus text-[10px]"></i>
            </button>
          </div>

          <span class="text-xs font-extrabold text-brand-gold w-16 text-right">
            R$ ${itemSubtotal.toFixed(2).replace('.', ',')}
          </span>

          <button onclick="removeCartItem('${key}')" class="text-gray-500 hover:text-red-400 text-xs p-1" title="Remover">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      `;
      cartItemsList.appendChild(itemRow);
    });
  }

  const formattedTotal = `R$ ${totalPrice.toFixed(2).replace('.', ',')}`;
  cartCountBadge.innerText = totalItems;
  cartTotalHeader.innerText = formattedTotal;
  modalSubtotal.innerText = formattedTotal;
  modalTotal.innerText = formattedTotal;
}

function changeCartItemQty(key, delta) {
  if (!cart[key]) return;
  const prodId = cart[key].product.id;

  cart[key].quantity += delta;
  if (cart[key].quantity <= 0) {
    delete cart[key];
  }

  saveCartToStorage();
  updateCartUI();
  updateProductDisplay(prodId);
}

function removeCartItem(key) {
  if (!cart[key]) return;
  const prodId = cart[key].product.id;
  delete cart[key];
  saveCartToStorage();
  updateCartUI();
  updateProductDisplay(prodId);
}

function clearCart() {
  if (confirm('Deseja realmente esvaziar o carrinho?')) {
    cart = {};
    saveCartToStorage();
    products.forEach(p => updateProductDisplay(p.id));
    updateCartUI();
  }
}

// Controle do Modal de Checkout
function openCartModal() {
  document.getElementById('cartModal').classList.remove('hidden');
}

function closeCartModal() {
  document.getElementById('cartModal').classList.add('hidden');
}

// Sincronização bidirecional dos dados do cliente (Início da página e Modal do carrinho)
function syncCustomerData(field, value) {
  const map = {
    'name': ['custNameHeader', 'custName'],
    'phone': ['custPhoneHeader', 'custPhone'],
    'street': ['custStreetHeader', 'custStreet'],
    'number': ['custNumberHeader', 'custNumber'],
    'neighborhood': ['custNeighborhoodHeader', 'custNeighborhood'],
    'complement': ['custComplementHeader', 'custComplement']
  };

  const ids = map[field];
  if (!ids) return;

  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.value !== value) {
      el.value = value;
    }
  });

  saveCustomerToStorage();
}

function saveCustomerToStorage() {
  const data = {
    name: document.getElementById('custNameHeader')?.value || '',
    phone: document.getElementById('custPhoneHeader')?.value || '',
    street: document.getElementById('custStreetHeader')?.value || '',
    number: document.getElementById('custNumberHeader')?.value || '',
    neighborhood: document.getElementById('custNeighborhoodHeader')?.value || '',
    complement: document.getElementById('custComplementHeader')?.value || '',
    deliveryType: currentDeliveryType
  };
  try {
    localStorage.setItem('ivanzinho_customer', JSON.stringify(data));
  } catch (e) {
    console.error(e);
  }
}

function loadCustomerFromStorage() {
  try {
    const saved = localStorage.getItem('ivanzinho_customer');
    if (saved) {
      const data = JSON.parse(saved);
      if (data.name) syncCustomerData('name', data.name);
      if (data.phone) syncCustomerData('phone', data.phone);
      if (data.street) syncCustomerData('street', data.street);
      if (data.number) syncCustomerData('number', data.number);
      if (data.neighborhood) syncCustomerData('neighborhood', data.neighborhood);
      if (data.complement) syncCustomerData('complement', data.complement);
      if (data.deliveryType) setDeliveryType(data.deliveryType);
    }
  } catch (e) {
    console.error(e);
  }
}

// Tipo de Entrega: Delivery x Retirada (Sincroniza Topo da Página e Modal)
function setDeliveryType(type) {
  currentDeliveryType = type;
  
  // Botões do Modal
  const btnEntrega = document.getElementById('btnTipoEntrega');
  const btnRetirada = document.getElementById('btnTipoRetirada');
  const addressSection = document.getElementById('addressSection');
  const modalDeliveryTax = document.getElementById('modalDeliveryTax');

  // Botões do Topo da Página
  const btnHeaderEntrega = document.getElementById('btnHeaderEntrega');
  const btnHeaderRetirada = document.getElementById('btnHeaderRetirada');
  const addressSectionHeader = document.getElementById('addressSectionHeader');

  if (type === 'entrega') {
    if (btnEntrega) btnEntrega.className = 'delivery-type-btn active flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-brand-gold bg-brand-gold/20 text-brand-gold font-bold text-xs transition-all';
    if (btnRetirada) btnRetirada.className = 'delivery-type-btn flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-brand-border bg-brand-card text-gray-400 font-bold text-xs transition-all';
    if (btnHeaderEntrega) btnHeaderEntrega.className = 'delivery-type-btn active flex items-center justify-center gap-2 py-2 px-3 rounded-xl border border-brand-gold bg-brand-gold/20 text-brand-gold font-bold text-xs transition-all';
    if (btnHeaderRetirada) btnHeaderRetirada.className = 'delivery-type-btn flex items-center justify-center gap-2 py-2 px-3 rounded-xl border border-brand-border bg-brand-cardLight text-gray-400 font-bold text-xs transition-all';

    if (addressSection) addressSection.classList.remove('hidden');
    if (addressSectionHeader) addressSectionHeader.classList.remove('hidden');
    if (modalDeliveryTax) modalDeliveryTax.innerText = 'A calcular';
  } else {
    if (btnRetirada) btnRetirada.className = 'delivery-type-btn active flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-brand-gold bg-brand-gold/20 text-brand-gold font-bold text-xs transition-all';
    if (btnEntrega) btnEntrega.className = 'delivery-type-btn flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-brand-border bg-brand-card text-gray-400 font-bold text-xs transition-all';
    if (btnHeaderRetirada) btnHeaderRetirada.className = 'delivery-type-btn active flex items-center justify-center gap-2 py-2 px-3 rounded-xl border border-brand-gold bg-brand-gold/20 text-brand-gold font-bold text-xs transition-all';
    if (btnHeaderEntrega) btnHeaderEntrega.className = 'delivery-type-btn flex items-center justify-center gap-2 py-2 px-3 rounded-xl border border-brand-border bg-brand-cardLight text-gray-400 font-bold text-xs transition-all';

    if (addressSection) addressSection.classList.add('hidden');
    if (addressSectionHeader) addressSectionHeader.classList.add('hidden');
    if (modalDeliveryTax) modalDeliveryTax.innerText = 'Grátis (Retirada no balcão)';
  }

  updateDeliveryRestrictions();
  saveCustomerToStorage();
}

// Alternar Detalhes de Pagamento
function togglePaymentDetails() {
  const selected = document.querySelector('input[name="paymentMethod"]:checked').value;
  const pixNotice = document.getElementById('pixNotice');
  const cashDetails = document.getElementById('cashDetails');
  const cardDetails = document.getElementById('cardDetails');

  pixNotice.classList.add('hidden');
  cashDetails.classList.add('hidden');
  cardDetails.classList.add('hidden');

  if (selected === 'PIX') {
    pixNotice.classList.remove('hidden');
  } else if (selected === 'Dinheiro') {
    cashDetails.classList.remove('hidden');
  } else if (selected === 'Cartão') {
    cardDetails.classList.remove('hidden');
  }
}

// Máscara Simples para Telefone (Aplica em ambos os inputs)
function setupPhoneMask() {
  const inputs = [document.getElementById('custPhone'), document.getElementById('custPhoneHeader')];

  inputs.forEach(input => {
    if (!input) return;
    input.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length > 11) value = value.slice(0, 11);

      let formatted = value;
      if (value.length > 6) {
        formatted = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
      } else if (value.length > 2) {
        formatted = `(${value.slice(0, 2)}) ${value.slice(2)}`;
      }

      e.target.value = formatted;
      syncCustomerData('phone', formatted);
    });
  });
}

// Montagem do Script e Envio para o WhatsApp
function submitOrderToWhatsApp() {
  const entries = Object.entries(cart);
  if (entries.length === 0) {
    alert('Seu carrinho está vazio! Adicione pelo menos um item antes de enviar.');
    return;
  }

  // Validação de segurança: Baldes e Drinks não podem ir por Delivery
  if (currentDeliveryType === 'entrega') {
    const hasBlocked = entries.some(([k, item]) => item.product.category === 'baldes' || item.product.category === 'drinks');
    if (hasBlocked) {
      alert('Atenção: Baldes de Cerveja e Drinks/Copões não possuem condições de entrega (Delivery). Remova-os do carrinho ou altere para "Retirada no Local" para prosseguir.');
      return;
    }
  }

  const name = document.getElementById('custName').value.trim();
  const phone = document.getElementById('custPhone').value.trim();
  const notes = document.getElementById('orderNotes').value.trim();
  const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
  const whatsappNumber = document.getElementById('shopWhatsappNumber').value;

  if (!name) {
    alert('Por favor, informe seu Nome.');
    document.getElementById('custName').focus();
    return;
  }

  if (!phone) {
    alert('Por favor, informe seu Telefone / WhatsApp.');
    document.getElementById('custPhone').focus();
    return;
  }

  let addressInfo = '';
  if (currentDeliveryType === 'entrega') {
    const street = document.getElementById('custStreet').value.trim();
    const number = document.getElementById('custNumber').value.trim();
    const neighborhood = document.getElementById('custNeighborhood').value.trim();
    const complement = document.getElementById('custComplement').value.trim();

    if (!street || !number || !neighborhood) {
      alert('Para entrega (delivery), preencha Rua, Número e Bairro!');
      return;
    }

    addressInfo = `🛵 *Entrega para:*\n` +
                  `📍 *Endereço:* ${street}, Nº ${number}\n` +
                  `🏘️ *Bairro:* ${neighborhood}` + (complement ? ` (${complement})` : '');
  } else {
    addressInfo = `🏬 *Retirada no Local*\n📍 *Ponto de Retirada:* Churrasquinho do Ivanzinho (Rua Domingos Alves Ribeiro, 32 - Campo Grande)`;
  }

  // Detalhe de Pagamento
  let paymentDetails = `💳 *Forma de Pagamento:* ${paymentMethod}`;
  if (paymentMethod === 'PIX') {
    paymentDetails += `\n📲 _(Aguardando o envio do QR Code / Chave PIX pela assistente)_`;
  } else if (paymentMethod === 'Dinheiro') {
    const change = document.getElementById('changeAmount').value.trim();
    paymentDetails += change ? `\n💵 *Troco para:* ${change}` : `\n💵 *Sem troco*`;
  } else if (paymentMethod === 'Cartão') {
    const card = document.getElementById('cardType').value;
    paymentDetails += ` (${card} na entrega)`;
  }

  // Lista dos itens formatada
  let itemsText = '';
  let subtotal = 0;

  entries.forEach(([key, item]) => {
    const itemTotal = item.product.price * item.quantity;
    subtotal += itemTotal;
    const opt = item.selectedOption ? ` (${item.selectedOption})` : '';
    itemsText += `▫️ *${item.quantity}x* ${item.product.name}${opt}\n   ↳ R$ ${itemTotal.toFixed(2).replace('.', ',')}\n`;
  });

  // Montagem final do Script
  const message = 
`🔥 *NOVO PEDIDO - CHURRASQUINHO DO IVANZINHO* 🔥
━━━━━━━━━━━━━━━━━━━━━
👤 *Cliente:* ${name}
📱 *WhatsApp:* ${phone}
${addressInfo}

📋 *ITENS DO PEDIDO:*
${itemsText}
💰 *Subtotal dos Itens:* R$ ${subtotal.toFixed(2).replace('.', ',')}
${currentDeliveryType === 'entrega' ? `🛵 *Taxa de Entrega:* A calcular pela assistente` : `🛵 *Taxa de Entrega:* R$ 0,00 (Retirada)`}
━━━━━━━━━━━━━━━━━━━━━
${paymentDetails}
${notes ? `\n📝 *Observações do Cliente:*\n"${notes}"\n` : ''}
━━━━━━━━━━━━━━━━━━━━━
🤖 _Pedido gerado pelo Cardápio Web oficial._
_Por favor, confirme meu pedido e envie a chave/QR Code do PIX!_`;

  // Codifica para a URL do WhatsApp
  const encodedText = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

  // Abre WhatsApp em nova aba ou aplicativo
  window.open(whatsappUrl, '_blank');
}

// Notificação Toast
function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMessage');
  toastMsg.innerText = msg;
  toast.classList.add('toast-visible');

  setTimeout(() => {
    toast.classList.remove('toast-visible');
  }, 2300);
}

// LocalStorage para persistência temporária
function saveCartToStorage() {
  try {
    localStorage.setItem('ivanzinho_cart', JSON.stringify(cart));
  } catch (e) {
    console.error(e);
  }
}

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem('ivanzinho_cart');
    if (saved) {
      cart = JSON.parse(saved);
      products.forEach(p => updateProductDisplay(p.id));
    }
  } catch (e) {
    console.error(e);
  }
}
