/* =========================================================
   KhayStore — Boutique en ligne
   Modifiez le catalogue et les réglages ci-dessous.
   ========================================================= */

const SETTINGS = {
  currency: "FCFA",
  // Livraison : null = frais « à confirmer » sur WhatsApp. Mettre un nombre (ex. 1000) pour les afficher.
  freeShippingFrom: null,
  shippingCost: null,
  // Codes promo, ex. { BIENVENUE: 0.10 } pour -10 %. Vide = pas de code promo.
  coupons: {},
  // Mettez votre numéro WhatsApp (format international sans "+", ex. "221771234567")
  // pour recevoir les commandes directement sur WhatsApp. Laissez vide pour désactiver.
  whatsappNumber: "221776455331",
};

const CATEGORIES = [
  { id: "parfums",   name: "Parfums",            desc: "Eaux de parfum & colognes",  emoji: "🌸", bg: "linear-gradient(135deg,#c8553d,#8f3a5a)" },
  { id: "senteurs",  name: "Senteurs & encens",  desc: "Parfums d'intérieur, oud",   emoji: "🕯️", bg: "linear-gradient(135deg,#e4a24a,#c8553d)" },
  { id: "soins",     name: "Soins & beauté",     desc: "Savons, lèvres, cheveux",    emoji: "🧼", bg: "linear-gradient(135deg,#d17a9a,#7d3c6b)" },
  { id: "entretien", name: "Maison & entretien", desc: "Ménage & cuisine",           emoji: "🏠", bg: "linear-gradient(135deg,#4f7a65,#2d4a3e)" },
  // Rubrique discrète : pas de grande vignette, absente de « Tout »,
  // visible seulement par son filtre en fin de liste.
  { id: "intime",    name: "Bien-être intime",   desc: "",                           emoji: "", bg: "", discreet: true },
];
const isDiscreet = (p) => CATEGORIES.find((c) => c.id === p.cat)?.discreet;

