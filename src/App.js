import * as React from "react";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUp from "../src/pages/signIn-signUp/signIn-signUp.component";
import { Route, Routes } from "react-router-dom";
import { auth } from "./firebase/firebase.utils";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/login" element={<SignInSignUp></SignInSignUp>} />
          <Route exact path="/" element={<Homepage />} />
          <Route path="shop" element={<ShopPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
