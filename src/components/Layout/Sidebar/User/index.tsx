import Image from "next/image";
import React from "react";
import styles from "./User.module.css";
import User from "../../../../../public/user.svg";
import { Text } from "@chakra-ui/react";

const index = () => {
  return (
    <div className={styles.userContainer}>
      <Image className={styles.userImage} src={User} alt="user" />
      <div className={styles.userDetailsContainer}>
        <Text fontSize="14px" fontFamily="DM Sans" fontWeight={400}>
          Guy Haswkins
        </Text>
        <Text fontSize="12px" fontFamily="DM Sans" fontWeight={400} color="#9CA0A8">
          Guy_Haswkins@gmail.com
        </Text>
      </div>
    </div>
  );
};

export default index;
