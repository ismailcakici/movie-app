import { useContext } from "react";
import styles from "./movieList.module.css";
import { AppLevelContext } from "../../context/appLevelContext";
import { MovieCard } from "../movieCard/movieCard";

export const MovieList = () => {
  const { trends } = useContext(AppLevelContext);

  return (
    <div className={styles.movieListBox}>
      {trends.map((movie, idx) => {
        return <MovieCard movie={movie} key={idx} />;
      })}
    </div>
  );
};
