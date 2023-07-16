import Logo from "../../assets/images/logo.png";
import styles from "./footer.module.css";
export function Footer() {
  return (
    <footer className={styles.footer}>
      <img className={styles.logo} src={Logo} alt="logo" />
      <span className={styles.span}>
        A fun and personal project created by Pramod Poudel. Source code available on Github. Open
        for pull request. Clone and use personally. It's up to you.
      </span>
    </footer>
  );
}
