import NewsCardStyles from "./NewsCard.module.css";

function NewsCard({ newsInfo }) {
  return (
    <div className={NewsCardStyles.newsCard}>
      <div className={NewsCardStyles.imgContainer}>
        <img src={newsInfo.imgUrl} alt="News image" />
      </div>
      <div className={NewsCardStyles.text}>
        <p className={NewsCardStyles.title}>{newsInfo.title}</p>
        <p>{newsInfo.description}</p>
      </div>
    </div>
  );
}

export default NewsCard;
