// ==========================================
// HAPPY HOUR — PRODUCT DATA
// ==========================================

const DEFAULT_PRODUCTS = [

  // ==========================================
  // HOT MEAL
  // ==========================================

  {
    id: "grilled-chicken-coconut-rice",
    name: "Grilled Chicken Coconut Rice",
    category: "hot-meal",
    categoryLabel: "Hot Meal",
    price: 53000,
    description:
      "Grilled chicken served as a hearty meal with coconut rice.",
    bread: null,
    image: "assets/food/grilled-chicken-coconut-rice.png"
  },

  {
    id: "chicken-tikka-penne",
    name: "Chicken Tikka Penne Ala Rosa",
    category: "hot-meal",
    categoryLabel: "Hot Meal",
    price: 51000,
    description:
      "Penne pasta with chicken tikka and a creamy tomato-style sauce.",
    bread: null,
    image: "assets/food/chicken-tikka-penne.png"
  },

  {
    id: "grandma-beef-lasagna",
    name: "Grandma Beef Lasagna",
    category: "hot-meal",
    categoryLabel: "Hot Meal",
    price: 51000,
    description:
      "Warm lasagna layered with savory beef and creamy cheese.",
    bread: null,
    image: "assets/food/grandma-beef-lasagna.png"
  },


  // ==========================================
  // SANDWICH
  // ==========================================

  {
    id: "chicken-parmesan-sandwich",
    name: "Chicken Parmesan Sandwich",
    category: "sandwich",
    categoryLabel: "Sandwich",
    price: 48000,
    description:
      "Savory chicken sandwich with parmesan-inspired flavors.",
    bread: null,
    image: "assets/food/chicken-parmesan-sandwich.png"
  },

  {
    id: "smoked-beef-mushroom-cheese-panini",
    name: "Smoked Beef Mushroom & Cheese Panini",
    category: "sandwich",
    categoryLabel: "Sandwich",
    price: 52000,
    description:
      "Savory sandwich filled with smoked beef, sautéed mushrooms, and cheese.",
    bread: "Panini",
    image: "assets/food/smoked-beef-mushroom-cheese-panini.png"
  },

  {
    id: "beef-filone-sandwich",
    name: "Beef Filone Sandwich",
    category: "sandwich",
    categoryLabel: "Sandwich",
    price: 47000,
    description:
      "Soft savory sandwich filled with smoked beef and cheese.",
    bread: "Filone Bread",
    image: "assets/food/beef-filone-sandwich.png"
  },

  {
    id: "classic-tuna-toastie",
    name: "Classic Tuna Toastie",
    category: "sandwich",
    categoryLabel: "Sandwich",
    price: 40000,
    description:
      "Classic toasted sandwich with a savory tuna filling.",
    bread: "Toast Bread",
    image: "assets/food/classic-tuna-toastie.png"
  },

  {
    id: "peanut-butter-panini",
    name: "Peanut Butter Panini Sandwich",
    category: "sandwich",
    categoryLabel: "Sandwich",
    price: 30000,
    description:
      "Panini filled with peanut butter and condensed milk.",
    bread: "Panini",
    image: "assets/food/peanut-butter-panini.png"
  },

{
  id: "beef-pastrami-turkey-bread",
  name: "Beef Pastrami Turkey Bread Sandwich",
  category: "sandwich",
  categoryLabel: "Sandwich",
  price: null,
  description:
    "Savory sandwich with beef pastrami, fresh vegetables, and creamy filling.",
  bread: "Turkey Bread",
  image: "assets/food/beef-pastrami-turkey-bread.png"
},

  {
    id: "chicken-pesto-sourdough",
    name: "Chicken Pesto Sourdough Sandwich",
    category: "sandwich",
    categoryLabel: "Sandwich",
    price: null,
    description:
      "Savory chicken sandwich with pesto.",
    bread: "Sourdough",
    image: "assets/food/chicken-pesto-sourdough.png"
  },


  // ==========================================
  // SAVORIES
  // ==========================================

  {
    id: "chicken-spinach-egg-bites",
    name: "Chicken Spinach Egg Bites",
    category: "savories",
    categoryLabel: "Savories",
    price: 35000,
    description:
      "Soft savory egg bites with chicken and spinach.",
    bread: null,
    image: "assets/food/chicken-spinach-egg-bites.png"
  },

  {
    id: "soft-mozzarella-bread-stick",
    name: "Soft Mozzarella Bread Stick",
    category: "savories",
    categoryLabel: "Savories",
    price: 36000,
    description:
      "Soft savory bread stick with mozzarella cheese.",
    bread: null,
    image: "assets/food/soft-mozzarella-bread-stick.png"
  },

  {
    id: "truffle-chicken-egg-tart",
    name: "Truffle Chicken Egg Tart",
    category: "savories",
    categoryLabel: "Savories",
    price: 40000,
    description:
      "Savory egg tart with chicken and truffle-inspired flavor.",
    bread: null,
    image: "assets/food/truffle-chicken-egg-tart.png"
  },

  {
    id: "cheese-quiche",
    name: "Cheese Quiche",
    category: "savories",
    categoryLabel: "Savories",
    price: 40000,
    description:
      "Savory quiche with a rich cheese filling.",
    bread: null,
    image: "assets/food/cheese-quiche.png"
  },

  {
    id: "smoked-beef-quiche",
    name: "Smoked Beef Quiche",
    category: "savories",
    categoryLabel: "Savories",
    price: 42000,
    description:
      "Savory quiche filled with smoked beef, egg, and cheese.",
    bread: null,
    image: "assets/food/smoked-beef-quiche.png"
  },

  {
    id: "tuna-puff",
    name: "Tuna Puff",
    category: "savories",
    categoryLabel: "Savories",
    price: 30000,
    description:
      "Flaky puff pastry with a savory tuna filling.",
    bread: null,
    image: "assets/food/tuna-puff.png"
  },


  // ==========================================
  // BAKED
  // ==========================================

  {
    id: "double-chocolate-croissant",
    name: "Double Chocolate Croissant",
    category: "baked",
    categoryLabel: "Baked",
    price: null,
    description:
      "Flaky croissant with a rich chocolate filling.",
    bread: null,
    image: "assets/food/double-chocolate-croissant.jpg"
  },

  {
    id: "almond-croissant",
    name: "Almond Croissant",
    category: "baked",
    categoryLabel: "Baked",
    price: 41000,
    description:
      "Buttery croissant with almond pastry cream and sliced almonds.",
    bread: null,
    image: "assets/food/almond-croissant.png"
  },

  {
    id: "cinnamon-rolls",
    name: "Cinnamon Rolls",
    category: "baked",
    categoryLabel: "Baked",
    price: 27000,
    description:
      "Soft Danish-style pastry with cinnamon, raisins, and caramelized sugar.",
    bread: null,
    image: "assets/food/cinnamon-rolls.png"
  },

  {
    id: "butter-croissant",
    name: "Butter Croissant",
    category: "baked",
    categoryLabel: "Baked",
    price: 22000,
    description:
      "Classic French-style croissant with a buttery, flaky texture.",
    bread: null,
    image: "assets/food/butter-croissant.png"
  },


  // ==========================================
  // DESSERT & CAKE
  // ==========================================

  {
    id: "banana-pineapple-oatmeal-bar",
    name: "Banana & Pineapple Oatmeal Bar",
    category: "dessert",
    categoryLabel: "Dessert & Cake",
    price: 25000,
    description:
      "Soft oatmeal bar with banana and pineapple flavors.",
    bread: null,
    image: "assets/food/banana-pineapple-oatmeal-bar.png"
  },

  {
    id: "pistachio-star-doughnut",
    name: "Pistachio Star Doughnut",
    category: "dessert",
    categoryLabel: "Dessert & Cake",
    price: 29000,
    description:
      "Sweet star-shaped doughnut with pistachio flavor.",
    bread: null,
    image: "assets/food/pistachio-star-doughnut.png"
  },

  {
    id: "choco-glaze-doughnut",
    name: "Choco Glaze Doughnut",
    category: "dessert",
    categoryLabel: "Dessert & Cake",
    price: 20000,
    description:
      "Soft doughnut finished with a chocolate glaze.",
    bread: null,
    image: "assets/food/choco-glaze-doughnut.png"
  },

  {
    id: "matcha-cheesecake",
    name: "Matcha Cheesecake",
    category: "dessert",
    categoryLabel: "Dessert & Cake",
    price: 46000,
    description:
      "Creamy cheesecake with a distinctive matcha flavor.",
    bread: null,
    image: "assets/food/matcha-cheesecake.png"
  },

  {
    id: "new-york-cheesecake",
    name: "New York Cheesecake",
    category: "dessert",
    categoryLabel: "Dessert & Cake",
    price: 41000,
    description:
      "Classic cheesecake with a smooth, rich, and creamy texture.",
    bread: null,
    image: "assets/food/new-york-cheesecake.png"
  },

  {
    id: "scarlet-velvet-cake",
    name: "New Scarlet Velvet Cake",
    category: "dessert",
    categoryLabel: "Dessert & Cake",
    price: 43000,
    description:
      "Soft velvet-style cake with a rich creamy finish.",
    bread: null,
    image: "assets/food/scarlet-velvet-cake.png"
  },

  {
    id: "peanut-butter-jelly-mochi",
    name: "Peanut Butter Jelly Mochi Bread",
    category: "dessert",
    categoryLabel: "Dessert & Cake",
    price: null,
    description:
      "Chewy mochi-style bread with peanut butter and jelly flavors.",
    bread: null,
    image: "assets/food/peanut-butter-jelly-mochi.png"
  },

  {
    id: "classic-dark-chocolate",
    name: "Classic Dark Chocolate",
    category: "dessert",
    categoryLabel: "Dessert & Cake",
    price: 43000,
    description:
      "Rich chocolate cake with a deep dark chocolate flavor.",
    bread: null,
    image: "assets/food/classic-dark-chocolate.png"
  },

  {
    id: "espresso-brownies",
    name: "Espresso Brownies",
    category: "dessert",
    categoryLabel: "Dessert & Cake",
    price: 31000,
    description:
      "Fudgy chocolate brownie with espresso flavor.",
    bread: null,
    image: "assets/food/espresso-brownies.png"
  },


  // ==========================================
  // GRAB & GO
  // ==========================================

  {
    id: "chocolate-chip-cookies",
    name: "Chocolate Chip Cookies",
    category: "grab-go",
    categoryLabel: "Grab & Go",
    price: 23000,
    description:
      "Classic cookie filled with chocolate chips.",
    bread: null,
    image: "assets/food/chocolate-chip-cookies.png"
  },

  {
    id: "caramel-stroopwafel",
    name: "Caramel Stroopwafel",
    category: "grab-go",
    categoryLabel: "Grab & Go",
    price: 26000,
    description:
      "Thin waffle cookies layered with a sweet caramel filling.",
    bread: null,
    image: "assets/food/caramel-stroopwafel.png"
  },

  {
    id: "chocolate-stroopwafel",
    name: "Chocolate Stroopwafel",
    category: "grab-go",
    categoryLabel: "Grab & Go",
    price: 26000,
    description:
      "Thin waffle cookies with a chocolate-flavored filling.",
    bread: null,
    image: "assets/food/chocolate-stroopwafel.png"
  },

{
  id: "banana-cake",
  name: "Banana Cake",
  category: "grab-go",
  categoryLabel: "Grab & Go",
  price: null,
  description:
    "Soft and moist cake with a sweet banana flavor.",
  bread: null,
  image: "assets/food/banana-cake.png"
},

{
  id: "raisin-oatmeal-cookies",
  name: "Raisin Oatmeal Cookies",
  category: "grab-go",
  categoryLabel: "Grab & Go",
  price: null,
  description:
    "Oatmeal cookies with sweet raisins and a soft, chewy texture.",
  bread: null,
  image: "assets/food/raisin-oatmeal-cookies.png"
},

];


