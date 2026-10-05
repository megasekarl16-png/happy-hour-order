// ==========================================
// ELEMENTS
// ==========================================

const homePage = document.getElementById("homePage");
const menuPage = document.getElementById("menuPage");

const startOrderButton =
  document.getElementById("startOrder");

const backHomeButton =
  document.getElementById("backHome");

const productGrid =
  document.getElementById("productGrid");

const searchInput =
  document.getElementById("searchInput");

const categoryFilters =
  document.getElementById("categoryFilters");

const emptyState =
  document.getElementById("emptyState");


// ==========================================
// STATE
// ==========================================

let selectedCategory = "all";
let searchKeyword = "";


// ==========================================
// PAGE NAVIGATION
// ==========================================

function showPage(page) {

  document
    .querySelectorAll(".page")
    .forEach(item => {
      item.classList.remove("active");
    });

  page.classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


startOrderButton.addEventListener(
  "click",
  () => {

    selectedCategory = "all";
    searchKeyword = "";

    searchInput.value = "";

    resetCategoryButtons();

    renderProducts();

    showPage(menuPage);

  }
);


backHomeButton.addEventListener(
  "click",
  () => {
    showPage(homePage);
  }
);


// ==========================================
// CATEGORY
// ==========================================

categoryFilters.addEventListener(
  "click",
  event => {

    const button =
      event.target.closest(".category-chip");

    if (!button) return;

    document
      .querySelectorAll(".category-chip")
      .forEach(chip => {
        chip.classList.remove("active");
      });

    button.classList.add("active");

    selectedCategory =
      button.dataset.category;

    renderProducts();

  }
);


function resetCategoryButtons() {

  document
    .querySelectorAll(".category-chip")
    .forEach(chip => {

      chip.classList.toggle(
        "active",
        chip.dataset.category === "all"
      );

    });

}


// ==========================================
// SEARCH
// ==========================================

searchInput.addEventListener(
  "input",
  event => {

    searchKeyword =
      event.target.value
        .trim()
        .toLowerCase();

    renderProducts();

  }
);


// ==========================================
// FILTER PRODUCTS
// ==========================================

function getFilteredProducts() {

  return getProducts().filter(product => {

    const matchesCategory =
      selectedCategory === "all" ||
      product.category === selectedCategory;

    const matchesSearch =
      product.name
        .toLowerCase()
        .includes(searchKeyword);

    return (
      matchesCategory &&
      matchesSearch
    );

  });

}


// ==========================================
// RENDER PRODUCTS
// ==========================================

function renderProducts() {

  const products =
    getFilteredProducts();

  productGrid.innerHTML = "";

  if (products.length === 0) {

    emptyState.classList.add("show");

    return;

  }

  emptyState.classList.remove("show");


  products.forEach(product => {

    const card =
      createProductCard(product);

    productGrid.appendChild(card);

  });

}


// ==========================================
// PRODUCT CARD
// ==========================================

function createProductCard(product) {

  const article =
    document.createElement("article");

  article.className = "product-card";

  if (!product.available) {
    article.classList.add("sold-out");
  }


  // PRICE

  let priceHTML = "";

  if (product.price !== null) {

    const happyPrice =
      getHappyHourPrice(product.price);

    priceHTML = `
      <span class="original-price">
        ${formatRupiah(product.price)}
      </span>

      <span class="happy-price">
        ${formatRupiah(happyPrice)}
      </span>
    `;

  } else {

    priceHTML = `
      <span class="price-not-set">
        Price not set
      </span>
    `;

  }


  article.innerHTML = `

    <div class="product-image">

      <img
        src="${product.image}"
        alt="${product.name}"
        loading="lazy"
      >

      <div class="product-image-fallback">
        ☕
      </div>

      <span class="product-discount">
        30% OFF
      </span>

      ${
        !product.available
          ? `
            <div class="sold-out-label">
              SOLD OUT
            </div>
          `
          : ""
      }

    </div>


    <div class="product-body">

      <span class="product-category">
        ${product.categoryLabel}
      </span>

      <h3 class="product-name">
        ${product.name}
      </h3>

      <div class="price-area">
        ${priceHTML}
      </div>


      <button
        class="add-product"
        data-product-id="${product.id}"

        ${
          !product.available ||
          product.price === null
            ? "disabled"
            : ""
        }
      >

        ${
          product.price === null
            ? "SET PRICE FIRST"
            : !product.available
              ? "SOLD OUT"
              : "+ ADD"
        }

      </button>

    </div>
  `;


  // IMAGE FALLBACK

  const image =
    article.querySelector("img");

  const fallback =
    article.querySelector(
      ".product-image-fallback"
    );

  fallback.style.display = "none";

  image.addEventListener(
    "error",
    () => {

      image.style.display = "none";

      fallback.style.display = "flex";

    }
  );


  return article;

}


// ==========================================
// INITIAL
// ==========================================

renderProducts();

// ==========================================
// CART ELEMENTS
// ==========================================

const cartBar =
  document.getElementById("cartBar");

const cartItemCount =
  document.getElementById("cartItemCount");

const cartBarTotal =
  document.getElementById("cartBarTotal");

const viewCartButton =
  document.getElementById("viewCart");


const cartPage =
  document.getElementById("cartPage");

const backToMenu =
  document.getElementById("backToMenu");

const cartItems =
  document.getElementById("cartItems");

const originalTotalElement =
  document.getElementById("originalTotal");

const totalSavingsElement =
  document.getElementById("totalSavings");

const finalTotalElement =
  document.getElementById("finalTotal");

const confirmOrder =
  document.getElementById("confirmOrder");


// ==========================================
// PRODUCT DETAIL
// ==========================================

const productDetail =
  document.getElementById("productDetail");

const closeProductDetail =
  document.getElementById("closeProductDetail");

const detailImage =
  document.getElementById("detailImage");

const detailImageFallback =
  document.getElementById("detailImageFallback");

const detailCategory =
  document.getElementById("detailCategory");

const detailName =
  document.getElementById("detailName");

const detailDescription =
  document.getElementById("detailDescription");

const detailBread =
  document.getElementById("detailBread");

const detailOriginalPrice =
  document.getElementById("detailOriginalPrice");

const detailHappyPrice =
  document.getElementById("detailHappyPrice");

const detailMinus =
  document.getElementById("detailMinus");

const detailPlus =
  document.getElementById("detailPlus");

const detailQuantity =
  document.getElementById("detailQuantity");

const detailAddButton =
  document.getElementById("detailAddButton");

const detailAddText =
  document.getElementById("detailAddText");

const detailAddTotal =
  document.getElementById("detailAddTotal");


let selectedProductId = null;
let selectedQuantity = 1;


// CLICK PRODUCT ADD

productGrid.addEventListener(
  "click",
  event => {

    const button =
      event.target.closest(".add-product");

    if (!button) return;

    openProductDetail(
      button.dataset.productId
    );

  }
);


// OPEN DETAIL

function openProductDetail(productId) {

  const product =
    getProductById(productId);

  if (!product) return;

  if (!product.available) return;

  if (product.price === null) return;


  selectedProductId =
    product.id;

  selectedQuantity = 1;


  detailCategory.textContent =
    product.categoryLabel;

  detailName.textContent =
    product.name;

  detailDescription.textContent =
    product.description || "";


  // BREAD

  if (product.bread) {

    detailBread.textContent =
      `Bread: ${product.bread}`;

    detailBread.classList.add("show");

  } else {

    detailBread.textContent = "";

    detailBread.classList.remove("show");

  }


  // PRICE

  detailOriginalPrice.textContent =
    formatRupiah(product.price);

  detailHappyPrice.textContent =
    formatRupiah(
      getHappyHourPrice(product.price)
    );


  // IMAGE

  detailImage.style.display = "block";

  detailImageFallback.style.display = "none";

  detailImage.src = product.image;

  detailImage.alt = product.name;


  detailImage.onerror = () => {

    detailImage.style.display = "none";

    detailImageFallback.style.display =
      "flex";

  };


  updateProductDetail();


  productDetail.classList.add("show");

}


// UPDATE QUANTITY / TOTAL

function updateProductDetail() {

  const product =
    getProductById(
      selectedProductId
    );

  if (!product) return;


  const happyPrice =
    getHappyHourPrice(
      product.price
    );


  detailQuantity.textContent =
    selectedQuantity;


  detailAddText.textContent =
    `Add ${selectedQuantity} to Order`;


  detailAddTotal.textContent =
    formatRupiah(
      happyPrice * selectedQuantity
    );


  detailMinus.disabled =
    selectedQuantity <= 1;

}


// PLUS

detailPlus.addEventListener(
  "click",
  () => {

    selectedQuantity += 1;

    updateProductDetail();

  }
);


// MINUS

detailMinus.addEventListener(
  "click",
  () => {

    if (selectedQuantity <= 1) {
      return;
    }

    selectedQuantity -= 1;

    updateProductDetail();

  }
);


// CONFIRM ADD

detailAddButton.addEventListener(
  "click",
  () => {

    if (!selectedProductId) {
      return;
    }


    for (
      let i = 0;
      i < selectedQuantity;
      i++
    ) {

      addToCart(
        selectedProductId
      );

    }


    closeDetail();

  }
);


// CLOSE

closeProductDetail.addEventListener(
  "click",
  closeDetail
);


productDetail.addEventListener(
  "click",
  event => {

    if (
      event.target === productDetail
    ) {

      closeDetail();

    }

  }
);


function closeDetail() {

  productDetail.classList.remove("show");

  selectedProductId = null;

  selectedQuantity = 1;

}


// ==========================================
// UPDATE CART UI
// ==========================================

function updateCartUI() {

  const totals =
    getCartTotals();


  // CART BAR

  if (totals.quantity > 0) {

    cartBar.classList.add("show");

  } else {

    cartBar.classList.remove("show");

  }


  cartItemCount.textContent =
    `${totals.quantity} ${
      totals.quantity === 1
        ? "item"
        : "items"
    }`;


  cartBarTotal.textContent =
    formatRupiah(totals.total);


  renderCartPage();

}


// ==========================================
// OPEN CART
// ==========================================

viewCartButton.addEventListener(
  "click",
  () => {

    renderCartPage();

    cartBar.classList.remove("show");

    showPage(cartPage);

  }
);


backToMenu.addEventListener(
  "click",
  () => {

    renderProducts();

    updateCartUI();

    showPage(menuPage);

  }
);


// ==========================================
// RENDER CART
// ==========================================

function renderCartPage() {

  const items =
    getCartDetails();

  const totals =
    getCartTotals();


  cartItems.innerHTML = "";


  items.forEach(item => {

    const element =
      document.createElement("div");

    element.className =
      "cart-item";


element.innerHTML = `

  <div class="cart-item-info">

    <div class="cart-item-name">
      ${item.name}
    </div>

    <div class="cart-item-price">

      <span class="cart-old-price">
        ${formatRupiah(
          item.originalPrice
        )}
      </span>

      <span class="cart-new-price">
        ${formatRupiah(
          item.happyHourPrice
        )}
      </span>

    </div>

  </div>


  <div class="quantity-control">

    <button
      data-minus="${item.productId}">
      −
    </button>

    <span>
      ${item.quantity}
    </span>

    <button
      data-plus="${item.productId}">
      +
    </button>

  </div>


  <div class="cart-note">

    <label>Notes</label>

    <textarea
      data-note="${item.productId}"
      maxlength="120"
      placeholder="Add note, e.g. warm, cut in half..."
    >${item.note || ""}</textarea>

  </div>

`;


    cartItems.appendChild(element);

  });


  originalTotalElement.textContent =
    formatRupiah(
      totals.originalTotal
    );


  totalSavingsElement.textContent =
    `-${formatRupiah(
      totals.savings
    )}`;


  finalTotalElement.textContent =
    formatRupiah(
      totals.total
    );


  confirmOrder.disabled =
    totals.quantity === 0;

}


// ==========================================
// QUANTITY BUTTONS
// ==========================================

cartItems.addEventListener(
  "click",
  event => {

    const plus =
      event.target.closest(
        "[data-plus]"
      );

    const minus =
      event.target.closest(
        "[data-minus]"
      );


    if (plus) {

      increaseQuantity(
        plus.dataset.plus
      );

    }


    if (minus) {

      decreaseQuantity(
        minus.dataset.minus
      );

    }

  }
);

cartItems.addEventListener(
  "input",
  event => {

    const noteInput =
      event.target.closest("[data-note]");

    if (!noteInput) return;

    updateCartItemNote(
      noteInput.dataset.note,
      noteInput.value
    );

  }
);

// ==========================================
// ORDER CONFIRMATION
// ==========================================

const successPage =
  document.getElementById("successPage");

const successOrderId =
  document.getElementById("successOrderId");

const successOrderTime =
  document.getElementById("successOrderTime");

const successItems =
  document.getElementById("successItems");

const successTotal =
  document.getElementById("successTotal");

const successSavings =
  document.getElementById("successSavings");

const posStatus =
  document.getElementById("posStatus");

const posStatusText =
  document.getElementById("posStatusText");

const transferPosButton =
  document.getElementById("transferPosButton");

const newOrderButton =
  document.getElementById("newOrderButton");


let currentConfirmedOrder = null;


// ==========================================
// GET SAVED ORDERS
// ==========================================

function getSavedOrders() {

  const saved =
    localStorage.getItem(
      "happyHourOrders"
    );

  return saved
    ? JSON.parse(saved)
    : [];

}


// ==========================================
// SAVE ORDERS
// ==========================================

function saveOrders(orders) {

  localStorage.setItem(
    "happyHourOrders",
    JSON.stringify(orders)
  );

}


// ==========================================
// GENERATE ORDER ID
// ==========================================

function generateOrderId() {

  const now = new Date();

  const hours =
    String(now.getHours())
      .padStart(2, "0");

  const minutes =
    String(now.getMinutes())
      .padStart(2, "0");

  const random =
    String(
      Math.floor(
        Math.random() * 900 + 100
      )
    );

  return `HH-${hours}${minutes}-${random}`;

}


// ==========================================
// CONFIRM ORDER
// ==========================================

confirmOrder.addEventListener(
  "click",
  () => {

    const items =
      getCartDetails();

    const totals =
      getCartTotals();


    if (items.length === 0) {
      return;
    }


    const now =
      new Date();


    // IMPORTANT:
    // create snapshot of current prices

    const orderItems =
      items.map(item => ({

        productId:
          item.productId,

        name:
          item.name,

        quantity:
          item.quantity,

          note:
  item.note || "",

        originalPrice:
          item.originalPrice,

        happyHourPrice:
          item.happyHourPrice,

        originalSubtotal:
          item.originalSubtotal,

        subtotal:
          item.subtotal

      }));


    const order = {

      id:
        generateOrderId(),

      createdAt:
        now.toISOString(),

      items:
        orderItems,

      originalTotal:
        totals.originalTotal,

      savings:
        totals.savings,

      total:
        totals.total,

      quantity:
        totals.quantity,

      status:
        "waiting-pos"

    };


    const orders =
      getSavedOrders();


    orders.unshift(order);

    saveOrders(orders);

    renderRecentOrders();


    currentConfirmedOrder =
      order;


    // clear active cart

    clearCart();


    // show success

    renderConfirmedOrder(order);

    showPage(successPage);

  }
);


// ==========================================
// RENDER CONFIRMED ORDER
// ==========================================

function renderConfirmedOrder(order) {

  successOrderId.textContent =
    order.id;


  const date =
    new Date(order.createdAt);


  successOrderTime.textContent =
    date.toLocaleTimeString(
      "id-ID",
      {
        hour: "2-digit",
        minute: "2-digit"
      }
    );


  successItems.innerHTML = "";


  order.items.forEach(item => {

    const element =
      document.createElement("div");


    element.className =
      "success-item";


    element.innerHTML = `

      <div class="success-item-info">

        ${item.name}

        <br>

        <span>
          ${item.quantity} ×
          ${formatRupiah(
            item.happyHourPrice
          )}
        </span>

        ${item.note
  ? `
    <span class="order-item-note">
      Note: ${item.note}
    </span>
  `
  : ""
}

      </div>


      <div class="success-item-price">

        ${formatRupiah(
          item.subtotal
        )}

      </div>

    `;


    successItems.appendChild(
      element
    );

  });


  successTotal.textContent =
    formatRupiah(order.total);


  successSavings.textContent =
    formatRupiah(order.savings);


  updatePosStatus(order);

}


// ==========================================
// POS STATUS
// ==========================================

function updatePosStatus(order) {

  const transferred =
    order.status === "transferred";


  if (transferred) {

    posStatus.classList.add(
      "transferred"
    );

    posStatusText.textContent =
      "Transferred to POS";


    transferPosButton.disabled =
      true;

    transferPosButton.innerHTML = `
      <span>Transferred to POS</span>
      <span>✓</span>
    `;

  } else {

    posStatus.classList.remove(
      "transferred"
    );

    posStatusText.textContent =
      "Waiting for POS";


    transferPosButton.disabled =
      false;

    transferPosButton.innerHTML = `
      <span>
        Mark as Transferred to POS
      </span>

      <span>✓</span>
    `;

  }

}


// ==========================================
// MARK TRANSFERRED
// ==========================================

transferPosButton.addEventListener(
  "click",
  () => {

    if (!currentConfirmedOrder) {
      return;
    }


    const orders =
      getSavedOrders();


    const order =
      orders.find(
        item =>
          item.id ===
          currentConfirmedOrder.id
      );


    if (!order) {
      return;
    }


    order.status =
      "transferred";


    order.transferredAt =
      new Date().toISOString();


    saveOrders(orders);

    renderRecentOrders();


    currentConfirmedOrder =
      order;


    updatePosStatus(order);

  }
);


// ==========================================
// START NEW ORDER
// ==========================================

newOrderButton.addEventListener(
  "click",
  () => {

    currentConfirmedOrder = null;

    selectedCategory = "all";
    searchKeyword = "";

    searchInput.value = "";

    resetCategoryButtons();

    renderProducts();

    showPage(menuPage);

  }
);

// ==========================================
// ORDER HISTORY
// ==========================================

const recentOrdersList =
  document.getElementById("recentOrdersList");

const noOrders =
  document.getElementById("noOrders");

const historyDetailPage =
  document.getElementById("historyDetailPage");

const backFromHistory =
  document.getElementById("backFromHistory");

const historyOrderId =
  document.getElementById("historyOrderId");

const historyStatus =
  document.getElementById("historyStatus");

const historyDate =
  document.getElementById("historyDate");

const historyItemCount =
  document.getElementById("historyItemCount");

const historyItems =
  document.getElementById("historyItems");

const historyOriginalTotal =
  document.getElementById("historyOriginalTotal");

const historySavings =
  document.getElementById("historySavings");

const historyTotal =
  document.getElementById("historyTotal");

const historyTransferButton =
  document.getElementById("historyTransferButton");

const deleteOrderButton =
  document.getElementById("deleteOrderButton");


let openedHistoryOrderId = null;
let historyReturnPage = homePage;


// ==========================================
// RENDER RECENT ORDERS
// ==========================================

function renderRecentOrders() {

  const orders =
    getSavedOrders();


  recentOrdersList.innerHTML = "";


  if (orders.length === 0) {

    noOrders.classList.add("show");

    return;

  }


  noOrders.classList.remove("show");


  // Home only shows latest 5 orders

  orders
    .slice(0, 5)
    .forEach(order => {

      const button =
        document.createElement("button");


      button.className =
        "recent-order";


      button.dataset.orderId =
        order.id;


      const transferred =
        order.status === "transferred";


      const date =
        new Date(order.createdAt);


      const time =
        date.toLocaleTimeString(
          "id-ID",
          {
            hour: "2-digit",
            minute: "2-digit"
          }
        );


      button.innerHTML = `

        <div class="recent-order-main">

          <div class="recent-order-top">

            <span class="recent-order-id">
              ${order.id}
            </span>


            <span
              class="recent-order-status
              ${transferred
                ? "transferred"
                : ""}">

              ${
                transferred
                  ? "TRANSFERRED"
                  : "WAITING FOR POS"
              }

            </span>

          </div>


          <div class="recent-order-bottom">

            <span>
              ${time}
            </span>

            <span>•</span>

            <span>
              ${order.quantity}
              ${
                order.quantity === 1
                  ? "item"
                  : "items"
              }
            </span>


            <strong class="recent-order-total">

              ${formatRupiah(
                order.total
              )}

            </strong>

          </div>

        </div>


        <span class="recent-order-arrow">
          ›
        </span>

      `;


      recentOrdersList.appendChild(
        button
      );

    });

}


// ==========================================
// OPEN HISTORY ORDER
// ==========================================

recentOrdersList.addEventListener(
  "click",
  event => {

    const orderButton =
      event.target.closest(
        "[data-order-id]"
      );


    if (!orderButton) {
      return;
    }

    historyReturnPage = homePage;

    openHistoryOrder(
      orderButton.dataset.orderId
    );

  }
);


function openHistoryOrder(orderId) {

  const orders =
    getSavedOrders();


  const order =
    orders.find(
      item =>
        item.id === orderId
    );


  if (!order) {
    return;
  }


  openedHistoryOrderId =
    order.id;


  renderHistoryDetail(order);

  showPage(historyDetailPage);

}


// ==========================================
// RENDER HISTORY DETAIL
// ==========================================

function renderHistoryDetail(order) {

  const transferred =
    order.status === "transferred";

deleteOrderButton.classList.toggle(
  "show",
  transferred
);


  historyOrderId.textContent =
    order.id;


  // DATE

  const date =
    new Date(order.createdAt);


  historyDate.textContent =
    date.toLocaleString(
      "id-ID",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",

        hour: "2-digit",
        minute: "2-digit"
      }
    );


  historyItemCount.textContent =
    `${order.quantity} ${
      order.quantity === 1
        ? "item"
        : "items"
    }`;


  // STATUS

  historyStatus.textContent =
    transferred
      ? "Transferred"
      : "Waiting for POS";


  historyStatus.classList.toggle(
    "transferred",
    transferred
  );


  // ITEMS

  historyItems.innerHTML = "";


  order.items.forEach(item => {

    const element =
      document.createElement("div");


    element.className =
      "history-item";


    element.innerHTML = `

      <div class="history-item-name">

        ${item.name}

        <span>

          ${item.quantity} ×
          ${formatRupiah(
            item.happyHourPrice
          )}

        </span>

        ${item.note
  ? `
    <span class="order-item-note">
      Note: ${item.note}
    </span>
  `
  : ""
}

      </div>


      <div class="history-item-price">

        ${formatRupiah(
          item.subtotal
        )}

      </div>

    `;


    historyItems.appendChild(
      element
    );

  });


  // TOTALS

  historyOriginalTotal.textContent =
    formatRupiah(
      order.originalTotal
    );


  historySavings.textContent =
    `-${formatRupiah(
      order.savings
    )}`;


  historyTotal.textContent =
    formatRupiah(
      order.total
    );


  // BUTTON

  historyTransferButton.disabled =
    transferred;


  if (transferred) {

    historyTransferButton.innerHTML = `

      <span>
        Transferred to POS
      </span>

      <span>✓</span>

    `;

  } else {

    historyTransferButton.innerHTML = `

      <span>
        Mark as Transferred to POS
      </span>

      <span>✓</span>

    `;

  }

}


