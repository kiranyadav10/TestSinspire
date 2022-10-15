import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";
import { BiPlusCircle } from "react-icons/bi";
import { BsChatText } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";
import styles from "./cardFooter.module.css";

const CardFooter = ({ commentCount, likeCount, shareCount }: IProps) => {
  return (
    <div className={styles.product_footer_parent}>
      <div className={styles.product_footer_first_section}>
        <div className={styles.product_icon_text_parent}>
          <BsChatText />
          <p>{commentCount}</p>
        </div>

        <div className={styles.product_icon_text_parent}>
          <AiOutlineHeart />
          <p>{likeCount}</p>
        </div>

        <div className={styles.product_icon_text_parent}>
          <RiShareForwardLine
            size={16}
            style={{
              transform: "rotateY(180deg)",
            }}
          />
          <p>{shareCount}</p>
        </div>
      </div>

      <div>
        <Link href="#" passHref>
          <a className={styles.product_footer_second_section}>
            <BiPlusCircle />
            Follow
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CardFooter;

interface IProps {
  commentCount: number;
  likeCount: number;
  shareCount: number;
}
