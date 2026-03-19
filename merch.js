const MERCH_PRODUCTS = [
  {
    id: "studio-tee",
    slug: "studio-tee",
    name: "Studio Tee",
    category: "Футболка",
    price: 1890,
    badge: "drop 01",
    tag: "merch55",
    note: "Футболка merch55",
    optionLabel: "Размер",
    variants: ["S", "M", "L", "XL"],
    defaultVariant: "M",
    shortDescription: "Белая плотная футболка с минимальным логотипом merch55 и чистой связкой с брендом Rec 55.",
    lead: "Базовая белая футболка для студийных смен, съёмок, дубляжа и повседневного ношения без лишнего визуального шума.",
    storyTitle: "Базовый айтем коллекции",
    story: "Studio Tee держит курс на максимально чистый вид: плотная белая база, чёрный знак merch55 и спокойная посадка без перегруженного принта.",
    specs: [
      "Хлопок 240 gsm, унисекс посадка",
      "Плотный ворот и аккуратный силуэт",
      "Чёрный принт merch55 спереди",
      "Подходит для повседневной носки и студии"
    ],
    gallery: [
      { src: "../media/merch/studio-tee-front.svg", alt: "Studio Tee — фронтальный кадр" },
      { src: "../media/merch/studio-tee-detail.svg", alt: "Studio Tee — деталь принта" },
      { src: "../media/website/rec55team.jpg", alt: "Команда Rec 55 в студии" }
    ]
  },
  {
    id: "voice-hoodie",
    slug: "voice-hoodie",
    name: "Voice Hoodie",
    category: "Худи",
    price: 3490,
    badge: "drop 01",
    tag: "Rec 55",
    note: "Худи merch55",
    optionLabel: "Размер",
    variants: ["M", "L", "XL"],
    defaultVariant: "L",
    shortDescription: "Тёплый белый худи для студийных смен, выездов команды и долгих монтажных ночей.",
    lead: "Мягкий худи с минимальной чёрной вышивкой merch55. Сдержанный силуэт для тех, кто хочет вещь без лишней графики и лишних слов.",
    storyTitle: "Тёплая часть дропа",
    story: "Voice Hoodie рассчитан на реальный ритм студии: запись, монтаж, поздние встречи и длинные смены. Белая база остаётся чистой, а чёрный знак работает как тихий акцент.",
    specs: [
      "Мягкий футер и объёмный капюшон",
      "Свободная посадка без агрессивного oversize",
      "Чёрная вышивка merch55 на груди",
      "Подходит для осени, зимы и студии с кондиционером"
    ],
    gallery: [
      { src: "../media/merch/voice-hoodie-front.svg", alt: "Voice Hoodie — фронтальный кадр" },
      { src: "../media/merch/voice-hoodie-detail.svg", alt: "Voice Hoodie — деталь вышивки" },
      { src: "../media/website/rec55team.jpg", alt: "Команда Rec 55 в студии" }
    ]
  },
  {
    id: "script-tote",
    slug: "script-tote",
    name: "Script Tote",
    category: "Шоппер",
    price: 990,
    badge: "drop 01",
    tag: "carry all",
    note: "Шоппер merch55",
    optionLabel: "Формат",
    variants: ["Standard", "Wide"],
    defaultVariant: "Standard",
    shortDescription: "Шоппер для сценариев, ноутбука, наушников и всего, что уносится из студии домой.",
    lead: "Текстильный шоппер в спокойной белой гамме. Рассчитан на ежедневную нагрузку и визуально не спорит ни с одеждой, ни с остальным мерчем.",
    storyTitle: "Носить сценарии и технику",
    story: "Script Tote сделан как рабочая вещь: большая база под ноутбук, сценарии, наушники и всё, что обычно оказывается в руках после долгой смены.",
    specs: [
      "Плотный текстиль молочного оттенка",
      "Длинные ручки и большая вместимость",
      "Минимальная чёрная надпись merch55",
      "Удобен для студии, ноутбука и ежедневных поездок"
    ],
    gallery: [
      { src: "../media/merch/script-tote-front.svg", alt: "Script Tote — фронтальный кадр" },
      { src: "../media/merch/script-tote-detail.svg", alt: "Script Tote — деталь шопера" },
      { src: "../media/website/rec55team.jpg", alt: "Команда Rec 55 в студии" }
    ]
  },
  {
    id: "studio-mug",
    slug: "studio-mug",
    name: "Studio Mug",
    category: "Кружка",
    price: 790,
    badge: "drop 01",
    tag: "late shift",
    note: "Кружка merch55",
    optionLabel: "Объём",
    variants: ["350 мл", "450 мл"],
    defaultVariant: "350 мл",
    shortDescription: "Белая кружка для кофе перед записью и чая после монтажа. Чистая форма и спокойный чёрный принт.",
    lead: "Керамическая кружка для студийного стола, домашнего монтажа и поздних рабочих вечеров. Минималистичный объект без визуального перегруза.",
    storyTitle: "Для записей и долгих смен",
    story: "Studio Mug остаётся частью того же белого минималистичного мира: только форма, чёрный логотип и понятная функция. Никакого лишнего декора.",
    specs: [
      "Керамика с мягким глянцем",
      "Минималистичная графика в духе merch55",
      "Для кофе, чая и рабочего стола",
      "Спокойный дизайн без лишнего принта"
    ],
    gallery: [
      { src: "../media/merch/studio-mug-front.svg", alt: "Studio Mug — фронтальный кадр" },
      { src: "../media/merch/studio-mug-detail.svg", alt: "Studio Mug — деталь кружки" },
      { src: "../media/website/rec55team.jpg", alt: "Команда Rec 55 в студии" }
    ]
  }
];

