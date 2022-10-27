import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import { Link } from "react-router-dom";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);

  useEffect(() => {
    const savedCart = getStoredCart();
    // console.log(saveCart);
    const productKeys = Object.keys(savedCart);
    const previousCart = productKeys.map((existingKeys) => {
      const product = fakeData.find((pd) => pd.key === existingKeys);
      product.quantity = savedCart[existingKeys];
      // console.log(existingKeys, savedCart[existingKeys]);
      // console.log(product);
      return product;
    });
    setCart(previousCart, savedCart);
  }, []);
  const handelAddProduct = (product) => {
    const toBeAdded = product.key;
    const sameProduct = cart.find((pd) => pd.key === toBeAdded);
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter((pd) => pd.key !== toBeAdded);
      newCart = [...others, sameProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }

    setCart(newCart);

    addToDb(product.key, count);
  };
  const [cart, setCart] = useState([]);
  return (
    <div className="twin-container">
      <div className="product-container">
        {products.map((pd) => (
          <Product
            key={pd.key}
            showAddToCart={true}
            handelAddProduct={handelAddProduct}
            product={pd}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/review">
            <button className="main-button"> Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
