import { useContext } from "react";
import styles from "./tabbar.module.css";
import { AppLevelContext } from "../../context/appLevelContext";

export default function TabBar() {
  const { active, handleSetActive, handleTrendURL } = useContext(AppLevelContext);
  return (
    <div className={styles.tabbar}>
      <div
        className={active === 0 ? styles.tabActive : styles.tab}
        onClick={() => {
          handleSetActive(0);
          handleTrendURL("all");
        }}
      >
        All
      </div>
      <div
        className={active === 1 ? styles.tabActive : styles.tab}
        onClick={() => {
          handleSetActive(1);
          handleTrendURL("movie");
        }}
      >
        Movies
      </div>
      <div
        className={active === 2 ? styles.tabActive : styles.tab}
        onClick={() => {
          handleSetActive(2);
          handleTrendURL("tv");
        }}
      >
        Tv Shows
      </div>
    </div>
  );
}