const PRODUCT_MAP = new Map(MERCH_PRODUCTS.map((product) => [product.slug, product]));
const STORAGE_KEY = "merch55-cart";
const WHATSAPP_BASE = "https://api.whatsapp.com/send?text=";

let cart = [];
let cartUi = null;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatPrice(value) {
  return `${new Intl.NumberFormat("ru-RU").format(value)} сом`;
}

function productHref(slug) {
  return `product.html?slug=${encodeURIComponent(slug)}`;
}

function renderVariantSelector(product) {
  const buttons = product.variants.map((variant) => {
    const selected = variant === product.defaultVariant ? " is-selected" : "";
    return `<button class="variant-btn${selected}" type="button" data-variant-button data-variant="${escapeHtml(variant)}" aria-pressed="${selected ? "true" : "false"}">${escapeHtml(variant)}</button>`;
  }).join("");

  return `
    <div class="product-option">
      <span class="option-label">${escapeHtml(product.optionLabel)}</span>
      <div class="variant-group" data-variant-group data-option-label="${escapeHtml(product.optionLabel)}">
        ${buttons}
      </div>
    </div>
  `;
}

function renderCatalogCard(product) {
  return `
    <article
      class="product-card product-linkable"
      data-product-link-card
      data-product-link="${productHref(product.slug)}"
      data-product-id="${escapeHtml(product.id)}"
      data-product-name="${escapeHtml(product.name)}"
      data-product-price="${product.price}"
      data-product-note="${escapeHtml(product.note)}"
      data-product-scope
    >
      <a class="product-visual-link" href="${productHref(product.slug)}" aria-label="Открыть ${escapeHtml(product.name)}">
        <div class="product-preview">
          <span class="product-badge">${escapeHtml(product.badge)}</span>
          <div class="preview-photo-wrap">
            <img class="product-photo" src="${product.gallery[0].src}" alt="${escapeHtml(product.gallery[0].alt)}">
          </div>
          <div class="preview-label">
            <span>${escapeHtml(product.name)}</span>
            <span>${escapeHtml(product.tag)}</span>
          </div>
        </div>
      </a>
      <div class="product-body">
        <div class="product-meta">
          <span>${escapeHtml(product.category)}</span>
          <span class="price">${formatPrice(product.price)}</span>
        </div>
        <h2><a class="product-heading-link" href="${productHref(product.slug)}">${escapeHtml(product.name)}</a></h2>
        ${renderVariantSelector(product)}
        <div class="product-actions">
          <button class="btn btn-primary" type="button" data-add-to-cart>В корзину</button>
        </div>
      </div>
    </article>
  `;
}

function renderCatalogPage() {
  const grid = document.querySelector("[data-catalog-grid]");
  if (!grid) return;
  grid.innerHTML = MERCH_PRODUCTS.map(renderCatalogCard).join("");
}

