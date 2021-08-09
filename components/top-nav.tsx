import {
  Box,
  Flex,
  HStack,
  Link,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./color-mode-switcher";
import NextLink from "next/link";

const webLinks = [
  { name: "/", path: '/' },
  { name: "About", path: "/about" },
  { name: "Tech", path: "/tech" },
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
            <HStack spacing={8} alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={4}
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
  