// ==========================================
// LOCAL STORAGE
// ==========================================

const STORAGE_KEY = "happyHourProductSettings";

const CUSTOM_PRODUCTS_KEY =
  "happyHourCustomProducts";


function getCustomProducts() {

  const saved =
    localStorage.getItem(
      CUSTOM_PRODUCTS_KEY
    );

  if (!saved) {
    return [];
  }

  try {

    return JSON.parse(saved);

  } catch (error) {

    console.error(
      "Failed to read custom products:",
      error
    );

    return [];

  }

}


function saveCustomProducts(products) {

  localStorage.setItem(
    CUSTOM_PRODUCTS_KEY,
    JSON.stringify(products)
  );

}


function addCustomProduct(product) {

  const products =
    getCustomProducts();

  products.push(product);

  saveCustomProducts(products);
}

function deleteCustomProduct(productId) {

  const products =
    getCustomProducts();

  const updatedProducts =
    products.filter(
      product =>
        product.id !== productId
    );

  saveCustomProducts(updatedProducts);


  // Bersihkan juga setting price / availability
  // milik product yang dihapus

  const settings =
    getProductSettings();

  if (settings[productId]) {

    delete settings[productId];

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(settings)
    );

  }

}

function getProductSettings() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return {};
  }

  try {
    return JSON.parse(saved);
  } catch (error) {
    console.error("Failed to read product settings:", error);
    return {};
  }
}