function renderProductPage() {
  const mount = document.querySelector("[data-product-detail]");
  if (!mount) return;

  const slug = new URLSearchParams(window.location.search).get("slug") || MERCH_PRODUCTS[0].slug;
  const product = PRODUCT_MAP.get(slug) || MERCH_PRODUCTS[0];
  const recommendations = MERCH_PRODUCTS.filter((item) => item.slug !== product.slug).slice(0, 3);
  document.title = `${product.name} — merch55`;

  mount.innerHTML = `
    <section class="product-detail-shell">
      <div
        class="product-layout"
        data-product-id="${escapeHtml(product.id)}"
        data-product-name="${escapeHtml(product.name)}"
        data-product-price="${product.price}"
        data-product-note="${escapeHtml(product.note)}"
        data-product-scope
      >
        <div class="product-gallery">
          <div class="slider" data-slider>
            <div class="slider-stage">
              ${product.gallery.map((slide, index) => `
                <figure class="slide${index === 0 ? " is-active" : ""}" data-slide="${index}">
                  <img src="${slide.src}" alt="${escapeHtml(slide.alt)}">
                </figure>
              `).join("")}
              <button class="slider-nav slider-prev" type="button" aria-label="Предыдущее фото" data-slider-prev>←</button>
              <button class="slider-nav slider-next" type="button" aria-label="Следующее фото" data-slider-next>→</button>
            </div>
            <div class="slider-thumbs">
              ${product.gallery.map((slide, index) => `
                <button class="thumb-btn${index === 0 ? " is-active" : ""}" type="button" data-slider-thumb="${index}" aria-label="Показать фото ${index + 1}">
                  <img src="${slide.src}" alt="${escapeHtml(slide.alt)}">
                </button>
              `).join("")}
            </div>
          </div>
        </div>

        <article class="product-detail-card">
          <p class="eyebrow">${escapeHtml(product.category)} / merch55</p>
          <h1>${escapeHtml(product.name)}</h1>
          <p class="detail-lead">${escapeHtml(product.lead)}</p>
          <div class="detail-price">${formatPrice(product.price)}</div>
          ${renderVariantSelector(product)}
          <div class="product-actions product-actions-split">
            <button class="btn btn-primary" type="button" data-add-to-cart>Добавить в корзину</button>
            <a class="btn btn-secondary" href="index.html#catalog">К каталогу</a>
          </div>
          <ul class="product-specs detail-specs">
            ${product.specs.map((spec) => `<li>${escapeHtml(spec)}</li>`).join("")}
          </ul>
        </article>
      </div>

      <div class="detail-info-grid">
        <article class="info-card">
          <p class="eyebrow">О товаре</p>
          <h2>${escapeHtml(product.storyTitle)}</h2>
          <p class="detail-copy">${escapeHtml(product.story)}</p>
        </article>
        <article class="info-card">
          <p class="eyebrow">Заказ</p>
          <h2>Как купить</h2>
          <ul class="info-list">
            <li>Выберите вариант товара на странице.</li>
            <li>Добавьте позицию в корзину.</li>
            <li>Если нужно, вернитесь в каталог и добавьте другие товары.</li>
            <li>Оформите весь заказ одним сообщением в WhatsApp.</li>
          </ul>
        </article>
      </div>

      <section class="recommend-section" aria-labelledby="recommendationsTitle">
        <div class="recommend-head">
          <p class="eyebrow">Ещё в каталоге</p>
          <h2 id="recommendationsTitle">Другие товары merch55</h2>
        </div>
        <div class="catalog-grid recommend-grid">
          ${recommendations.map(renderCatalogCard).join("")}
        </div>
      </section>
    </section>
  `;
}

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    cart = Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    cart = [];
  }
}

function saveCart() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  } catch (error) {
    // Ignore storage failures and keep the cart in memory.
  }
}

function getCartUi() {
  if (cartUi) return cartUi;

  cartUi = {
    toggle: document.querySelector("[data-cart-toggle]"),
    close: document.querySelector("[data-cart-close]"),
    backdrop: document.querySelector("[data-cart-backdrop]"),
    drawer: document.getElementById("cartDrawer"),
    count: document.querySelector("[data-cart-count]"),
    items: document.querySelector("[data-cart-items]"),
    empty: document.querySelector("[data-cart-empty]"),
    total: document.querySelector("[data-cart-total]"),
    checkout: document.querySelector("[data-cart-checkout]"),
    clear: document.querySelector("[data-cart-clear]")
  };

  return cartUi;
}