// ==========================================
// HISTORY → MARK TRANSFERRED
// ==========================================

historyTransferButton.addEventListener(
  "click",
  () => {

    if (!openedHistoryOrderId) {
      return;
    }


    const orders =
      getSavedOrders();


    const order =
      orders.find(
        item =>
          item.id ===
          openedHistoryOrderId
      );


    if (!order) {
      return;
    }


    order.status =
      "transferred";


    order.transferredAt =
      new Date().toISOString();


    saveOrders(orders);


    renderHistoryDetail(order);

    renderRecentOrders();

  }
);

// ==========================================
// DELETE COMPLETED ORDER
// ==========================================

deleteOrderButton.addEventListener(
  "click",
  () => {

    if (!openedHistoryOrderId) {
      return;
    }

    const orders =
      getSavedOrders();

    const order =
      orders.find(
        item =>
          item.id === openedHistoryOrderId
      );

    if (!order) {
      return;
    }


    // SAFETY:
    // active orders cannot be deleted

    if (order.status !== "transferred") {
      return;
    }


    const confirmed =
      confirm(
        `Delete completed order ${order.id}?`
      );


    if (!confirmed) {
      return;
    }


    const updatedOrders =
      orders.filter(
        item =>
          item.id !== openedHistoryOrderId
      );


    saveOrders(updatedOrders);


    openedHistoryOrderId = null;


    // Refresh both history views

    renderRecentOrders();
    renderAllOrders();


    // Return to where the detail was opened from

    showPage(
      historyReturnPage
    );

  }
);

