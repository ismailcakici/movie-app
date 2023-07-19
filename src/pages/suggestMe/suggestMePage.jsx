import { useContext } from "react";
import styleSearch from "../../components/search/search.module.css";
import styles from "./suggestMePage.module.css";
import { AppLevelContext } from "../../context/appLevelContext";
import { MovieCard } from "../../components/movieCard/movieCard";

export default function SuggestMe() {
  const { handleSetSuggest, suggest } = useContext(AppLevelContext);

  return (
    <div className={styles.suggestMePage}>
      <h1 className={styles.text}>Suggest Me</h1>
      <input
        className={styleSearch.search}
        type="text"
        placeholder="Search movies or tv shows for suggest me"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSetSuggest(e.target.value);
          }
        }}
      />
      <div className={styles.movieListBox}>
        {suggest.map((movie, idx) => {
          return <MovieCard movie={movie} key={idx} fromSuggestPage={true} />;
        })}
      </div>
    </div>
  );
}
