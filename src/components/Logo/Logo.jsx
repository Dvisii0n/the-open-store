import LogoStyles from "./Logo.module.css";

function Logo() {
  return (
    <div className={LogoStyles.logo}>
      <div className={LogoStyles.imgContainer}>
        <img src="/logo.png" alt="logo of a man riding a horse" />
      </div>
      <div className={LogoStyles.logoText}>
        <p className={LogoStyles.title}>The Open Store</p>
        <p className={LogoStyles.slogan}>the stores thats open</p>
      </div>
    </div>
  );
}

export default Logo;
