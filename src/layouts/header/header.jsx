import styles from "./header.module.css";
import Logo from "../../assets/images/logo.png";
import Arrow from "../../assets/images/arrow-right.png";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AppLevelContext } from "../../context/appLevelContext";

export default function Header() {
  const [active, setActive] = useState(false);
  const { handleTrendURL } = useContext(AppLevelContext);

  function handleSetActive() {
    setActive(!active);
  }
  return (
    <div className={styles.header}>
      <Link
        to="/"
        onClick={() => {
          if (active === false) {
            handleTrendURL("all");
            handleSetActive();
          }
        }}
      >
        <img className={styles.logo} src={Logo} alt="logo" />
      </Link>
      <ul className={active ? styles.navListActive : styles.navList}>
        <Link
          className={styles.navListItem}
          to="/moviesPage"
          onClick={() => {
            handleTrendURL("movie");
            handleSetActive();
          }}
        >
          Movies
        </Link>
        <Link
          className={styles.navListItem}
          to="/tvShowsPage"
          onClick={() => {
            handleTrendURL("tv");
            handleSetActive();
          }}
        >
          Tv Shows
        </Link>
        <Link
          className={styles.navListItem}
          to="/suggestMePage"
          onClick={() => {
            handleSetActive();
          }}
        >
          <>
            <p>Suggest Me</p>
            <img className={styles.arrow} src={Arrow} alt="arrow" />
          </>
        </Link>
      </ul>
      <div className={styles.menu} onClick={handleSetActive}>
        <div className={styles.hamburgerLine}></div>
        <div className={styles.hamburgerLine}></div>
        <div className={styles.hamburgerLine}></div>
      </div>
    </div>
  );
}