// Photos : chaque produit avec "photo" utilise les fichiers
// images/<photo>-principale-400.webp et images/<photo>-principale-800.webp.
// Prix : laissez price à null tant qu'il n'est pas fixé (« Prix bientôt disponible »).
const PRODUCTS = [
  { id: 101, name: "Naseem Marble Whispers", cat: "senteurs", price: 2500, photo: "naseem-marble-whispers", emoji: "🌸", bg: "#f3ede5", tag: "new",
    desc: "Parfum d'intérieur (home freshener) Naseem, gamme Marble Whispers. Flacon de 500 ml." },
  { id: 102, name: "Charbon Al Musk", cat: "senteurs", price: 1000, photo: "charbon-al-musk", emoji: "🔥", bg: "#f3ede5",
    desc: "Rouleau de charbons Al Musk pour brûler l'encens et le bakhoor." },
  { id: 103, name: "Gotaz Frescaz – Eau de Cologne", cat: "parfums", price: 1500, photo: "gotaz-frescaz", emoji: "🍋", bg: "#f3ede5", tag: "new",
    desc: "Agua de Colonia concentrada (eau de Cologne concentrée), flacon spray." },
  { id: 104, name: "Oudh Maattar Fazza", cat: "senteurs", price: 3000, photo: "oudh-maattar-fazza", emoji: "🪵", bg: "#f3ede5",
    desc: "Oudh Maattar Fazza, présenté dans son coffret." },
  { id: 105, name: "Savon Tomato Luffa", cat: "soins", price: 500, photo: "savon-tomato-luffa", emoji: "🧼", bg: "#f3ede5",
    desc: "Savon de beauté Fluffy Luffa à la tomate, avec niacinamide (vitamine B3)." },
  { id: 106, name: "Eau bleue", cat: "entretien", price: 250, photo: "sachet-bleu", emoji: "💧", bg: "#f3ede5",
    desc: "Eau bleue en sachet." },
  { id: 107, name: "Blocs WC Classic 4 fonctions", cat: "entretien", price: 1500, photo: "blocs-wc-classic", emoji: "🚽", bg: "#f3ede5",
    desc: "Blocs WC « 4 Function Formula » à effet désodorisant. Lot de 3 × 50 g." },
  { id: 108, name: "SukGarden – Mousse lavante mains au thé", cat: "soins", price: 1500, photo: "sukgarden-savon-mains", emoji: "🫧", bg: "#f3ede5", tag: "new",
    desc: "Savon mousse pour les mains SukGarden, parfum thé (Tea Bubble Hand Cleaner). Flacon pompe de 500 ml." },
  { id: 109, name: "Lattafa Yara – Eau de parfum", cat: "parfums", price: 2500, photo: "lattafa-yara", emoji: "🌸", bg: "#f3ede5", tag: "new",
    desc: "Eau de parfum Yara de Lattafa, vaporisateur 100 ml." },
  { id: 110, name: "Eyfel Room Spray – Océan", cat: "senteurs", price: 3500, photo: "eyfel-room-spray-ocean", emoji: "🌊", bg: "#f3ede5",
    desc: "Spray d'ambiance Eyfel, senteur Okyanus / Ocean." },
  { id: 111, name: "Pinky Clean – Pâte nettoyante", cat: "entretien", price: 1500, photo: "pinky-clean", emoji: "🧽", bg: "#f3ede5",
    desc: "Pâte nettoyante Pinky Clean pour la maison et l'extérieur. Pot de 500 g." },
  { id: 112, name: "Marquise Bleue – Eau de parfum", cat: "parfums", price: 1000, photo: "marquise-bleue", emoji: "💙", bg: "#f3ede5",
    desc: "Eau de parfum Marquise Bleue (Luca Bossi), vaporisateur 50 ml." },
  { id: 113, name: "Nova Fresh – Désodorisant fraise", cat: "senteurs", price: 1000, photo: "nova-fresh-fraise", emoji: "🍓", bg: "#f3ede5",
    desc: "Désodorisant d'ambiance Nova Fresh, Fruity Collection, senteur fraise. Flacon pulvérisateur." },
  { id: 114, name: "Essuie-tout et support en bambou", cat: "entretien", price: 1500, photo: "essuie-tout-bambou", emoji: "🧻", bg: "#f3ede5",
    desc: "Rouleau d'essuie-tout (50 feuilles) présenté sur un support en bambou." },
  { id: 115, name: "GW – Brosse soufflante GW-6595", cat: "soins", price: 8000, photo: "gw-brosse-sechante", emoji: "💇🏾‍♀️", bg: "#f3ede5", tag: "new",
    desc: "Brosse soufflante GW, modèle GW-6595 (Hair Dryer and Styler) : sèche et coiffe en un seul geste." },
  { id: 116, name: "Mortier avec pilon", cat: "entretien", price: 1000, photo: "mortier-plateau-bambou", emoji: "🥣", bg: "#f3ede5",
    desc: "Mortier avec son pilon. Le plateau visible sur la photo est vendu séparément." },
  { id: 134, name: "Plateau rectangulaire effet bambou", cat: "entretien", price: 400, photo: "mortier-plateau-bambou", emoji: "🍽️", bg: "#f3ede5",
    desc: "Plateau de service rectangulaire effet bambou. Le mortier visible sur la photo est vendu séparément." },
  { id: 117, name: "Kiss Beauty – Sérum lèvres", cat: "soins", price: 1000, photo: "kiss-beauty-lip-serum", emoji: "💋", bg: "#f3ede5",
    desc: "Sérum pour les lèvres Kiss Beauty à l'acide hyaluronique, pour lèvres sèches et gercées. 15 ml." },
  { id: 118, name: "Bioaqua – Tender Red Pigment", cat: "soins", price: 3500, photo: "bioaqua-tender-red", emoji: "🌷", bg: "#f3ede5",
    desc: "Produit de beauté Bioaqua, gamme Tender Red Pigment." },
  { id: 119, name: "Coffret Veyes – 4 eaux de parfum", cat: "parfums", price: 4000, photo: "veyes-coffret-parfums", emoji: "🎁", bg: "#f3ede5", tag: "new",
    desc: "Coffret cadeau Veyes : 4 eaux de parfum de 25 ml (dont Desert Man)." },
  { id: 120, name: "Savon Rasita au miel", cat: "soins", price: 2000, photo: "savon-rasita-miel", emoji: "🍯", bg: "#f3ede5",
    desc: "Savon fait main Rasita au miel et aux huiles essentielles (Honey Essential Oil Handmade Soap). 145 g." },
  { id: 121, name: "Savon Korreanna Kojic", cat: "soins", price: 1000, photo: "savon-korreanna-kojic", emoji: "🧼", bg: "#f3ede5",
    desc: "Savon exfoliant Korreanna à l'acide kojique (Kojic peeling soap), senteur Precious Scent. 70 g." },
  { id: 122, name: "Saphir Affaire pour homme", cat: "parfums", price: 3500, photo: "saphir-affaire-homme", emoji: "💎", bg: "#f3ede5",
    desc: "Eau de parfum Parfums Saphir, Affaire pour homme. 50 ml." },
  { id: 123, name: "Saphir Seduction Man", cat: "parfums", price: 3500, photo: "saphir-seduction-man", emoji: "💎", bg: "#f3ede5",
    desc: "Eau de parfum Parfums Saphir, Seduction Man de Saphir pour homme. 50 ml." },
  { id: 124, name: "Saphir Vive la Femme", cat: "parfums", price: 3500, photo: "saphir-vive-la-femme", emoji: "🌹", bg: "#f3ede5",
    desc: "Eau de parfum Parfums Saphir, Vive la Femme pour femme. 50 ml." },
  { id: 125, name: "Saphir Perfect Woman", cat: "parfums", price: 3500, photo: "saphir-perfect-woman", emoji: "🌹", bg: "#f3ede5",
    desc: "Eau de parfum Parfums Saphir, Saphir Perfect Woman pour femme. 50 ml." },
  { id: 126, name: "King's Essence Marshmallow Blush", cat: "soins", price: 1000, photo: "kings-essence-marshmallow-blush", emoji: "🍬", bg: "#f3ede5",
    desc: "Déodorant parfumé en spray pour le corps King's Essence, Marshmallow Blush. 200 ml." },
  { id: 127, name: "King's Essence Intense Wayfarer", cat: "soins", price: 1000, photo: "kings-essence-intense-wayfarer", emoji: "🖤", bg: "#f3ede5",
    desc: "Déodorant parfumé en spray pour le corps King's Essence, Intense Wayfarer. 200 ml." },
  { id: 128, name: "Black Boos – Eau de toilette", cat: "parfums", price: 1000, photo: "black-boos", emoji: "🖤", bg: "#f3ede5",
    desc: "Eau de toilette Black Boos, vaporisateur 50 ml." },
  { id: 129, name: "Mixgliss Fresh – Menthe poivrée", cat: "intime", price: 2000, photo: "mixgliss-fresh", emoji: "🌿", bg: "#f3ede5",
    desc: "Gel lubrifiant intime à base d'eau Mixgliss Fresh, parfum menthe poivrée. Tube de 70 ml." },
  { id: 130, name: "Rasita – Gommage AHA Collagen", cat: "soins", price: 2500, photo: "rasita-gommage-aha", emoji: "🍍", bg: "#f3ede5", tag: "new",
    desc: "Gommage corps Rasita AHA Collagen « Smooth & Clean » à l'ananas." },
  { id: 131, name: "Déboucheur canalisations Drain Cleaner", cat: "entretien", price: 1500, photo: "deboucheur-drain-cleaner", emoji: "🚿", bg: "#f3ede5",
    desc: "Poudre déboucheur Drain Cleaner à technologie oxygène : décompose graisses et résidus organiques. 300 g." },
  { id: 132, name: "Veyes – Diffuseur à bâtonnets fraise", cat: "senteurs", price: 2000, photo: "veyes-diffuseur-fraise", emoji: "🍓", bg: "#f3ede5",
    desc: "Diffuseur de parfum d'intérieur à bâtonnets Veyes (Reed Diffuser), senteur fraise. 110 ml." },
  { id: 133, name: "Tokyo Night – Déodorant roll-on", cat: "soins", price: 500, photo: "tokyo-night-roll-on", emoji: "🌸", bg: "#f3ede5",
    desc: "Déodorant roll-on anti-transpirant Tokyo Night, senteur florale." },
];

