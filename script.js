// Personalize estes dados antes de publicar o catálogo.
const WHATSAPP_NUMBER = "5511970468872"; // Ex.: 5511999999999 (55 + DDD + número)

const products = [
  {
    id: 1, name: "Doce Postal", category: "presentes", tag: "Mensagem especial",
    description: "Uma mensagem especial acompanhada de um biscoito feito para adoçar momentos e tornar o Natal ainda mais encantador!",
    detail: "1 cartão postal + 1 biscoito de aproximadamente 6,5 cm ou gingerbread de 7 cm",
    price: 10,image: "assets/images/doce-postal.jpg", bg: "#eee6d9",
    options: [
      { label: "Escolha o biscoito", values: ["Amanteigado sabor Leite Ninho (6,5 cm)", "Gingerbread de mel com especiarias (7 cm)"] }
    ]
  },
  {
    id: 2, name: "Carinho de Natal", category: "presentes", tag: "Um gesto de carinho",
    description: "Um pequeno gesto de carinho para adoçar o Natal de alguém especial!",
    detail: "1 biscoito amanteigado de aproximadamente 9 cm + embalagem com lapela temática",
    price: 12, image: "assets/images/carinho-de-natal.jpg", bg: "#e9e2d4",
    options: [
      { label: "Escolha o formato", values: ["Árvore com Presépio", "Boneco de Neve", "Gingerbread de mel com especiarias"] },
      { label: "Escolha o sabor", values: ["Leite Ninho", "Panetone com Frutas"] }
    ]
  },
  {
    id: 3, name: "Encanto na Árvore", category: "presentes", tag: "Enfeite especial",
    description: "Uma pequena surpresa natalina para deixar sua árvore ainda mais especial!",
    detail: "Bola de acrílico transparente de 6,5 cm + card porta-bola + biscoito de aproximadamente 5 cm",
    price: 16.90, image: "assets/images/encanto-na-arvore.jpg", bg: "#e4e9df",
    options: [
      { label: "Escolha o formato", values: ["Gingerbread", "Papai Noel", "Árvore de Natal", "Feliz Natal"] },
      { label: "Escolha o sabor", values: ["Leite Ninho", "Mel com Especiarias", "Panetone com Frutas"] }
    ]
  },
  {
    id: 4, name: "Meu Kit de Natal", category: "kits", tag: "Kit com 5 biscoitos",
    description: "Pequenos detalhes, sabores especiais e todo o encanto do Natal em um só kit!",
    detail: "5 biscoitos amanteigados de aproximadamente 5 cm cada, decorados com carimbos natalinos",
    price: 24.90, image: "assets/images/meu-kit-de-natal.jpg", bg: "#e8e1d3",
    options: [
      { label: "Escolha o sabor", values: ["Leite Ninho", "Panetone com Frutas"] }
    ]
  },
  {
    id: 5, name: "Caixa Recado de Natal", category: "presentes", tag: "Presente delicado",
    description: "Um presente delicado para transmitir carinho e espalhar a magia do Natal!",
    detail: "1 caixa com espaço para mensagem + 1 biscoito amanteigado de aproximadamente 8 cm decorado com glacê real",
    price: 32.90, image: "assets/images/caixa-recado-de-natal.jpg", bg: "#f0dfd8",
    options: [
      { label: "Escolha o formato", values: ["Papai Noel", "Boneco de Neve", "Árvore de Natal"] },
      { label: "Escolha o sabor", values: ["Leite Ninho", "Panetone com Frutas"] }
    ]
  },
  {
    id: 6, name: "Quarteto Natalino", category: "kits", tag: "4 biscoitos decorados",
    description: "Quatro biscoitos especiais, decorados à mão para celebrar a magia e os encantos do Natal!",
    detail: "1 card natalino de 6 x 21 cm + 4 biscoitos amanteigados de aproximadamente 5 cm com glacê real",
    price: 39.90, image: "assets/images/quarteto-natalino.jpg", bg: "#e2e8e2",
    options: [
      { label: "Escolha o sabor", values: ["Leite Ninho", "Panetone com Frutas"] }
    ]
  },
  {
    id: 7, name: "Magia dos Noéis", category: "presentes", tag: "Dupla especial",
    description: "Um encontro cheio de encanto e sabor para celebrar a magia do Natal!",
    detail: "1 caixa com visor transparente + 2 biscoitos de aproximadamente 7 cm: Papai Noel e Mamãe Noel com glacê real",
    price: 42.90, image: "assets/images/magia-dos-noeis.jpg", bg: "#f0dfd8",
    options: [
      { label: "Escolha o sabor", values: ["Leite Ninho", "Panetone com Frutas"] }
    ]
  },
  {
    id: 8, name: "Vila dos Gingers", category: "kits", tag: "Com recheio surpresa",
    description: "Uma pequena vila natalina, feita de biscoito e decorada artesanalmente com glacê real. Uma composição encantadora com uma deliciosa surpresa!",
    detail: "Base de biscoito + casinha de aproximadamente 7 x 7 cm com portinha aberta + recheio de jujubas + árvore decorada + boneco de neve ou gingerbread conforme disponibilidade",
    price: 49.90, image: "assets/images/vila-gingers.jpg", bg: "#ead9c6",
    options: [
      { label: "Escolha o sabor", values: ["Panetone com Frutas", "Mel com Especiarias"] }
    ]
  },
  {
    id: 9, name: "Alegria Natalina", category: "diversao", tag: "Aproximadamente 300 g",
    description: "Uma mistura deliciosa de cores, formatos e sabores para deixar o Natal ainda mais divertido!",
    detail: "Pacote com aproximadamente 300 g de biscoitos amanteigados coloridos, em formatos natalinos variados",
    price: 55.90,image: "assets/images/alegria-natalina.jpg", bg: "#f0e1dc",
    options: [],
    note: "Seleção sortida com Leite Ninho, Panetone com Frutas e Mel com Especiarias. Não é possível escolher os sabores individualmente."
  },
  {
    id: 10, name: "Pequenos Encantos", category: "diversao", tag: "Pote presenteável",
    description: "Pequenos biscoitos, grandes momentos de alegria! Uma combinação de cores, sabores e formatos para deixar o Natal ainda mais especial.",
    detail: "Pote de vidro hermético com laço de cetim verde e vermelho + aproximadamente 300 g de mini biscoitos amanteigados coloridos",
    price: 109.90, image: "assets/images/pequenos-encantos.jpg", bg: "#e8dfd0",
    options: [],
    note: "Seleção sortida com Leite Ninho e Mel com Especiarias. Não é possível escolher os sabores individualmente."
  }
];

