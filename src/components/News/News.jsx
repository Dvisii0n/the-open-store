import NewsCard from "../NewsCard/NewsCard";
import NewsStyles from "./News.module.css";

function News({ newsList }) {
  return (
    <div className={NewsStyles.news}>
      <p className={NewsStyles.title}>Latest News</p>
      <div className={NewsStyles.cardsContainer}>
        {newsList.map((news) => (
          <NewsCard key={news.id} newsInfo={news} />
        ))}
      </div>
    </div>
  );
}

export default News;
