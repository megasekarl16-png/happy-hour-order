const manageButton =
  document.getElementById("manageMenu");

const managePage =
  document.getElementById("managePage");

const backManage =
  document.getElementById("backManage");

const manageList =
  document.getElementById("manageList");


const priceModal =
  document.getElementById("priceModal");

const editProductName =
  document.getElementById("editProductName");

const priceInput =
  document.getElementById("priceInput");

const discountPreview =
  document.getElementById("discountPreview");

const cancelPrice =
  document.getElementById("cancelPrice");

const savePrice =
  document.getElementById("savePrice");

const resetPrice =
  document.getElementById("resetPrice");


let editingProductId = null;


/* =========================
   OPEN MANAGE
========================= */

manageButton.addEventListener(
  "click",
  () => {

    renderManageMenu();

    showPage(managePage);

  }
);


backManage.addEventListener(
  "click",
  () => {

    renderProducts();

    showPage(homePage);

  }
);


/* =========================
   RENDER MANAGE
========================= */

function renderManageMenu() {

  const products = getProducts();

  manageList.innerHTML = "";

  const categories = [
    "Hot Meal",
    "Sandwich",
    "Savories",
    "Baked",
    "Dessert & Cake",
    "Grab & Go"
  ];


  categories.forEach(category => {

    const categoryProducts =
      products.filter(
        product =>
          product.categoryLabel === category
      );


    const section =
      document.createElement("section");


    section.innerHTML = `

      <h3 class="manage-category-title">
        ${category}
      </h3>

    `;


    categoryProducts.forEach(product => {

      const item =
        document.createElement("div");

      item.className = "manage-item";


      if (!product.available) {
        item.classList.add("sold-out");
      }


      item.innerHTML = `

        <button
          class="availability-button
          ${!product.available ? "sold" : ""}"

          data-availability-id="${product.id}"

          title="${
            product.available
              ? "Available"
              : "Sold Out"
          }">
        </button>


        <div class="manage-product-info">

          <div class="manage-product-name">
            ${product.name}
          </div>

          <span class="manage-product-price">
            ${formatRupiah(product.price)}
          </span>

        </div>


        <button
          class="edit-price-button"
          data-edit-id="${product.id}">
          EDIT
        </button>

      `;


      section.appendChild(item);

    });


    manageList.appendChild(section);

  });

}


/* =========================
   MANAGE CLICK
========================= */

manageList.addEventListener(
  "click",
  event => {

    const editButton =
      event.target.closest(
        "[data-edit-id]"
      );


    const availabilityButton =
      event.target.closest(
        "[data-availability-id]"
      );


    if (editButton) {

      openPriceModal(
        editButton.dataset.editId
      );

    }


    if (availabilityButton) {

      const product =
        getProductById(
          availabilityButton
            .dataset
            .availabilityId
        );


      updateProductAvailability(
        product.id,
        !product.available
      );


      renderManageMenu();

    }

  }
);


/* =========================
   OPEN PRICE MODAL
========================= */

function openPriceModal(productId) {

  const product =
    getProductById(productId);


  editingProductId = product.id;


  editProductName.textContent =
    product.name;


  priceInput.value =
    product.price ?? "";


  updateDiscountPreview();


  priceModal.classList.add("show");

}


/* =========================
   PREVIEW
========================= */

priceInput.addEventListener(
  "input",
  updateDiscountPreview
);


function updateDiscountPreview() {

  const value =
    Number(priceInput.value);


  if (!value) {

    discountPreview.textContent =
      "—";

    return;

  }


  discountPreview.textContent =
    formatRupiah(
      getHappyHourPrice(value)
    );

}


/* =========================
   SAVE PRICE
========================= */

savePrice.addEventListener(
  "click",
  () => {

    const newPrice =
      Number(priceInput.value);


    if (
      !newPrice ||
      newPrice <= 0
    ) {

      alert(
        "Please enter a valid price."
      );

      return;

    }


    updateProductPrice(
      editingProductId,
      newPrice
    );


    closePriceModal();

    renderManageMenu();

  }
);


/* =========================
   RESET PRICE
========================= */

resetPrice.addEventListener(
  "click",
  () => {

    resetProductSettings(
      editingProductId
    );


    closePriceModal();

    renderManageMenu();

  }
);


/* =========================
   CLOSE
========================= */

cancelPrice.addEventListener(
  "click",
  closePriceModal
);


priceModal.addEventListener(
  "click",
  event => {

    if (
      event.target === priceModal
    ) {

      closePriceModal();

    }

  }
);


function closePriceModal() {

  priceModal.classList.remove("show");

  editingProductId = null;

}
