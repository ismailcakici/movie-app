import { useContext } from "react";
import { AppLevelContext } from "../../context/appLevelContext";
import Star from "../../assets/images/star.png";
import styles from "./movieDetail.module.css";

export const MovieDetail = () => {
  const { movieDetail, loading, tvOrMovie } = useContext(AppLevelContext);

  if (loading === false) {
    return (
      <>
        <div className={styles.movieDetailBody}>
          <div className={styles.imageTitleBox}>
            <img
              className={styles.backdropImage}
              src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`}
              alt="backdrop"
            />
            <div className={styles.titleBox}>
              <p className={styles.mediaType}>
                MaileHereko / {tvOrMovie.charAt(0).toUpperCase() + tvOrMovie.slice(1)}
              </p>
              <h1 className={styles.movieTitle}>
                {movieDetail.original_title ?? movieDetail.title ?? movieDetail.name}
              </h1>
            </div>
          </div>
          <div className={styles.contentBox}>
            <div className={styles.posterBox}>
              <img
                className={styles.posterImage}
                src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
                alt="poster"
              />
            </div>
            <div className={styles.overViewBox}>
              <h1 className={styles.tagLine}>{movieDetail.tagline}</h1>
              <p className={styles.movieOverView}>{movieDetail.overview}</p>
              <div className={styles.movieRatingBox}>
                <img className={styles.movieRatingStar} src={Star} alt="star" />
                <span className={styles.movieRating}>{movieDetail.vote_average.toFixed(1)}</span>
              </div>
              <p className={styles.titles}>Type</p>
              <p className={styles.movieType}>
                {tvOrMovie.charAt(0).toUpperCase() + tvOrMovie.slice(1)}
              </p>
              <p className={styles.titles}>
                {tvOrMovie === "tv" ? "First Air Date" : "Release Date"}
              </p>
              <p className={styles.movieReleaseDateText}>
                {tvOrMovie === "tv" ? movieDetail.first_air_date : movieDetail.release_date}
              </p>
              <p className={styles.titles}>
                {tvOrMovie === "tv" ? "Number of Episodes" : "Runtime"}
              </p>
              <p className={styles.movieRuntime}>
                {tvOrMovie === "tv"
                  ? movieDetail.number_of_episodes
                  : movieDetail.runtime + " minutes"}
              </p>
              <p className={styles.titles}>Genres</p>
              <div className={styles.genresBox}>
                {movieDetail.genres.map((genres, idx) => {
                  return (
                    <p key={idx} className={styles.movieGenres}>
                      {genres.name}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <div>Loading...</div>;
  }
};
