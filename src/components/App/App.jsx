import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar.jsx";
import AppStyles from "./App.module.css";
import Footer from "../Footer/Footer.jsx";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState({});
  console.log(cartItems);
  return (
    <div className={AppStyles.app}>
      <Navbar />
      <Outlet context={[cartItems, setCartItems]} />
      <Footer />
    </div>
  );
}

export default App;
