import HeroStyles from "./Hero.module.css";

function Hero() {
  return (
    <div className={HeroStyles.hero}>
      <div className={HeroStyles.heroText}>
        <h1>The Open Store</h1>
        <h2>The store thats open</h2>
      </div>
    </div>
  );
}

export default Hero;
