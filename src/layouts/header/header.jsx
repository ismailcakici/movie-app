import styles from "./header.module.css";
import Logo from "../../assets/images/logo.png";
import Arrow from "../../assets/images/arrow-right.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState(false);

  function handleSetActive() {
    setActive(!active);
  }
  return (
    <div className={styles.header}>
      <Link to="/" onClick={active && handleSetActive}>
        <img className={styles.logo} src={Logo} alt="logo" />
      </Link>
      <ul className={active ? styles.navListActive : styles.navList}>
        <Link className={styles.navListItem} to="/moviesPage" onClick={handleSetActive}>
          Movies
        </Link>
        <Link className={styles.navListItem} to="/tvShowsPage" onClick={handleSetActive}>
          Tv Shows
        </Link>
        <Link className={styles.navListItem} to="/suggestMePage" onClick={handleSetActive}>
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
