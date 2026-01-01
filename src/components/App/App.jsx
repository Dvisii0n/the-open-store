import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar.jsx";
import AppStyles from "./App.module.css";
import Footer from "../Footer/Footer.jsx";

function App() {
  return (
    <div className={AppStyles.app}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
