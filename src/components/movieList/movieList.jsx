import { useContext } from "react";
import styles from "./movieList.module.css";
import { AppLevelContext } from "../../context/appLevelContext";
import { MovieCard } from "../movieCard/movieCard";

export const MovieList = () => {
  const { trends, searchValue, filteredData } = useContext(AppLevelContext);

  return (
    <div className={styles.movieListBox}>
      {searchValue.length > 1
        ? filteredData.map((movie, idx) => {
            return <MovieCard movie={movie} key={idx} />;
          })
        : trends.map((movie, idx) => {
            return <MovieCard movie={movie} key={idx} />;
          })}
    </div>
  );
};
