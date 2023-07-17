import { Search } from "../../components/search/search";
import styles from "./homePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <h1 className={styles.text}>Maile Heroko</h1>
      <p className={styles.p}>
        List of movies and TV Shows, I, Pramod Poudel have watched till date. Explore what I have
        watched and also feel free to make a suggestion.
      </p>
      <Search />
    </div>
  );
}
