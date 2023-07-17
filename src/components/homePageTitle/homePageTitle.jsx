import { useContext } from "react";
import styles from "./homePageTitle.module.css";
import { AppLevelContext } from "../../context/appLevelContext";

export const HomePageTitle = () => {
  const { active } = useContext(AppLevelContext);
  function getTitle({ active }) {
    if (active === 0) {
      return "All";
    } else if (active === 1) {
      return "Movies";
    } else if (active === 2) {
      return "Tv Shows";
    }
  }
  return <span className={styles.homePageTitle}>{getTitle({ active })}</span>;
};
