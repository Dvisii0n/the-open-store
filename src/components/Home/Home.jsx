import newsData from "../../scripts/sampleNewsData.js";
import News from "../News/News.jsx";
import Hero from "../Hero/Hero.jsx";
import HomeStyles from "./Home.module.css";
function Home() {
  const news = newsData;

  return (
    <div className={HomeStyles.home}>
      <Hero />
      <News newsList={news} />
    </div>
  );
}

export default Home;
