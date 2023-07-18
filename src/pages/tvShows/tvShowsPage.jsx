import styles from "./tvShowsPage.module.css";
import { Search } from "../../components/search/search";
import { MovieList } from "../../components/movieList/movieList";

export default function TvShowsPage() {
  return (
    <>
      <div className={styles.tvShowsPage}>
        <h1 className={styles.text}>Tv Shows</h1>
        <Search />
      </div>
      <MovieList />
    </>
  );
}
