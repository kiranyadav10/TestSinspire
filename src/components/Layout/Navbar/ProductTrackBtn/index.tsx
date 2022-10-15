import styles from "./productTrackBtn.module.css";

const ProductTrackBtn = () => {
  return ( 
    <div className={styles.parent}>
      <button className={styles.productTractBtn}>Products Tracked</button>
    </div>
  );
};

export default ProductTrackBtn;