/* ---------- État ---------- */
const store = {
  load(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
  },
  save(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* stockage indisponible */ }
  },
};

let cart = store.load("khay-cart", []);           // [{ id, qty }]
let wishlist = store.load("khay-wishlist", []);   // [id]
let coupon = store.load("khay-coupon", null);
let activeFilter = "all";
let searchTerm = "";
let sortMode = "featured";
let recent = store.load("khay-recent", []);       // [id], le plus récent en premier
const PRICES = PRODUCTS.filter((p) => typeof p.price === "number").map((p) => p.price);
const PRICE_CEIL = PRICES.length ? Math.ceil(Math.max(...PRICES) / 1000) * 1000 : 50000;
let maxPrice = PRICE_CEIL;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Utilitaires ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const money = (n) => `${Math.round(n).toLocaleString("fr-FR")} ${SETTINGS.currency}`;
const findProduct = (id) => PRODUCTS.find((p) => p.id === id);
const stars = (r) => "★".repeat(Math.round(r)) + "☆".repeat(5 - Math.round(r));
const hasPrice = (p) => typeof p.price === "number";
const priceHtml = (p) => hasPrice(p)
  ? `${money(p.price)}${p.old ? `<del>${money(p.old)}</del>` : ""}`
  : `<span class="price--soon">Prix bientôt disponible</span>`;
