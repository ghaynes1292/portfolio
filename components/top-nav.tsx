import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { ColorModeSwitcher } from "./color-mode-switcher";
// import UserIcon from "assets/images/user_icon.png";
import NextLink from "next/link";

const webLinks = [
  { name: "/", path: '/' },
  { name: "About", path: "/about" },
  // { name: "Tech Stack", path: "/tech-stack" },
  // { name: "Achievements", path: "/achievements" }
];

interface NavLinkProps {
  index?: number;
  name: string;
  path: string;
  onClose: () => void;
}
  
  const NavLink = (props: NavLinkProps) => {
    const link = {
      bg: useColorModeValue("gray.200", "gray.900"),
      color: useColorModeValue("blue.500", "blue.200")
    };
    return (
      <NextLink href={props.path} passHref>
        <Link
          px={2}
          py={1}
          rounded={"md"}
          _hover={{
            textDecoration: "none",
            bg: link.bg
          }}
          _activeLink={{
            color: link.color
          }}
          onClick={() => props.onClose()}
        >
          {props.name}
        </Link>
      </NextLink>
    );
  };
  
  export default function TopNav() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <>
        <Box
          bg={useColorModeValue("white", "gray.700")}
          px={4}
          boxShadow={"lg"}
          position="fixed"
          width="100%"
          zIndex="55"
        >
          <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            w={["90%", "85%", "80%"]}
            maxW={800}
            mx="auto"
          >
            <IconButton
              size={"md"}
              icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
              aria-label={"Open Menu"}
              display={["inherit", "inherit", "none"]}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={"center"}>
              {/* <Box>
                <NextLink href={"/"} passHref>
                  <Avatar
                    as={Link}
                    size={"sm"}
                    // src={UserIcon}
                    src={"https://avatars2.githubusercontent.com/u/37842853?v=4"}
                  />
                </NextLink>
              </Box> */}
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {webLinks.map((link, index) => (
                  <NavLink
                    key={index}
                    name={link.name}
                    path={link.path}
                    onClose={onClose}
                  />
                ))}
              </HStack>
            </HStack>
            <Flex alignItems={"center"}>
              <ColorModeSwitcher justifySelf="flex-end" />
            </Flex>
          </Flex>
        </Box>
      </>
    );
  }
  