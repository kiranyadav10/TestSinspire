import Image from "next/image";
import styles from "./userProfile.module.css";

const UserProfile = ({
  name = "Guy Hawkins",
  subTitle = "Hismile",
  profileUrl = "https://picsum.photos/200",
}: any) => {
  
  return (
    <div className={styles.userProfileParent}>
      <div className={styles.first_section}>
        <h1>{name}</h1>
        <p>{subTitle}</p>
      </div>
      <div className={styles.second_section}>
        <Image
          src={profileUrl}
          width={44}
          height={44}
          alt="Profile Image"
          className={styles.profile_image}
        ></Image>
      </div>
    </div>
  );
};

export default UserProfile;
