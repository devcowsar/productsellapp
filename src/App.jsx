import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import DiscountProduct from "./Components/DiscountProduct";
import Layout from "./Components/Layout";
import ProductLists from "./Components/ProductLists";
import { products } from "./Components/Products";
import Slide from "./Components/Slide";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [filter, setFilter] = useState("Special"); //default filter

  const filteredProducts = products.filter((product) =>
    product.categories.includes(filter)
  );

  const addToCart = (product) => {
    setCartCount(cartCount + 1);
  };

  return (
    <Layout cartCount={cartCount}>
      <Slide />
      <DiscountProduct />
      <About />
      <div className="px-3 md:px-5 lg:px-7">
        <h3 className="ml-7 text-[38px] font-bold text-heading-text py-2 text-center lg:text-start">
          Our Products
        </h3>
        <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center  px-7 text-base text-body-text font-normal">
          <p>
            Experience crystal clear vision and elevated style with our
            <span className="hidden lg:block">
              <br />
            </span>{" "}
            premium collection of eyeglasses.
          </p>
          <div className="filter-buttons">
            <button
              onClick={() => setFilter("Latest")}
              className={filter === "Latest" ? "active" : ""}
            >
              Latest
            </button>
            <button
              onClick={() => setFilter("Special")}
              className={filter === "Special" ? "active" : ""}
            >
              Special
            </button>
            <button
              onClick={() => setFilter("Best sell")}
              className={filter === "Best sell" ? "active" : ""}
            >
              Best sell
            </button>
          </div>
        </div>
        <ProductLists products={filteredProducts} addToCart={addToCart} />
      </div>
    </Layout>
  );
}

export default App;
