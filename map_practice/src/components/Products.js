import React from "react";

const Products = ({ product }) => {
  return (
    <div>
      <h1 className="productName">Product: {product.name}</h1>
      <img className="productImg" alt="true" src={product.image} />
      <h2 className="productPrice">
        Price:{" "}
        {product.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </h2>
      <p className="productDesc">What is it?</p>
      <p>{product.description}</p>
      <hr></hr>
    </div>
  );
};
export default Products;