function setCartOpen(open) {
  const ui = getCartUi();
  if (!ui.drawer || !ui.backdrop || !ui.toggle) return;

  ui.drawer.classList.toggle("is-open", open);
  ui.backdrop.classList.toggle("is-visible", open);
  ui.drawer.setAttribute("aria-hidden", open ? "false" : "true");
  ui.toggle.setAttribute("aria-expanded", open ? "true" : "false");
  document.body.classList.toggle("cart-open", open);
}

function totalCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function totalPrice() {
  return cart.reduce((sum, item) => sum + item.qty * item.price, 0);
}

function renderCart() {
  const ui = getCartUi();
  if (!ui.count || !ui.total || !ui.checkout || !ui.clear || !ui.empty || !ui.items) return;

  ui.count.textContent = String(totalCount());
  ui.total.textContent = formatPrice(totalPrice());
  ui.checkout.disabled = cart.length === 0;
  ui.clear.disabled = cart.length === 0;

  if (cart.length === 0) {
    ui.empty.classList.remove("hidden");
    ui.items.classList.add("hidden");
    ui.items.innerHTML = "";
    return;
  }

  ui.empty.classList.add("hidden");
  ui.items.classList.remove("hidden");
  ui.items.innerHTML = cart.map((item) => `
    <div class="cart-item">
      <div class="cart-item-head">
        <div>
          <strong>${escapeHtml(item.name)}</strong>
          <div class="cart-note">${escapeHtml(item.note)}</div>
        </div>
        <div class="cart-line-price">${formatPrice(item.qty * item.price)}</div>
      </div>
      <div class="cart-item-controls">
        <div class="qty-controls">
          <button class="qty-btn" type="button" data-cart-action="decrease" data-cart-id="${escapeHtml(item.id)}" aria-label="Уменьшить количество">−</button>
          <span>${item.qty}</span>
          <button class="qty-btn" type="button" data-cart-action="increase" data-cart-id="${escapeHtml(item.id)}" aria-label="Увеличить количество">+</button>
        </div>
        <button class="remove-btn" type="button" data-cart-action="remove" data-cart-id="${escapeHtml(item.id)}">Удалить</button>
      </div>
    </div>
  `).join("");
}

function setSelectedVariant(button) {
  const group = button.closest("[data-variant-group]");
  if (!group) return;

  const buttons = Array.from(group.querySelectorAll("[data-variant-button]"));
  buttons.forEach((item) => {
    const active = item === button;
    item.classList.toggle("is-selected", active);
    item.setAttribute("aria-pressed", active ? "true" : "false");
  });
}

function resolveVariant(scope) {
  const group = scope.querySelector("[data-variant-group]");
  const baseNote = scope.dataset.productNote || "";

  if (!group) {
    return {
      key: "default",
      note: baseNote
    };
  }

  const selected = group.querySelector(".variant-btn.is-selected") || group.querySelector(".variant-btn");
  if (!selected) {
    return {
      key: "default",
      note: baseNote
    };
  }

  const optionLabel = group.dataset.optionLabel || "Вариант";
  const value = selected.dataset.variant || selected.textContent.trim();

  return {
    key: value,
    note: baseNote ? `${baseNote}, ${optionLabel}: ${value}` : `${optionLabel}: ${value}`
  };
}

function flashAdded(button) {
  const original = button.textContent;
  button.textContent = "Добавлено";
  button.disabled = true;

  window.setTimeout(() => {
    button.textContent = original;
    button.disabled = false;
  }, 700);
}

function addToCart(scope, button) {
  const productId = scope.dataset.productId;
  const name = scope.dataset.productName;
  const price = Number(scope.dataset.productPrice || 0);
  const variant = resolveVariant(scope);
  const lineId = `${productId}:${variant.key}`;

  const existing = cart.find((item) => item.id === lineId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: lineId,
      name,
      price,
      note: variant.note,
      qty: 1
    });
  }

  saveCart();
  renderCart();
  setCartOpen(true);
  flashAdded(button);
}

