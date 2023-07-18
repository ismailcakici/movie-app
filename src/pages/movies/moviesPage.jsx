import { MovieList } from "../../components/movieList/movieList";
import { Search } from "../../components/search/search";
import styles from "./moviesPage.module.css";

export default function MoviesPage() {
  return (
    <>
      <div className={styles.moviesPage}>
        <h1 className={styles.text}>Movies</h1>
        <Search />
      </div>
      <MovieList />
    </>
  );
}
