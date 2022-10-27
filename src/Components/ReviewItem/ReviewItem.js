import React from "react";

const ReviewItem = (props) => {
  const { name, quantity, key, price } = props.product;
  const reviewItemStyle = {
    borderBottom: "1px solid lightGray",
    paddingBottom: "5px",
    marginBottom: "5px",
    marginLeft: "200px",
  };
  return (
    <div style={reviewItemStyle}>
      <h4 className="product-name">Product Name: {name}</h4>
      <p>Quantity: {quantity}</p>
      <p>Price: ${price}</p>
      <br />
      <button onClick={() => props.removeProduct(key)} className="main-button">
        Remove
      </button>
    </div>
  );
};

export default ReviewItem;
