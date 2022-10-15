import { ICardType } from "@/src/types";
import { AiOutlinePlayCircle } from "react-icons/ai";
import styles from "./cardMedia.module.css";

const CardMedia = ({ type }: ICardType) => {
  return (
      <video
        width="100%"
        className={styles.card_media_parent}
        style={{ minHeight: type === "facebook" ? "340px" : "400px",objectFit:"initial" }}
        controls
      >
        <source src="/sample.mp4" type="video/mp4"></source>
      </video>
  );
};

export default CardMedia;
