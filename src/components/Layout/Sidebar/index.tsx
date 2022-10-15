import React from "react";
import styles from "./sidebar.module.css";
import SidebarFooterMenus from "./SidebarFooterMenus";
import SidebarMenus from "./SidebarMenus";
import { IoMdMenu } from "react-icons/io";

const Sidebar = ({ children }: any) => {
  const [isOpen, setIsOpen] = React.useState<any>(false);
  return (
    <React.Fragment>
      <div>
        <div>
          <div
            className={isOpen ? styles.mobileMenuOpen : styles.mobileMenuClose}
          >
            <IoMdMenu
              onClick={() => setIsOpen(!isOpen)}
              fontSize="1.2rem"
              color="black"
            />
          </div>
          {isOpen && (
            <div className={styles.mobileMenuSidebar}>
              <SidebarMenus />
              <SidebarFooterMenus />
            </div>
          )}
        </div>

        <div className={styles.sidrbarRoot}>
          <SidebarMenus />
          <SidebarFooterMenus />
        </div>
        <main className={styles.main}>{children}</main>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