const priceText = (p) => (hasPrice(p) ? money(p.price) : "Prix à venir");
const fallback = (p) => `onerror="this.replaceWith(document.createTextNode('${p.emoji}'))"`;
const visual = (p) => {
  if (p.photo) {
    const base = `images/${p.photo}-principale`;
    return `<img src="${base}-800.webp" srcset="${base}-400.webp 400w, ${base}-800.webp 800w"
      sizes="(max-width: 560px) 50vw, (max-width: 1024px) 33vw, 300px"
      alt="${p.name}" loading="lazy" decoding="async" width="800" height="800" ${fallback(p)}>`;
  }
  if (p.img) return `<img src="${p.img}" alt="${p.name}" loading="lazy" decoding="async" ${fallback(p)}>`;
  return p.emoji;
};
const heartSvg = `<svg viewBox="0 0 24 24"><path d="M12 21s-7.5-4.6-9.5-9.2C1 8.2 3.3 4.5 7 4.5c2 0 3.5 1.1 5 3 1.5-1.9 3-3 5-3 3.7 0 6 3.7 4.5 7.3C19.5 16.4 12 21 12 21z"/></svg>`;

let toastTimer;
function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
}

function bump(el) {
  el.classList.remove("bump");
  void el.offsetWidth;
  el.classList.add("bump");
}

/* ---------- Catégories & filtres ---------- */
function renderCategories() {
  $("#categoriesGrid").innerHTML = CATEGORIES.filter((c) => !c.discreet).map((c) => `
    <button class="category reveal" style="background:${c.bg}" data-cat="${c.id}">
      <span class="category__emoji">${c.emoji}</span>
      <h3>${c.name}</h3>
      <p>${c.desc}</p>
    </button>`).join("");

  const chips = [{ id: "all", name: "Tout" }, ...CATEGORIES.filter((c) => !c.discreet)];
  if (PRODUCTS.some((p) => p.old)) chips.push({ id: "promo", name: "🔥 Promos" });
  chips.push(...CATEGORIES.filter((c) => c.discreet).map((c) => ({ ...c, cls: " chip--discreet" })));
  $("#filters").innerHTML = chips.map((c) =>
    `<button class="chip${c.cls || ""}${c.id === activeFilter ? " active" : ""}" data-filter="${c.id}">${c.name}</button>`).join("");
}

function setFilter(id) {
  activeFilter = id;
  $$(".chip").forEach((c) => c.classList.toggle("active", c.dataset.filter === id));
  renderProducts();
}

/* ---------- Produits ---------- */
function visibleProducts() {
  let list = PRODUCTS.filter((p) => {
    // Les produits discrets apparaissent dans « Tout » seulement si on les cherche
    const matchFilter = (activeFilter === "all" && (!isDiscreet(p) || searchTerm)) || p.cat === activeFilter
      || (activeFilter === "promo" && p.old && !isDiscreet(p));
    const matchSearch = p.name.toLowerCase().includes(searchTerm) || p.cat.includes(searchTerm);
    return matchFilter && matchSearch && (!hasPrice(p) || maxPrice >= PRICE_CEIL || p.price <= maxPrice);
  });
  const priceOr = (p, dflt) => (hasPrice(p) ? p.price : dflt);
  if (sortMode === "price-asc") list = [...list].sort((a, b) => priceOr(a, Infinity) - priceOr(b, Infinity));
  if (sortMode === "price-desc") list = [...list].sort((a, b) => priceOr(b, -Infinity) - priceOr(a, -Infinity));
  if (sortMode === "rating") list = [...list].sort((a, b) => (b.rating || 0) - (a.rating || 0));
  return list;
}

function productCard(p, i) {
  const discount = p.old ? Math.round((1 - p.price / p.old) * 100) : 0;
  const tag = p.old ? `<span class="card__tag">-${discount} %</span>`
            : p.tag === "new" ? `<span class="card__tag card__tag--new">Nouveau</span>` : "";
  return `
    <article class="card" style="animation-delay:${i * 50}ms">
      <div class="card__media" style="background:${p.bg}" data-view="${p.id}">
        ${tag}
        <span class="card__visual">${visual(p)}</span>
        <button class="card__wish${wishlist.includes(p.id) ? " active" : ""}" data-wish="${p.id}" aria-label="Ajouter aux favoris">${heartSvg}</button>
        <button class="card__quick" data-view="${p.id}">Aperçu rapide</button>
      </div>
      <div class="card__body">
        <span class="card__cat">${CATEGORIES.find((c) => c.id === p.cat).name}</span>
        <h3 class="card__title">${p.name}</h3>
        ${p.reviews ? `<div class="rating">${stars(p.rating)}<small>(${p.reviews})</small></div>` : ""}
        <div class="card__foot">
          <span class="price">${priceHtml(p)}</span>
          ${hasPrice(p) ? `<button class="add-btn" data-add="${p.id}" aria-label="Ajouter au panier">+</button>` : ""}
        </div>
      </div>
    </article>`;
}

function renderProducts() {
  const list = visibleProducts();
  $("#productsGrid").innerHTML = list.map(productCard).join("");
  $("#emptyState").hidden = list.length > 0;
}

