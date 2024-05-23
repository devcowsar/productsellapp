import React from "react";
import ProductCard from "./ProductCard";

const ProductLists = ({ products, addToCart }) => {
  return (
    <div className="our-product grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:px-7 md:px-5 px-3 py-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductLists;
