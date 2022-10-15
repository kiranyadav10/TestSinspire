import { Text } from "@chakra-ui/react";
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { MdFolderOpen } from "react-icons/md";
import styles from "../SidebarMenus/sidebarMenus.module.css";

const Folder = (folderData: any) => {
  const [open, setOpen] = React.useState<any>(false);
  return (
    <React.Fragment>
      {folderData?.folderData?.subMenus ? (
        <React.Fragment>
          <div className={styles.folderContainer}>
            <div className={styles.folderConatinerFirst}>
              <MdFolderOpen fontSize="1.2rem" color="#000000" />
              <Text fontSize="16px" fontWeight={400} fontFamily="DM Sans" color="#000000" textTransform="capitalize">
                {folderData?.folderData.name}
              </Text>
            </div>
            <FaAngleRight
              onClick={() => setOpen(!open)}
              className={open ? styles.openToogle : styles.toogleMenuButton}
              fontSize="1.2rem"
              color="#000000"
            />
          </div>
          <div className={open ? styles.openSubMenus : styles.closeSubMenus}>
            <div style={{ marginLeft: "50px" }}>
              {folderData.folderData.subMenus.map((child: any, childIndex: any) => (
                <React.Fragment key={childIndex}>
                  <Folder folderData={child} />
                </React.Fragment>
              ))}
            </div>
          </div>
        </React.Fragment>
      ) : (
        <div>{folderData?.folderData?.name}</div>
      )}
    </React.Fragment>
  );
};

export default Folder;
