import styles from "./commonCard.module.css";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import CardMedia from "./CardMedia";
import { CSSProperties } from "react";

const CommonCard = (props: IProps) => {
  const { parentStyle, type, onClick } = props;
  return (
    // @ts-ignore
    <div
      className={styles.common_card_parent}
      {...parentStyle}
      onClick={onClick}
    >
      <CardHeader
        type={type}
        releasedDate={data.releasedDate}
        brandname={data.brandname}
        headerText="Adot wears Ochre. Meet No. 1 Pencil! Smooth, soft, longwearing eyeliner that glides on in..."
        adDays={16}
      />
      <CardMedia type={type} />
      <CardFooter commentCount={21} likeCount={16} shareCount={27} />
    </div>
  );
};

export default CommonCard;

interface IProps {
  parentStyle?: CSSProperties;
  type: "tiktok" | "facebook" | "pintrest";
  onClick?: () => void;
}

const data = {
  brandname: "Apple",
  releasedDate: new Date(),
};
