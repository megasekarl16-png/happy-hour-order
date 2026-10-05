const manageButton =
  document.getElementById("manageMenu");

const managePage =
  document.getElementById("managePage");

const backManage =
  document.getElementById("backManage");

const manageList =
  document.getElementById("manageList");

const addFoodButton =
  document.getElementById("addFoodButton");

const addFoodModal =
  document.getElementById("addFoodModal");

const newFoodName =
  document.getElementById("newFoodName");

const newFoodCategory =
  document.getElementById("newFoodCategory");

const newFoodPrice =
  document.getElementById("newFoodPrice");

const newFoodDescription =
  document.getElementById("newFoodDescription");

const newFoodBread =
  document.getElementById("newFoodBread");

const newFoodImage =
  document.getElementById("newFoodImage");

const cancelAddFood =
  document.getElementById("cancelAddFood");

const saveNewFood =
  document.getElementById("saveNewFood");


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

        ${product.custom
  ? `
    <button
      class="delete-food-button"
      data-delete-food="${product.id}">
      DELETE
    </button>
  `
  : ""
}

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

// ==========================================
// ADD FOOD
// ==========================================

addFoodButton.addEventListener(
  "click",
  () => {

    clearAddFoodForm();

    addFoodModal.classList.add("show");

  }
);


cancelAddFood.addEventListener(
  "click",
  closeAddFoodModal
);


addFoodModal.addEventListener(
  "click",
  event => {

    if (event.target === addFoodModal) {
      closeAddFoodModal();
    }

  }
);


saveNewFood.addEventListener(
  "click",
  () => {

    const name =
      newFoodName.value.trim();

    const category =
      newFoodCategory.value;

    const price =
      Number(newFoodPrice.value);

    const description =
      newFoodDescription.value.trim();

    const bread =
      newFoodBread.value.trim();

    const image =
      newFoodImage.value.trim();


    // NAME VALIDATION

    if (!name) {

      alert("Please enter the food name.");

      newFoodName.focus();

      return;
    }


    // PRICE VALIDATION

    if (!price || price <= 0) {

      alert("Please enter a valid price.");

      newFoodPrice.focus();

      return;
    }


    // DUPLICATE NAME CHECK

    const duplicate =
      getProducts().some(
        product =>
          product.name
            .trim()
            .toLowerCase() ===
          name.toLowerCase()
      );


    if (duplicate) {

      alert(
        "A food item with this name already exists."
      );

      return;
    }


    // CATEGORY LABEL

    const categoryLabels = {

      "hot-meal":
        "Hot Meal",

      "sandwich":
        "Sandwich",

      "savories":
        "Savories",

      "baked":
        "Baked",

      "dessert":
        "Dessert & Cake",

      "grab-go":
        "Grab & Go"

    };


    // CREATE ID
    // Dibuat SEBELUM product object memakai id

    const id =
      createProductId(name);


    // CREATE PRODUCT

    const product = {

      id,

      name,

      category,

      categoryLabel:
        categoryLabels[category],

      price,

      description,

      bread:
        bread || null,

      image:
        image ||
        "assets/food/placeholder.png",

      available:
        true,

      custom:
        true

    };


    // SAVE

    addCustomProduct(product);


    // CLOSE + REFRESH UI

    closeAddFoodModal();

    renderManageMenu();

    renderProducts();

  }
);


function createProductId(name) {

  const base =
    name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");


  return `custom-${base}-${Date.now()}`;

}


function clearAddFoodForm() {

  newFoodName.value = "";

  newFoodCategory.value =
    "hot-meal";

  newFoodPrice.value = "";

  newFoodDescription.value = "";

  newFoodBread.value = "";

  newFoodImage.value = "";

}


function closeAddFoodModal() {

  addFoodModal.classList.remove("show");

}

// ==========================================
// DELETE CUSTOM FOOD
// ==========================================

manageList.addEventListener(
  "click",
  event => {

    const deleteButton =
      event.target.closest(
        "[data-delete-food]"
      );

    if (!deleteButton) {
      return;
    }

    const productId =
      deleteButton.dataset.deleteFood;

    const product =
      getProductById(productId);

    if (!product || !product.custom) {
      return;
    }

    const confirmed =
      confirm(
        `Delete "${product.name}" from the menu?`
      );

    if (!confirmed) {
      return;
    }

    deleteCustomProduct(productId);

    removeFromCart(productId);

    renderManageMenu();

    renderProducts();

    updateCartUI();

  }
);
