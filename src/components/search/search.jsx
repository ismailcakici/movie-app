import styles from "./search.module.css";

export const Search = () => {
  return <input className={styles.search} type="text" placeholder="Search movies or tv shows" />;
};
