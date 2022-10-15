import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { BsGrid3X3 } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { IoAddSharp } from "react-icons/io5";
import logo from "../../../../../public/logo.svg";
import Folder from "../folder";
import styles from "./sidebarMenus.module.css";

const SidebarMenus = () => {
  const [open, setOpen] = React.useState<any>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const folderArr = [
    {
      name: "Default Folder",
      path: "#",
      subMenus: [
        {
          name: "File1",
          path: "#",
        },
        {
          name: "file2",
          path: "#",
        },
        {
          name: "file3",
          path: "#",
        },
      ],
    },
    {
      name: "Default Folder2",
      path: "#",
      subMenus: [
        {
          name: "File1",
          path: "#",
        },
        {
          name: "file2",
          path: "#",
        },
        {
          name: "file3",
          path: "#",
        },
      ],
    },
    {
      name: "Default Folder3",
      path: "#",
      subMenus: [
        {
          name: "File1",
          path: "#",
        },
        {
          name: "file2",
          path: "#",
        },
        {
          name: "file3",
          path: "#",
        },
      ],
    },
  ];
  return (
    <React.Fragment>
      <div className={styles.menuContainer}>
        <div className={styles.logoContainer}>
          <Image
            src={logo}
            alt="logo"
            className={styles.logo}
            width="100px"
            height="30px"
          />
        </div>
        <div className={styles.librariesContainer}>
          <BsGrid3X3 color="white" fontSize="1.2em" />
          <Text
            fontSize="16px"
            fontFamily="DM Sans"
            fontWeight={500}
            color="white"
          >
            Library
          </Text>
        </div>
        <div className={styles.serachContainer}>
          <FiSearch color="black" fontSize="1.2rem" />
          <Text
            fontSize="16px"
            fontFamily="DM Sans"
            fontWeight={400}
            color="black"
          >
            Discovery Community
          </Text>
        </div>

        <div className={styles.folderContauner}>
          <Text
            fontSize="12px"
            fontStyle="normal"
            fontFamily="DM Sans"
            fontWeight={500}
            color="#9CA0A8"
          >
            FOLDERS
          </Text>
          <IoAddSharp
            onClick={onOpen}
            fontSize="1.2rem"
            color="#9CA0A8"
            className={styles.folderAddIcon}
          />
        </div>
        {folderArr.map((folderData: any, id: number) => {
          return (
            <React.Fragment key={id}>
              <Folder folderData={folderData} />
            </React.Fragment>
          );
        })}
      </div>
      {/* <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Folder</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Lorem ipsum dolor sit amet.</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </React.Fragment>
  );
};

export default SidebarMenus;
