import styles from "./header.module.css";
import Logo from "../../assets/images/logo.png";
import Arrow from "../../assets/images/arrow-right.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={styles.header}>
      <Link to="/">
        <img className={styles.logo} src={Logo} alt="logo" />
      </Link>
      <ul className={styles.navList}>
        <Link className={styles.navListItem} to="/moviesPage">
          Movies
        </Link>
        <Link className={styles.navListItem} to="/tvShowsPage">
          Tv Shows
        </Link>
        <Link className={styles.navListItem} to="/suggestMePage">
          <>
            <p>Suggest Me</p>
            <img className={styles.arrow} src={Arrow} alt="arrow" />
          </>
        </Link>
      </ul>
    </div>
  );
}