let activeFilter = "todos";
let cart = [];

const money = value => value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");

function renderProducts() {
  const term = searchInput.value.trim().toLocaleLowerCase("pt-BR");

  const filtered = products.filter(product => {
    const matchesFilter = activeFilter === "todos" || product.category === activeFilter;
    const searchable = `${product.name} ${product.description} ${product.tag} ${product.detail} ${(product.note || "")}`.toLocaleLowerCase("pt-BR");

    return matchesFilter && searchable.includes(term);
  });

  productGrid.innerHTML = filtered.map(product => `
    <article class="product-card">
      <div class="product-visual" style="--visual-bg:${product.bg}">
        <span class="product-tag">${product.tag}</span>
        <img
          src="${product.image}"
          alt="${product.name}"
          class="product-image"
          loading="lazy"
        >
      </div>
      <div class="product-info">
        <span class="product-meta">${product.detail}</span>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        ${product.options?.length ? `<div class="product-options">
          ${product.options.map((option, index) => `
            <label class="option-label">${option.label}
              <select class="product-option" data-option="${index}" aria-label="${option.label}">
                ${option.values.map(value => `<option value="${value}">${value}</option>`).join("")}
              </select>
            </label>`).join("")}
        </div>` : ""}
        ${product.note ? `<p class="product-note">${product.note}</p>` : ""}
        <div class="product-bottom">
          <span class="price">${money(product.price)}</span>
          <button class="add-button" data-add="${product.id}" aria-label="Adicionar ${product.name} à sacola">+</button>
        </div>
      </div>
    </article>`).join("");

  document.getElementById("emptyState").hidden = filtered.length > 0;
}
function addToCart(id, options = []) {
  const key = `${id}|${options.join("|")}`;
  const item = cart.find(entry => entry.key === key);
  if (item) item.quantity++;
  else cart.push({ id, key, options, quantity: 1 });
  renderCart();
}
function changeQuantity(key, amount) {
  const item = cart.find(entry => entry.key === key);
  if (!item) return;
  item.quantity += amount;
  cart = cart.filter(entry => entry.quantity > 0);
  renderCart();
}
function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + products.find(p => p.id === item.id).price * item.quantity, 0);
  document.getElementById("cartCount").textContent = count;
  document.getElementById("cartTotal").textContent = money(total);
  const container = document.getElementById("cartItems");
  container.innerHTML = cart.length ? cart.map(item => {
    const product = products.find(p => p.id === item.id);
    return `<div class="cart-item">
      <div><strong>${product.name}</strong>
      ${item.options?.length ? `<small class="cart-options">${item.options.join(" • ")}</small>` : ""}
      <small>${money(product.price)} • ${money(product.price * item.quantity)}</small></div>
      <div class="item-controls"><button data-change="-1" data-key="${encodeURIComponent(item.key)}" aria-label="Diminuir">−</button><span>${item.quantity}</span><button data-change="1" data-key="${encodeURIComponent(item.key)}" aria-label="Aumentar">+</button></div>
    </div>`;
  }).join("") : '<p class="cart-empty">Sua sacola ainda está vazia. Que tal escolher algumas delícias? ♡</p>';
}
function openCart() {
  document.getElementById("cartOverlay").classList.add("open");
  document.getElementById("cartOverlay").setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeCart() {
  document.getElementById("cartOverlay").classList.remove("open");
  document.getElementById("cartOverlay").setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
function sendOrder() {
  if (!cart.length) { openCart(); return; }
  if (WHATSAPP_NUMBER === "5500000000000") {
    alert("Antes de publicar, configure o número de WhatsApp no início do arquivo script.js.");
    return;
  }
  const lines = cart.map(item => {
    const product = products.find(p => p.id === item.id);
    const choices = item.options?.length ? ` (${item.options.join("; ")})` : "";
    return `• ${item.quantity}x ${product.name}${choices} — ${money(product.price * item.quantity)}`;
  });
  const total = cart.reduce((sum, item) => sum + products.find(p => p.id === item.id).price * item.quantity, 0);
  const message = `Olá! Gostaria de fazer uma encomenda de Natal:\n\n${lines.join("\n")}\n\nSubtotal: ${money(total)}\n\nPoderia confirmar a disponibilidade e as opções de entrega?`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
}

document.getElementById("filters").addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  document.querySelectorAll(".filter").forEach(filter => filter.classList.toggle("active", filter === button));
  renderProducts();
});
searchInput.addEventListener("input", renderProducts);
productGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-add]");
  if (button) {
    const card = button.closest(".product-card");
    const options = [...card.querySelectorAll(".product-option")].map(select => select.value);
    addToCart(Number(button.dataset.add), options);
  }
});
document.getElementById("cartItems").addEventListener("click", event => {
  const button = event.target.closest("[data-change]");
  if (button) changeQuantity(decodeURIComponent(button.dataset.key), Number(button.dataset.change));
});
document.getElementById("openCart").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
document.getElementById("cartOverlay").addEventListener("click", event => {
  if (event.target.id === "cartOverlay") closeCart();
});
document.getElementById("checkoutButton").addEventListener("click", sendOrder);
document.getElementById("orderNow").addEventListener("click", () => {
  if (cart.length) sendOrder();
  else openCart();
});
document.addEventListener("keydown", event => { if (event.key === "Escape") closeCart(); });
document.getElementById("menuToggle").addEventListener("click", () => {
  const nav = document.getElementById("mainNav");
  const open = nav.classList.toggle("open");
  document.getElementById("menuToggle").setAttribute("aria-expanded", String(open));
});
document.querySelectorAll("#mainNav a").forEach(link => link.addEventListener("click", () => {
  document.getElementById("mainNav").classList.remove("open");
  document.getElementById("menuToggle").setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();
renderProducts();
renderCart();
