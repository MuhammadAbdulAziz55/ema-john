import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const product = (props) => {
  const { img, name, seller, price, stock, key } = props.product;
  // console.log(props);
  return (
    <div className="product">
      <div>
        <img src={img} alt=""></img>
      </div>
      <div className="product-all-text">
        <h4 className="product-name">
          <Link to={"/product/" + key}>{name}</Link>
        </h4>
        <br />
        <p>by: {seller}</p>
        <br />
        <p>${price}</p>
        <br />
        <p>Only {stock} left in stock- Order soon</p>
        {props.showAddToCart && (
          <button
            onClick={() => props.handelAddProduct(props.product)}
            className="main-button"
          >
            <FontAwesomeIcon icon={faShoppingCart} /> add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default product;
