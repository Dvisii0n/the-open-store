import NavbarStyles from "./Navbar.module.css";
import Searchbar from "../Searchbar/Searchbar.jsx";
import { Link } from "react-router";
import Logo from "../Logo/Logo.jsx";
function Navbar() {
  return (
    <nav className={NavbarStyles.navbar}>
      <Link to="/">
        <Logo></Logo>
      </Link>
      <Searchbar />
      <Link to="store">Store</Link>

      <Link to="cart">Cart</Link>
    </nav>
  );
}

export default Navbar;
