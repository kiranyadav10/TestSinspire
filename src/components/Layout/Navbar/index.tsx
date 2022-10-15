import CustomModal from "@/components/CustomModal";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../../../public/logo.png";
import styles from "./navbar.module.css";
import ProductTrackBtn from "./ProductTrackBtn";
import ProgressBar from "./ProgressBar";
import UserProfile from "./UserProfile";

const Navbar = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="root_parent"> 
      <div className={`max_width ${styles.navbar_parent}`}>
        <div className={styles.first_section}>
          <Image
            style={{ filter: "invert(100%)" }}
            src={Logo}
            alt="Logo"
            width={115}
            height={22}
            layout="fixed"
          ></Image>
        </div>
        <div className={styles.second_section}>
          <div className={styles.hamburger}>
            <GiHamburgerMenu
              size={24}
              color="white"
              onClick={() => setIsOpen(true)}
            ></GiHamburgerMenu>
          </div>
          <div className="above_1024_px_with_flex">
            <div className={styles.second_section_first}>
              <ProgressBar />
              <ProductTrackBtn />
            </div>
          </div>
          <div
            style={{
              borderLeft: "2px solid rgba(255, 255, 255, 0.5)",
              width: "1px",
              marginRight: "20px",
            }}
            className="above_1024_px"
          ></div>
          <div className="above_1024_px_with_flex">
            <UserProfile
              name={session?.user?.name}
              profileUrl={session?.user?.image}
            />
          </div>
        </div>
      </div>

      {isOpen && <CustomModal setIsOpen={setIsOpen} />}
    </div>
  );
};

export default Navbar;
