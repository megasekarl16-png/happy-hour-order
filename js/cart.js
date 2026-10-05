// ==========================================
// CART STATE
// ==========================================

let cart = [];


// ==========================================
// ADD TO CART
// ==========================================

function addToCart(productId) {

  const product = getProductById(productId);

  if (!product) return;

  if (!product.available) return;

  if (product.price === null) return;


  const existingItem =
    cart.find(
      item => item.productId === productId
    );


  if (existingItem) {

    existingItem.quantity += 1;

  } else {

    cart.push({
  productId: product.id,
  quantity: 1,
  note: ""
});

  }


  updateCartUI();

}


// ==========================================
// CHANGE QUANTITY
// ==========================================

function increaseQuantity(productId) {

  const item =
    cart.find(
      item => item.productId === productId
    );

  if (!item) return;

  item.quantity += 1;

  updateCartUI();

}


function decreaseQuantity(productId) {

  const item =
    cart.find(
      item => item.productId === productId
    );

  if (!item) return;


  item.quantity -= 1;


  if (item.quantity <= 0) {

    removeFromCart(productId);

    return;

  }


  updateCartUI();

}


// ==========================================
// REMOVE
// ==========================================

function removeFromCart(productId) {

  cart =
    cart.filter(
      item => item.productId !== productId
    );

  updateCartUI();

}

// ==========================================
// ITEM NOTE
// ==========================================

function updateCartItemNote(productId, note) {

  const item =
    cart.find(
      item => item.productId === productId
    );

  if (!item) return;

  item.note = note;
}

// ==========================================
// CLEAR
// ==========================================

function clearCart() {

  cart = [];

  updateCartUI();

}


// ==========================================
// CART DETAILS
// ==========================================

function getCartDetails() {

  return cart.map(item => {

    const product =
      getProductById(item.productId);

    const originalPrice =
      product.price;

    const happyHourPrice =
      getHappyHourPrice(originalPrice);


    return {

      ...item,

      name: product.name,

      originalPrice,

      happyHourPrice,

      originalSubtotal:
        originalPrice * item.quantity,

      subtotal:
        happyHourPrice * item.quantity

    };

  });

}


// ==========================================
// CART TOTALS
// ==========================================

function getCartTotals() {

  const items =
    getCartDetails();


  const originalTotal =
    items.reduce(
      (total, item) =>
        total + item.originalSubtotal,
      0
    );


  const total =
    items.reduce(
      (total, item) =>
        total + item.subtotal,
      0
    );


  const savings =
    originalTotal - total;


  const quantity =
    items.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );


  return {
    originalTotal,
    savings,
    total,
    quantity
  };

}
