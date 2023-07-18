import { useContext } from "react";
import styles from "./search.module.css";
import { AppLevelContext } from "../../context/appLevelContext";

export const Search = () => {
  const { handleSetSearchValue } = useContext(AppLevelContext);
  return (
    <input
      className={styles.search}
      type="text"
      placeholder="Search movies or tv shows"
      onChange={(e) => handleSetSearchValue(e.target.value)}
    />
  );
};
