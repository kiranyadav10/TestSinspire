import styles from "./searchButton.module.css";
import { FaSearchPlus } from "react-icons/fa";

const SearchButton = () => {
  return (
    <div className={styles.search_btn}> 
      <FaSearchPlus color="#7c7c7c" />
      <input className={styles.input_btn}></input>
    </div>
  );
};

export default SearchButton;
