import styles from "./movieCard.module.css";
import Star from "../../assets/images/star.png";

const posterURL = "https://image.tmdb.org/t/p/w500";

export const MovieCard = ({ movie }) => {
  return (
    <div className={styles.movieCard}>
      <div className={styles.moviePosterBox}>
        <img
          className={styles.moviePoster}
          src={`${posterURL}${movie.poster_path}`}
          alt="movie-poster"
        />
      </div>
      <span className={styles.movieTitle}>{movie.title ?? movie.name}</span>
      <div className={styles.movieRatingBox}>
        <img className={styles.movieRatingStar} src={Star} alt="star" />
        <span className={styles.movieRating}>{movie.vote_average.toFixed(1)}</span>
      </div>
    </div>
  );
};
