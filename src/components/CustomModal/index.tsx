import Image from "next/image";
import { RiCloseLine } from "react-icons/ri";
import styles from "./modal.module.css";
import Logo from "../../../public/logo.png";
import ProgressBar from "../Layout/Navbar/ProgressBar";
import ProductTrackBtn from "../Layout/Navbar/ProductTrackBtn";
import UserProfile from "../Layout/Navbar/UserProfile";

const CustomModal = ({ setIsOpen }: any) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.parent}>
            <div className={styles.modalHeader}>
              <Image
                style={{ filter: "invert(100%)" }}
                src={Logo}
                alt="Logo"
                width={115}
                height={22}
                layout="fixed"
              ></Image>
              <button
                className={styles.closeBtn}
                onClick={() => setIsOpen(false)}
              >
                <RiCloseLine style={{ marginBottom: "-2px" }} />
              </button>
            </div>
            <div className={styles.content}>
              <ProgressBar />
              <ProductTrackBtn />
              <UserProfile />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomModal;
