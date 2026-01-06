import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar.jsx";
import AppStyles from "./App.module.css";
import Footer from "../Footer/Footer.jsx";
import { useState } from "react";
import { getItemCount } from "../../scripts/utils.js";

function App() {
  const [cartItems, setCartItems] = useState({});

  const itemCount = getItemCount(cartItems);

  return (
    <div className={AppStyles.app}>
      <Navbar itemCount={itemCount} />
      <Outlet context={[cartItems, setCartItems]} />
      <Footer />
    </div>
  );
}

export default App;
