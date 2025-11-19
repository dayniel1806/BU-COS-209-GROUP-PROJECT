const foodItems = [
  // Intercontinental
  {
    name: "Grilled Salmon with Lemon Butter",
    price: "₦8,500",
    image: "/images/grilled-salmon.webp",
    category: "Intercontinental",
  },
  {
    name: "Beef Burger And Fries",
    price: "₦5,500",
    image: "/images/burgerndfRIES.jpg",
    category: "Intercontinental",
  },
  {
    name: "Chicken Alfredo Pasta",
    price: "₦4,800",
    image: "/images/chicken-alfredo-pasta-.webp",
    category: "Intercontinental",
  },
  {
    name: "Peppered Spaghetti Bolognese",
    price: "₦4,200",
    image: "/images/Weeknight-Spaghtetti-Bolognese.webp",
    category: "Intercontinental",
  },
  {
    name: "Pepperoni Pizza (Medium)",
    price: "₦6,500",
    image: "/images/pizza.jpg",
    category: "Intercontinental",
  },

  // Local Dishes
  {
    name: "Jollof Rice & Chicken",
    price: "₦3,000",
    image: "/images/jollof.jpg",
    category: "Local Dishes",
  },
  {
    name: "Egusi Soup & Pounded Yam",
    price: "₦3,800",
    image: "/images/egusi.jpg",
    category: "Local Dishes",
  },
  {
    name: "Fried Rice & Plantain",
    price: "₦3,200",
    image: "/images/friedrice.jpg",
    category: "Local Dishes",
  },
  {
    name: "Efo Riro with Assorted Meat",
    price: "₦4,000",
    image: "/images/eforiro.jpg",
    category: "Local Dishes",
  },
  {
    name: "Pepper Soup (Goat Meat)",
    price: "₦3,500",
    image: "/images/peppersoup.jpg",
    category: "Local Dishes",
  },

  // Breakfast
  {
    name: "Full English Breakfast",
    price: "₦4,500",
    image: "/images/englishbreakfast.jpg",
    category: "Breakfast",
  },
  {
    name: "Akara & Pap (Akamu)",
    price: "₦1,800",
    image: "/images/akara.jpg",
    category: "Breakfast",
  },
  {
    name: "Fluffy Pancakes with Syrup",
    price: "₦2,500",
    image: "/images/pancakes.jpg",
    category: "Breakfast",
  },
  {
    name: "Yam & Egg Sauce",
    price: "₦2,200",
    image: "/images/yamegg.jpg",
    category: "Breakfast",
  },
  {
    name: "Continental Toast Platter",
    price: "₦3,800",
    image: "/images/toastplatter.jpg",
    category: "Breakfast",
  },

  // Beverages
  {
    name: "Zobo Drink (Glass)",
    price: "₦800",
    image: "/images/zobo.jpg",
    category: "Beverages",
  },
  {
    name: "Chapman Cocktail",
    price: "₦1,500",
    image: "/images/chapman.jpg",
    category: "Beverages",
  },
  {
    name: "Fresh Orange Juice",
    price: "₦1,200",
    image: "/images/orangejuice.jpg",
    category: "Beverages",
  },
  {
    name: "Coca-Cola / Pepsi (Can)",
    price: "₦700",
    image: "/images/cola.jpg",
    category: "Beverages",
  },
  {
    name: "Palm Wine (Glass)",
    price: "₦1,000",
    image: "/images/palmwine.jpg",
    category: "Beverages",
  },
];

const foodContainer = document.getElementById("food-container");

function createFoodCard(food) {
  const card = document.createElement("div");
  card.className = "food-card";

  card.innerHTML = `
    <img src="${food.image}" alt="${food.name}">
    <div style="padding: 10px;">
      <h3>${food.name}</h3>
      <p style="color: orangered; font-weight: bold;">${food.price}</p>
      <button style="
        background-color: orangered; 
        color: white; 
        border: none; 
        padding: 8px 15px; 
        border-radius: 5px; 
        cursor: pointer;
        margin-top: 10px;
        width: 100%;
        font-weight: bold;
      ">Add to Cart</button>
    </div>
  `;
  return card;
}
function returnCategory(food){
  const category = document.createElement("div");
  card.className ="category";

  card.innerHTML = `
  <div style = "background: url(/images/inter.jpeg) center/cover no-repeat;">
  <h1>${food.categories}</h1>
  </div>
  `;
  return category;
}
