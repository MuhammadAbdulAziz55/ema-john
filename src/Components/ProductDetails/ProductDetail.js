import React from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../fakeData";
import Product from "../Product/Product";

const ProductDetail = () => {
  let { productKey } = useParams();
  const product = fakeData.find((pd) => pd.key === productKey);

  return (
    <div>
      <h4>{productKey} Details coming soon</h4>
      <Product showAddToCart={false} product={product}></Product>
    </div>
  );
};

export default ProductDetail;
