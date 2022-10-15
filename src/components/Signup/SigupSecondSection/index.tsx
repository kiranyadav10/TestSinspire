import { Qoute } from "../../../svgs/Qoute";
import styles from "./secondSection.module.css";

export const SigupSecondSection = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <div className={styles.testimonialCard}>
          <h1 className={styles.Qoute}>
            <Qoute />
            <Qoute />
          </h1>
          <h1 className={styles.content}>
            By using Mattered, I save a lot of time working to find the winning
            products in a more data-driven way.
          </h1>

          <p className={styles.author}>Brittany Doll</p>
          <p className={styles.role}>Product finder</p>
        </div>
      </div>
    </div>
  );
};