function openQuickView(id) {
  const p = findProduct(id);
  addToRecent(id);
  const similar = PRODUCTS.filter((x) => x.cat === p.cat && x.id !== p.id).slice(0, 3);
  $("#productModalContent").innerHTML = `
    <div class="quickview">
      <div class="quickview__media" style="background:${p.bg}">${visual(p)}</div>
      <div>
        <span class="eyebrow">${CATEGORIES.find((c) => c.id === p.cat).name}</span>
        <h3>${p.name}</h3>
        ${p.reviews ? `<div class="rating">${stars(p.rating)}<small>${p.rating} · ${p.reviews} avis</small></div>` : ""}
        <p class="quickview__desc">${p.desc}</p>
        <span class="price">${priceHtml(p)}</span>
        ${hasPrice(p) ? `
        <div class="quickview__actions">
          <div class="qty"><button data-qv="-1">−</button><span id="qvQty">1</span><button data-qv="1">+</button></div>
          <button class="btn btn--primary" id="qvAdd">Ajouter au panier</button>
        </div>` : `<p class="quickview__note">Ce produit sera bientôt disponible à la commande.</p>`}
      </div>
    </div>
    ${similar.length ? `
    <div class="similar">
      <h4>Vous aimerez aussi</h4>
      <div class="similar__list">
        ${similar.map((x) => `
          <button class="mini" data-view="${x.id}">
            <span class="mini__img" style="background:${x.bg}">${visual(x)}</span>
            <span class="mini__name">${x.name}</span>
            <span class="mini__price">${priceText(x)}</span>
          </button>`).join("")}
      </div>
    </div>` : ""}`;
  $("#productModal .modal__box").scrollTop = 0;
  let qty = 1;
  $$("[data-qv]").forEach((b) => b.addEventListener("click", () => {
    qty = Math.max(1, qty + Number(b.dataset.qv));
    $("#qvQty").textContent = qty;
  }));
  $("#qvAdd")?.addEventListener("click", () => {
    addToCart(p.id, qty, $(".quickview__media"));
    closeAll();
  });
  openPanel("#productModal");
}

/* ---------- Favoris ---------- */
function toggleWishlist(id) {
  const has = wishlist.includes(id);
  wishlist = has ? wishlist.filter((w) => w !== id) : [...wishlist, id];
  store.save("khay-wishlist", wishlist);
  toast(has ? "Retiré des favoris" : "❤️ Ajouté aux favoris");
  $$(`[data-wish="${id}"]`).forEach((b) => b.classList.toggle("active", !has));
  renderWishlist();
}

function renderWishlist() {
  const count = $("#wishlistCount");
  count.textContent = wishlist.length;
  bump(count);
  $("#wishlistItems").innerHTML = wishlist.length
    ? wishlist.map(findProduct).filter(Boolean).map((p) => `
        <div class="line">
          <div class="line__img" style="background:${p.bg}">${visual(p)}</div>
          <div><p class="line__title">${p.name}</p><p class="line__price">${priceText(p)}</p></div>
          <div class="line__side">
            ${hasPrice(p) ? `<button class="btn btn--small" data-add="${p.id}">Ajouter</button>` : ""}
            <button class="line__remove" data-wish="${p.id}">Retirer</button>
          </div>
        </div>`).join("")
    : `<div class="drawer__empty"><span>🤍</span>Aucun favori pour le moment.</div>`;
}

/* ---------- Vus récemment ---------- */
function addToRecent(id) {
  recent = [id, ...recent.filter((r) => r !== id)].slice(0, 6);
  store.save("khay-recent", recent);
  renderRecent();
}

function renderRecent() {
  const items = recent.map(findProduct).filter(Boolean);
  $("#recent").hidden = !items.length;
  $("#recentList").innerHTML = items.map((p) => `
    <button class="mini" data-view="${p.id}">
      <span class="mini__img" style="background:${p.bg}">${visual(p)}</span>
      <span class="mini__name">${p.name}</span>
      <span class="mini__price">${priceText(p)}</span>
    </button>`).join("");
}

/* ---------- Animation « vers le panier » ---------- */
function flyToCart(sourceEl) {
  const target = $("#cartBtn");
  if (!sourceEl || reduceMotion || !sourceEl.animate) return bump(target);
  const from = sourceEl.getBoundingClientRect();
  const to = target.getBoundingClientRect();
  const size = Math.min(from.width, from.height, 140);
  const ghost = document.createElement("div");
  ghost.className = "fly";
  ghost.innerHTML = sourceEl.innerHTML;
  Object.assign(ghost.style, {
    width: `${size}px`, height: `${size}px`, fontSize: `${size * 0.6}px`,
    left: `${from.left + from.width / 2 - size / 2}px`, top: `${from.top + from.height / 2 - size / 2}px`,
  });
  document.body.appendChild(ghost);
  const dx = to.left + to.width / 2 - (from.left + from.width / 2);
  const dy = to.top + to.height / 2 - (from.top + from.height / 2);
  ghost.animate([
    { transform: "translate(0, 0) scale(1)", opacity: 1 },
    { transform: `translate(${dx * 0.5}px, ${dy - 80}px) scale(.6)`, opacity: 1, offset: 0.6 },
    { transform: `translate(${dx}px, ${dy}px) scale(.15)`, opacity: .4 },
  ], { duration: 750, easing: "cubic-bezier(.5,0,.3,1)" }).onfinish = () => {
    ghost.remove();
    target.animate([{ transform: "scale(1)" }, { transform: "scale(1.3) rotate(-10deg)" }, { transform: "scale(1)" }], { duration: 400 });
  };
}