// ==========================================
// BACK TO HOME
// ==========================================

backFromHistory.addEventListener(
  "click",
  () => {

    openedHistoryOrderId = null;

    renderRecentOrders();
    renderAllOrders();

    showPage(
      historyReturnPage
    );

  }
);


// ==========================================
// INITIAL HISTORY
// ==========================================

renderRecentOrders();

// ==========================================
// ALL ORDER HISTORY
// ==========================================

const viewAllOrders =
  document.getElementById("viewAllOrders");

const ordersPage =
  document.getElementById("ordersPage");

const backFromOrders =
  document.getElementById("backFromOrders");

const waitingCount =
  document.getElementById("waitingCount");

const transferredCount =
  document.getElementById("transferredCount");

const allOrderCount =
  document.getElementById("allOrderCount");

const orderSearchInput =
  document.getElementById("orderSearchInput");

const orderFilter =
  document.querySelector(".order-filter");

const allOrdersList =
  document.getElementById("allOrdersList");

const ordersEmpty =
  document.getElementById("ordersEmpty");


let selectedOrderFilter = "all";
let orderSearchKeyword = "";


// ==========================================
// OPEN ALL ORDERS
// ==========================================

viewAllOrders.addEventListener(
  "click",
  () => {

    selectedOrderFilter = "all";
    orderSearchKeyword = "";

    orderSearchInput.value = "";

    document
      .querySelectorAll(
        ".order-filter-button"
      )
      .forEach(button => {

        button.classList.toggle(
          "active",
          button.dataset.orderFilter === "all"
        );

      });


    renderAllOrders();

    showPage(ordersPage);

  }
);


