import * as React from "react";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUp from "../src/pages/signIn-signUp/signIn-signUp.component";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/login" element={<SignInSignUp></SignInSignUp>} />
        <Route exact path="/" element={<Homepage />} />
        <Route path="shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
