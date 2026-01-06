import FooterStyles from "./Footer.module.css";
import { Link } from "react-router";
function Footer() {
  return (
    <footer>
      <div className={FooterStyles.list}>
        The Odin Project 2026
        <Link to="/">Home</Link>
        <Link to="store">Store</Link>
        <Link to="cart">Cart</Link>
      </div>
    </footer>
  );
}

export default Footer;
