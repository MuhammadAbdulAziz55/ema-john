import "./App.css";
import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Review from "./Components/Review/Review";
import Inventory from "./Inventory/Inventory";
import NotFound from "./NotFound/NotFound";
import ProductDetail from "./Components/ProductDetails/ProductDetail";

function App() {
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/shop" element={<Shop />} />

          <Route path="/review" element={<Review />} />

          <Route path="/manage" element={<Inventory />} />

          <Route index path="/" element={<Shop />} />

          <Route path="/product/:productKey" element={<ProductDetail />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
