import { HomePageTitle } from "../../components/homePageTitle/homePageTitle";
import { MovieCard } from "../../components/movieCard/movieCard";
import { Search } from "../../components/search/search";
import TabBar from "../../components/tabbar/tabbar";
import styles from "./homePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <h1 className={styles.text}>MaileHeroko</h1>
      <p className={styles.p}>
        List of movies and TV Shows, I, Pramod Poudel have watched till date. Explore what I have
        watched and also feel free to make a suggestion.
      </p>
      <Search />
      <TabBar />
      <HomePageTitle />
      <MovieCard />
    </div>
  );
}