// ==========================================
// BACK HOME
// ==========================================

backFromOrders.addEventListener(
  "click",
  () => {

    renderRecentOrders();

    showPage(homePage);

  }
);


// ==========================================
// FILTER
// ==========================================

orderFilter.addEventListener(
  "click",
  event => {

    const button =
      event.target.closest(
        ".order-filter-button"
      );


    if (!button) {
      return;
    }


    document
      .querySelectorAll(
        ".order-filter-button"
      )
      .forEach(item => {
        item.classList.remove("active");
      });


    button.classList.add("active");


    selectedOrderFilter =
      button.dataset.orderFilter;


    renderAllOrders();

  }
);


// ==========================================
// SEARCH
// ==========================================

orderSearchInput.addEventListener(
  "input",
  event => {

    orderSearchKeyword =
      event.target.value
        .trim()
        .toLowerCase();


    renderAllOrders();

  }
);


// ==========================================
// RENDER ALL ORDERS
// ==========================================

function renderAllOrders() {

  const orders =
    getSavedOrders();


  // COUNTERS

  const waiting =
    orders.filter(
      order =>
        order.status === "waiting-pos"
    ).length;


  const transferred =
    orders.filter(
      order =>
        order.status === "transferred"
    ).length;


  waitingCount.textContent =
    waiting;

  transferredCount.textContent =
    transferred;

  allOrderCount.textContent =
    orders.length;


  // FILTER DATA

  const filteredOrders =
    orders.filter(order => {

      const matchesStatus =
        selectedOrderFilter === "all" ||
        order.status ===
          selectedOrderFilter;


      const matchesSearch =
        order.id
          .toLowerCase()
          .includes(
            orderSearchKeyword
          );


      return (
        matchesStatus &&
        matchesSearch
      );

    });


  allOrdersList.innerHTML = "";


  if (filteredOrders.length === 0) {

    ordersEmpty.classList.add(
      "show"
    );

    return;

  }


  ordersEmpty.classList.remove(
    "show"
  );


  filteredOrders.forEach(order => {

    const transferred =
      order.status === "transferred";


    const date =
      new Date(order.createdAt);


    const dateText =
      date.toLocaleDateString(
        "id-ID",
        {
          day: "2-digit",
          month: "short"
        }
      );


    const timeText =
      date.toLocaleTimeString(
        "id-ID",
        {
          hour: "2-digit",
          minute: "2-digit"
        }
      );


    const button =
      document.createElement(
        "button"
      );


    button.className =
      "all-order-card";


    button.dataset.fullOrderId =
      order.id;


    button.innerHTML = `

      <div class="all-order-card-top">

        <span class="all-order-id">
          ${order.id}
        </span>


        <span
          class="all-order-status
          ${transferred
            ? "transferred"
            : ""}">

          ${
            transferred
              ? "TRANSFERRED"
              : "WAITING FOR POS"
          }

        </span>

      </div>


      <div class="all-order-meta">

        <span>
          ${dateText}
        </span>

        <span>•</span>

        <span>
          ${timeText}
        </span>

        <span>•</span>

        <span>
          ${order.quantity}
          ${
            order.quantity === 1
              ? "item"
              : "items"
          }
        </span>

      </div>


      <div class="all-order-bottom">

        <span>
          View order detail
        </span>

        <strong>
          ${formatRupiah(
            order.total
          )} ›
        </strong>

      </div>

    `;


    allOrdersList.appendChild(
      button
    );

  });

}


// ==========================================
// OPEN ORDER FROM ALL HISTORY
// ==========================================

allOrdersList.addEventListener(
  "click",
  event => {

    const orderButton =
      event.target.closest(
        "[data-full-order-id]"
      );

    if (!orderButton) {
      return;
    }


    historyReturnPage =
      ordersPage;


    openHistoryOrder(
      orderButton.dataset.fullOrderId
    );

  }
);