function updateCartItem(id, delta) {
  const item = cart.find((entry) => entry.id === id);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter((entry) => entry.id !== id);
  }

  saveCart();
  renderCart();
}

function removeCartItem(id) {
  cart = cart.filter((item) => item.id !== id);
  saveCart();
  renderCart();
}

function checkoutCart() {
  if (cart.length === 0) return;

  const lines = [
    "Здравствуйте! Хочу оформить заказ merch55.",
    "",
    ...cart.map((item, index) => `${index + 1}. ${item.name} x${item.qty} — ${formatPrice(item.qty * item.price)} (${item.note})`),
    "",
    `Итого: ${formatPrice(totalPrice())}`,
    "Подскажите, пожалуйста, наличие и условия получения."
  ];

  const url = `${WHATSAPP_BASE}${encodeURIComponent(lines.join("\n"))}`;
  const popup = window.open(url, "_blank", "noopener,noreferrer");
  if (!popup) {
    window.location.href = url;
  }
}

function setActiveSlide(slider, index) {
  const slides = Array.from(slider.querySelectorAll("[data-slide]"));
  const thumbs = Array.from(slider.querySelectorAll("[data-slider-thumb]"));
  if (slides.length === 0) return;

  const max = slides.length - 1;
  const nextIndex = index < 0 ? max : index > max ? 0 : index;
  slider.dataset.activeIndex = String(nextIndex);

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === nextIndex);
  });

  thumbs.forEach((thumb, thumbIndex) => {
    thumb.classList.toggle("is-active", thumbIndex === nextIndex);
  });
}

function initStaticUi() {
  const ui = getCartUi();
  if (ui.toggle) {
    ui.toggle.addEventListener("click", () => {
      const open = ui.drawer ? !ui.drawer.classList.contains("is-open") : false;
      setCartOpen(open);
    });
  }

  if (ui.close) {
    ui.close.addEventListener("click", () => {
      setCartOpen(false);
    });
  }

  if (ui.backdrop) {
    ui.backdrop.addEventListener("click", () => {
      setCartOpen(false);
    });
  }

  if (ui.clear) {
    ui.clear.addEventListener("click", () => {
      cart = [];
      saveCart();
      renderCart();
    });
  }

  if (ui.checkout) {
    ui.checkout.addEventListener("click", checkoutCart);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setCartOpen(false);
    }
  });
}

function initDelegatedUi() {
  document.addEventListener("click", (event) => {
    const variantButton = event.target.closest("[data-variant-button]");
    if (variantButton) {
      setSelectedVariant(variantButton);
      return;
    }

    const addButton = event.target.closest("[data-add-to-cart]");
    if (addButton) {
      const scope = addButton.closest("[data-product-scope]");
      if (scope) addToCart(scope, addButton);
      return;
    }

    const cartAction = event.target.closest("[data-cart-action]");
    if (cartAction) {
      const id = cartAction.dataset.cartId;
      const action = cartAction.dataset.cartAction;
      if (action === "increase") updateCartItem(id, 1);
      if (action === "decrease") updateCartItem(id, -1);
      if (action === "remove") removeCartItem(id);
      return;
    }

    const thumb = event.target.closest("[data-slider-thumb]");
    if (thumb) {
      const slider = thumb.closest("[data-slider]");
      if (slider) setActiveSlide(slider, Number(thumb.dataset.sliderThumb));
      return;
    }

    const prev = event.target.closest("[data-slider-prev]");
    if (prev) {
      const slider = prev.closest("[data-slider]");
      if (slider) {
        const current = Number(slider.dataset.activeIndex || "0");
        setActiveSlide(slider, current - 1);
      }
      return;
    }

    const next = event.target.closest("[data-slider-next]");
    if (next) {
      const slider = next.closest("[data-slider]");
      if (slider) {
        const current = Number(slider.dataset.activeIndex || "0");
        setActiveSlide(slider, current + 1);
      }
      return;
    }

    const card = event.target.closest("[data-product-link-card]");
    if (card && !event.target.closest("a, button, .variant-group")) {
      const href = card.dataset.productLink;
      if (href) {
        window.location.href = href;
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCatalogPage();
  renderProductPage();
  loadCart();
  renderCart();
  initStaticUi();
  initDelegatedUi();
});
