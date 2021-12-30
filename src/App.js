import * as React from "react";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import { Route, Routes } from "react-router-dom";

function App() {
  //return <Homepage></Homepage>;
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
