import React from "react";

const Products = (props) => {
  return (
    <div>
      <h1 className="productName">Product: {props.name}</h1>
      <img className="productImg" alt="true" src={props.image} />
      <h2 className="productPrice">Price: ${props.price}</h2>
      <p className="productDesc">What is it?:{props.description}</p>
      <hr></hr>
    </div>
  );
};
export default Products;
