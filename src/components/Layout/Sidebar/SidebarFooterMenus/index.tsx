import React from "react";
import { Divider, Text } from "@chakra-ui/react";
import styles from "./SidebarFooterMenus.module.css";
import { BsFacebook } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import { GrPinterest } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import User from "../User";
import {SiTiktok} from "react-icons/si";

const SidebarFooterMenus = () => {
  return (
    <React.Fragment>
      <div className={styles.sidebarFooerMenusContainer}>
        <UseFullLinks />
      </div>
    </React.Fragment>
  );
};

export default SidebarFooterMenus;

const UseFullLinks = () => {
  const LinkArr = [
    {
      name: "Facebook Ads",
      path: "#",
      icon: <BsFacebook fontSize="1.2rem" color="black" />,
    },
    {
      name: "Tik Tok",
      path: "#",
      icon: <SiTiktok fontSize="1.2rem" color="black" />,
    },
    {
      name: "Pinterest",
      path: "#",
      icon: <GrPinterest fontSize="1.2rem" color="black" />,
    },
  ];

  return (
    <React.Fragment>
      <Text color="#9CA0A8" fontSize="12px" fontFamily="DM Sans" fontWeight={500} mb={4}>
        USEFULL LINK
      </Text>
      {LinkArr?.map((link: any, id: number) => {
        return (
          <div className={styles.useFullLinksContainer} key={id}>
            <div className={styles.linksBlock}>
              {link?.icon}
              <Text fontSize="16px" fontFamily="DM Sans" fontWeight={400}>{link?.name}</Text>
              <FiArrowUpRight  fontSize="1.2rem" color="black" />
            </div>
          </div>
        );
      })}
      <div className={styles.divider}></div>
      <div className={styles.useFullLinksContainer}>
        <div className={styles.linksBlock}>
          <FcGoogle fontSize="1.8rem" color="black" />
          <Text fontSize="16px" fontFamily="DM Sans" fontWeight={400}>Google Extenssion</Text>
          <FiArrowUpRight fontSize="1.2rem" color="black" />
        </div>
      </div>
      <User />
    </React.Fragment>
  );
};

