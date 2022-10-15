import { ICardType } from "@/src/types";
import { getDateWithFormat } from "@/src/utils/helper";
import Image from "next/image";
import { FaFacebook, FaPinterest } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import styles from "./cardHeader.module.css";

const CardHeader = ({
  type,
  brandname,
  releasedDate,
  adDays,
  headerText,
}: IProps) => {
  return (
    <div className={styles.product_root_parent}>
      <div className={styles.product_header_parent}>
        <Image
          src="https://picsum.photos/34"
          width={34}
          height={34}
          alt="Profile Image"
          layout="fixed"
          className={styles.image}
        ></Image>{" "}
        <div className={styles.first_section}>
          <div className={styles.space_between}>
            <p>{brandname}</p>
            {type === "facebook" ? (
              <FaFacebook />
            ) : type === "pintrest" ? (
              <FaPinterest />
            ) : type === "tiktok" ? (
              <SiTiktok />
            ) : (
              ""
            )}{" "}
          </div>
          <div className={styles.space_between}>
            <p style={{ color: "#9CA0A8" }}>
              Released on {getDateWithFormat(releasedDate)}{" "}
            </p>
            <p style={{ color: "#D95D37" }}>{adDays} Days </p>
          </div>
        </div>
      </div>
      <div className={styles.second_section}>
        <p>{headerText}</p>
      </div>
    </div>
  );
};

export default CardHeader;
interface IProps extends ICardType {
  brandname: string;
  releasedDate: Date;
  adDays: number;
  headerText: string;
}
