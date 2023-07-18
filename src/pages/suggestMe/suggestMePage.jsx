import { Search } from "../../components/search/search";
import styles from "./suggestMePage.module.css";

export default function SuggestMe() {
  return (
    <div className={styles.suggestMePage}>
      <h1 className={styles.text}>Suggest Me</h1>
      <Search />
    </div>
  );
}
