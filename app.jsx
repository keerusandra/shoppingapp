import React, { useState } from "react";

function App() {
  // Dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Cart
  const [cart, setCart] = useState([]);

  // Filter
  const [category, setCategory] = useState("All");

  // Products (keep simple inside file for safety)
  const products = [
    { id: 1, name: "Apple", category: "Fruits" },
    { id: 2, name: "Banana", category: "Fruits" },
    { id: 3, name: "Carrot", category: "Vegetables" },
    { id: 4, name: "Milk", category: "Dairy" },
  ];

  // Add to cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Filter logic
  const filteredProducts =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div className={darkMode ? "dark" : ""}>

      {/* DARK MODE */}
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <h1>Shopping App</h1>

      {/* CATEGORY FILTER */}
      <button onClick={() => setCategory("All")}>All</button>
      <button onClick={() => setCategory("Fruits")}>Fruits</button>
      <button onClick={() => setCategory("Vegetables")}>Vegetables</button>
      <button onClick={() => setCategory("Dairy")}>Dairy</button>

      {/* PRODUCTS */}
      <h2>Products</h2>
      {filteredProducts.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}

      {/* CART */}
      <h2>Cart</h2>
      {cart.length === 0
        ? "Cart is empty"
        : cart.map((item, i) => <p key={i}>{item.name}</p>)}

    </div>
  );
}

export default App;