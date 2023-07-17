import styles from "./movieCard.module.css";
import Star from "../../assets/images/star.png";

export const MovieCard = () => {
  return (
    <div className={styles.movieCard}>
      <div className={styles.moviePosterBox}>
        <img
          className={styles.moviePoster}
          src="https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg "
          alt="movie-poster"
        />
      </div>
      <span className={styles.movieTitle}>Fast and Furious</span>
      <div className={styles.movieRatingBox}>
        <img className={styles.movieRatingStar} src={Star} alt="star" />
        <span className={styles.movieRating}>8.3</span>
      </div>
    </div>
  );
};