/* ---------- Panier ---------- */
function addToCart(id, qty = 1, sourceEl) {
  const product = findProduct(id);
  if (!product || !hasPrice(product)) { toast("Ce produit sera bientôt disponible"); return; }
  const line = cart.find((l) => l.id === id);
  if (line) line.qty += qty; else cart.push({ id, qty });
  saveCart();
  flyToCart(sourceEl);
  toast(`🛍️ ${findProduct(id).name} ajouté au panier`);
}

function changeQty(id, delta) {
  const line = cart.find((l) => l.id === id);
  if (!line) return;
  line.qty += delta;
  if (line.qty <= 0) cart = cart.filter((l) => l.id !== id);
  saveCart();
}

function removeFromCart(id) {
  cart = cart.filter((l) => l.id !== id);
  saveCart();
}

function saveCart() {
  store.save("khay-cart", cart);
  renderCart();
}

function totals() {
  const subtotal = cart.reduce((s, l) => s + findProduct(l.id).price * l.qty, 0);
  const discount = coupon && SETTINGS.coupons[coupon] ? subtotal * SETTINGS.coupons[coupon] : 0;
  const afterDiscount = subtotal - discount;
  const shipping = !SETTINGS.shippingCost || subtotal === 0
    || (SETTINGS.freeShippingFrom && afterDiscount >= SETTINGS.freeShippingFrom) ? 0 : SETTINGS.shippingCost;
  return { subtotal, discount, shipping, total: afterDiscount + shipping, afterDiscount };
}

function renderCart() {
  cart = cart.filter((l) => findProduct(l.id) && hasPrice(findProduct(l.id)));
  const count = cart.reduce((s, l) => s + l.qty, 0);
  const badge = $("#cartCount");
  badge.textContent = count;
  bump(badge);

  $("#cartItems").innerHTML = cart.length
    ? cart.map((l) => {
        const p = findProduct(l.id);
        return `
        <div class="line">
          <div class="line__img" style="background:${p.bg}">${visual(p)}</div>
          <div>
            <p class="line__title">${p.name}</p>
            <p class="line__price">${money(p.price)}</p>
            <div class="qty"><button data-dec="${p.id}">−</button><span>${l.qty}</span><button data-inc="${p.id}">+</button></div>
          </div>
          <div class="line__side">
            <strong>${money(p.price * l.qty)}</strong>
            <button class="line__remove" data-remove="${p.id}">Retirer</button>
          </div>
        </div>`;
      }).join("")
    : `<div class="drawer__empty"><span>🛒</span>Votre panier est vide.<br><br><a href="#boutique" class="btn btn--primary" data-close>Commencer mes achats</a></div>`;

  const t = totals();
  $("#subtotal").textContent = money(t.subtotal);
  $("#discountRow").hidden = !t.discount;
  $("#discount").textContent = `− ${money(t.discount)}${coupon ? ` (${coupon})` : ""}`;
  $("#shipping").textContent = !SETTINGS.shippingCost ? "À confirmer" : t.shipping ? money(t.shipping) : "Offerte";
  $("#total").textContent = money(t.total);
  $("#checkoutBtn").disabled = !cart.length;
  $("#checkoutBtn").style.opacity = cart.length ? 1 : .5;

}

/* ---------- Commande ---------- */
function openCheckout() {
  if (!cart.length) return;
  $("#checkoutTotal").textContent = money(totals().total);
  closeAll();
  openPanel("#checkoutModal");
}

