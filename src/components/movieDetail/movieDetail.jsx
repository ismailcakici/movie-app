import { useContext } from "react";
import { AppLevelContext } from "../../context/appLevelContext";
import Star from "../../assets/images/star.png";

export const MovieDetail = () => {
  const { movieDetail, loading } = useContext(AppLevelContext);

  if (loading === false) {
    return (
      <>
        <div className="imageTitleBox">
          <img
            src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`}
            alt="backdrop"
          />
          <div className="titleBox">
            <h1>{movieDetail.original_title}</h1>
          </div>
        </div>
        <div className="contentBox">
          <div className="posterBox">
            <img src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`} alt="poster" />
          </div>
          <div className="overviewBox">
            <h1>{movieDetail.tagline}</h1>
            <p>{movieDetail.overview}</p>
            <div className="movieRatingBox">
              <img className="movieRatingStar" src={Star} alt="star" />
              <span className="movieRating">{movieDetail.vote_average.toFixed(1)}</span>
            </div>
            <p className="typeText">Release Date</p>
            <p className="movieType">{movieDetail.release_date}</p>
            <p className="runtimeText">Runtime</p>
            <p className="movieRuntime">{movieDetail.runtime}</p>
            <p className="genresText">Genres</p>
            {movieDetail.genres.map((genres, idx) => {
              return (
                <p key={idx} className="movieGenrest">
                  {genres.name}
                </p>
              );
            })}
          </div>
        </div>
      </>
    );
  } else {
    return <div>Loading...</div>;
  }
};
