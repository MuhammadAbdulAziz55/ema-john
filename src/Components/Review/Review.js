import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import {
  clearTheCart,
  deleteFromDb,
  getStoredCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import orderPlaceImage from "../../images/giphy.gif";

const Review = () => {
  const [cart, setCart] = useState([]);

  const removeProduct = (productKey) => {
    // console.log("remove clicked", productKey);
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    deleteFromDb(productKey);
  };

  useEffect(() => {
    // cart
    const saveCart = getStoredCart();
    const productKeys = Object.keys(saveCart);
    const cartProducts = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = saveCart[key];
      return product;
    });
    setCart(cartProducts);
  }, []);

  const handelPlaceOrder = () => {
    setCart([]);
    setOrderPlaced(true);
    clearTheCart();
  };

  const [orderPlaced, setOrderPlaced] = useState(false);

  let thankYou;
  if (orderPlaced) {
    thankYou = <img src={orderPlaceImage} alt="" />;
  }

  return (
    <div className="twin-container">
      <div className="product-container">
        {cart.map((pd) => (
          <ReviewItem removeProduct={removeProduct} product={pd}></ReviewItem>
        ))}

        {thankYou}
      </div>

      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={handelPlaceOrder} className="main-button">
            Place Order
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
