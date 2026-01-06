import NavbarStyles from "./Navbar.module.css";
import Searchbar from "../Searchbar/Searchbar.jsx";
import { Link } from "react-router";
import Logo from "../Logo/Logo.jsx";
function Navbar({ itemCount }) {
  return (
    <nav className={NavbarStyles.navbar}>
      <Link to="/">
        <Logo></Logo>
      </Link>
      <Searchbar />
      <Link to="store">
        <p className={NavbarStyles.store}>Store</p>
      </Link>

      <Link to="cart">
        <div className={NavbarStyles.cartWrapper}>
          <p className={NavbarStyles.cart}>Cart </p>

          <p className={NavbarStyles.count}>{itemCount}</p>
        </div>
      </Link>
    </nav>
  );
}

export default Navbar;
