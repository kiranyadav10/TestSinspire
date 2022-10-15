import Link from "next/link";
import { useMemo } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import styles from "./progressBar.module.css";

const ProgressBar = ({ total = 10000, value = 6596 }) => {
    
  const percent = useMemo(() => {
    const per = (value / total) * 100;
    return per;
  }, [value, total]);

  return (
    <div className={styles.progress_bar_parent}>
      <div className={styles.content}>
        <p>
          Pro: <span>{value}</span> / {total}
        </p>
        <p>
          <Link href="#" passHref>
            <a>
              Upgrade Now
              <FiArrowUpRight />
            </a>
          </Link>
        </p>
      </div>
      <div className={styles.progress_parent} style={{ marginTop: "7px" }}>
        <div className={styles.progress} style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