function submitOrder(e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  const t = totals();
  const orderId = `KS-${Date.now().toString().slice(-6)}`;

  if (SETTINGS.whatsappNumber) {
    const lines = cart.map((l) => {
      const p = findProduct(l.id);
      return `• ${l.qty} × ${p.name} — ${money(p.price * l.qty)}`;
    });
    const message = [
      `Nouvelle commande ${orderId}`, "", ...lines, "",
      `Total articles : ${money(t.total)}${SETTINGS.shippingCost ? "" : " (livraison à confirmer)"}`, `Paiement : ${data.payment}`, "",
      `Nom : ${data.name}`, `Téléphone : ${data.phone}`, `Adresse : ${data.address}`,
    ].join("\n");
    window.open(`https://wa.me/${SETTINGS.whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
  }

  const content = $("#checkoutContent");
  const formHtml = content.innerHTML;
  content.innerHTML = `
    <div class="success">
      <div class="success__icon">🎉</div>
      <h3>Merci ${data.name.split(" ")[0]} !</h3>
      <p>Votre commande <strong>${orderId}</strong> de <strong>${money(t.total)}</strong> est prête.<br>
      ${SETTINGS.whatsappNumber ? "WhatsApp s'ouvre avec le détail de votre commande : <strong>envoyez le message</strong> pour la confirmer." : ""}
      Nous vous recontacterons au ${data.phone} pour convenir de la livraison.</p>
      <button class="btn btn--primary" data-close>Continuer mes achats</button>
    </div>`;
  confetti();

  cart = [];
  coupon = null;
  store.save("khay-coupon", null);
  saveCart();

  // Remet le formulaire en place pour la prochaine commande
  $("#checkoutModal").addEventListener("transitionend", function restore() {
    if ($("#checkoutModal").classList.contains("open")) return;
    content.innerHTML = formHtml;
    $("#checkoutForm").addEventListener("submit", submitOrder);
    $("#checkoutModal").removeEventListener("transitionend", restore);
  });
}

/* ---------- Confettis ---------- */
function confetti() {
  if (reduceMotion) return;
  const colors = ["#c8553d", "#e4a24a", "#2d4a3e", "#d17a9a", "#4f7a65", "#f4c7a1"];
  for (let i = 0; i < 90; i++) {
    const c = document.createElement("span");
    c.className = "confetti";
    c.style.left = `${Math.random() * 100}vw`;
    c.style.background = colors[i % colors.length];
    c.style.width = `${6 + Math.random() * 6}px`;
    c.style.height = `${10 + Math.random() * 8}px`;
    document.body.appendChild(c);
    const drift = (Math.random() - 0.5) * 300;
    c.animate([
      { transform: "translate(0, -20px) rotate(0)", opacity: 1 },
      { transform: `translate(${drift}px, 105vh) rotate(${Math.random() * 1080}deg)`, opacity: .8 },
    ], { duration: 2200 + Math.random() * 1800, delay: Math.random() * 300, easing: "cubic-bezier(.25,.6,.4,1)" })
      .onfinish = () => c.remove();
  }
}

/* ---------- Panneaux (tiroirs / modales) ---------- */
function openPanel(sel) {
  $(sel).classList.add("open");
  if ($(sel).classList.contains("drawer")) $("#overlay").classList.add("show");
  document.body.classList.add("no-scroll");
}

function closeAll() {
  $$(".drawer.open, .modal.open, .nav.open").forEach((el) => el.classList.remove("open"));
  $("#overlay").classList.remove("show");
  document.body.classList.remove("no-scroll", "menu-open");
}

/* ---------- Recherche avec suggestions ---------- */
function renderSuggestions() {
  const box = $("#suggest");
  if (!searchTerm) { box.hidden = true; return; }
  const hits = PRODUCTS.filter((p) => p.name.toLowerCase().includes(searchTerm)).slice(0, 5);
  box.innerHTML = hits.length
    ? hits.map((p) => `
        <button class="suggest__item" data-view="${p.id}">
          <span class="mini__img" style="background:${p.bg}">${visual(p)}</span>
          <span>${p.name.replace(new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "i"), "<mark>$1</mark>")}</span>
          <strong>${priceText(p)}</strong>
        </button>`).join("")
    : `<p class="suggest__empty">Aucun résultat pour « ${searchTerm.replace(/</g, "&lt;")} »</p>`;
  box.hidden = false;
}

/* ---------- Filtre par prix ---------- */
function setupPriceFilter() {
  const range = $("#priceRange");
  // Pas de curseur tant qu'aucun produit n'a de prix
  range.closest(".price-filter").hidden = !PRICES.length;
  range.min = 0;
  range.max = PRICE_CEIL;
  range.value = maxPrice;
  const update = () => {
    maxPrice = Number(range.value);
    $("#priceValue").textContent = money(maxPrice);
    range.style.setProperty("--fill", `${(maxPrice / PRICE_CEIL) * 100}%`);
  };
  update();
  range.addEventListener("input", () => { update(); renderProducts(); });
}

function resetFilters() {
  searchTerm = "";
  $("#searchInput").value = "";
  $("#priceRange").value = PRICE_CEIL;
  $("#priceRange").dispatchEvent(new Event("input"));
  setFilter("all");
}

/* ---------- Thème clair / sombre ---------- */
function setupTheme() {
  const root = document.documentElement;
  const current = () => root.dataset.theme
    || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  $("#themeBtn").addEventListener("click", () => {
    const next = current() === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    store.save("khay-theme", next);
  });
}

/* ---------- Effet 3D sur les cartes ---------- */
function setupTilt() {
  if (reduceMotion || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  const grid = $("#productsGrid");
  grid.addEventListener("pointermove", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.setProperty("--ry", `${x * 10}deg`);
    card.style.setProperty("--rx", `${-y * 10}deg`);
  });
  grid.addEventListener("pointerout", (e) => {
    const card = e.target.closest(".card");
    if (card && !card.contains(e.relatedTarget)) {
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    }
  });
}

/* ---------- Compteurs animés ---------- */
function animateCounters() {
  $$("[data-count]").forEach((el) => {
    const end = Number(el.dataset.count);
    const decimals = Number(el.dataset.decimals || 0);
    const suffix = el.dataset.suffix || "";
    const format = (v) => v.toLocaleString("fr-FR", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;
    if (reduceMotion) { el.textContent = format(end); return; }
    const start = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - start) / 1600);
      el.textContent = format(end * (1 - Math.pow(1 - t, 3)));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

/* ---------- Animations au défilement ---------- */
function setupReveal() {
  if (!("IntersectionObserver" in window)) {
    $$(".reveal").forEach((el) => el.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  $$(".reveal").forEach((el) => io.observe(el));
}

/* ---------- Événements ---------- */
document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-add],[data-wish],[data-view],[data-inc],[data-dec],[data-remove],[data-close],[data-cat],[data-filter],[data-filter-link]");
  if (!t) return;
  const d = t.dataset;

  if (d.add) addToCart(Number(d.add), 1, t.closest(".card")?.querySelector(".card__visual") || t.closest(".line")?.querySelector(".line__img"));
  else if (d.wish) toggleWishlist(Number(d.wish));
  else if (d.view) { $("#suggest").hidden = true; openQuickView(Number(d.view)); }
  else if (d.inc) changeQty(Number(d.inc), 1);
  else if (d.dec) changeQty(Number(d.dec), -1);
  else if (d.remove) removeFromCart(Number(d.remove));
  else if ("close" in d) closeAll();
  else if (d.cat) { setFilter(d.cat); $("#boutique").scrollIntoView(); }
  else if (d.filter) setFilter(d.filter);
  else if (d.filterLink) setFilter(d.filterLink);
});

$("#cartBtn").addEventListener("click", () => openPanel("#cartDrawer"));
$("#wishlistBtn").addEventListener("click", () => openPanel("#wishlistDrawer"));
$("#overlay").addEventListener("click", closeAll);
$("#checkoutBtn").addEventListener("click", openCheckout);
$("#checkoutForm").addEventListener("submit", submitOrder);
$$(".modal").forEach((m) => m.addEventListener("click", (e) => { if (e.target === m) closeAll(); }));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { closeAll(); $("#suggest").hidden = true; }
  // Raccourci « / » pour rechercher
  if (e.key === "/" && !e.target.closest("input, textarea, select")) {
    const input = $("#searchInput");
    if (input.offsetParent) { e.preventDefault(); input.focus(); }
  }
});
document.addEventListener("click", (e) => {
  if (!e.target.closest(".search")) $("#suggest").hidden = true;
});

$("#menuToggle").addEventListener("click", () => {
  $("#nav").classList.add("open");
  document.body.classList.add("menu-open");
  $("#overlay").classList.add("show");
});
$$("#nav a").forEach((a) => a.addEventListener("click", closeAll));

$("#searchInput").addEventListener("input", (e) => {
  searchTerm = e.target.value.trim().toLowerCase();
  renderProducts();
  renderSuggestions();
});
$("#searchInput").addEventListener("focus", renderSuggestions);
$("#searchInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") { $("#suggest").hidden = true; $("#boutique").scrollIntoView(); }
});
$("#resetFilters").addEventListener("click", resetFilters);
$("#sortSelect").addEventListener("change", (e) => { sortMode = e.target.value; renderProducts(); });


window.addEventListener("scroll", () => {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  $("#header").classList.toggle("scrolled", y > 10);
  $("#progress").style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  $("#toTop").classList.toggle("show", y > 700);
}, { passive: true });
$("#toTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));

if (SETTINGS.whatsappNumber) {
  $("#waFloat").href = `https://wa.me/${SETTINGS.whatsappNumber}`;
  $("#waFloat").hidden = false;
}

/* ---------- Démarrage ---------- */
$("#year").textContent = new Date().getFullYear();
renderCategories();
setupPriceFilter();
renderProducts();
renderRecent();
setupTheme();
setupTilt();
animateCounters();
renderCart();
renderWishlist();
setupReveal();
