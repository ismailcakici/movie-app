import styles from "./movieCard.module.css";
import Star from "../../assets/images/star.png";
import { useContext } from "react";
import { AppLevelContext } from "../../context/appLevelContext";
import { Link } from "react-router-dom";

const posterURL = "https://image.tmdb.org/t/p/w500";

export const MovieCard = ({ movie }) => {
  const { handleSetMovieDetail } = useContext(AppLevelContext);

  return (
    <Link
      className={styles.movieCard}
      to="/movieDetailPage"
      onClick={() => {
        handleSetMovieDetail(movie.id);
      }}
    >
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
    </Link>
  );
};