function saveProductSettings(settings) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(settings)
  );
}


// ==========================================
// GET PRODUCTS
// ==========================================

function getProducts() {

  const settings =
    getProductSettings();

  const customProducts =
    getCustomProducts();


  const allProducts = [
    ...DEFAULT_PRODUCTS,
    ...customProducts
  ];


  return allProducts.map(product => {

    const custom =
      settings[product.id];

    return {

      ...product,

      price:
        custom?.price !== undefined
          ? custom.price
          : product.price,

      available:
        custom?.available !== undefined
          ? custom.available
          : product.available !== undefined
            ? product.available
            : true

    };

  });

}

// ==========================================
// GET SINGLE PRODUCT
// ==========================================

function getProductById(productId) {

  return getProducts().find(
    product => product.id === productId
  );

}


// ==========================================
// UPDATE PRICE
// ==========================================

function updateProductPrice(productId, newPrice) {

  const settings = getProductSettings();

  if (!settings[productId]) {
    settings[productId] = {};
  }

  settings[productId].price = newPrice;

  saveProductSettings(settings);
}


// ==========================================
// UPDATE AVAILABILITY
// ==========================================

function updateProductAvailability(productId, available) {

  const settings = getProductSettings();

  if (!settings[productId]) {
    settings[productId] = {};
  }

  settings[productId].available = available;

  saveProductSettings(settings);
}


// ==========================================
// RESET PRODUCT
// ==========================================

function resetProductSettings(productId) {

  const settings = getProductSettings();

  delete settings[productId];

  saveProductSettings(settings);
}


// ==========================================
// PRICE HELPERS
// ==========================================

function getHappyHourPrice(price) {

  if (price === null || price === undefined) {
    return null;
  }

  return Math.round(price * 0.7);
}


function formatRupiah(price) {

  if (price === null || price === undefined) {
    return "Price not set";
  }

  return new Intl.NumberFormat(
    "id-ID",
    {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0
    }
  ).format(price);

}


