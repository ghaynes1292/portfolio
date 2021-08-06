import {
  Flex,
  Box,
  Text,
  Stack,
  Link,
  UnorderedList,
  ListItem,
  useColorModeValue,
  VStack,
  SimpleGrid
} from "@chakra-ui/react";
import { AnimateSharedLayout } from "framer-motion";
import NextLink from 'next/link'
import Header from "components/header";
import Card from "components/card";
import { MotionBox, MotionFlex } from "components/motion";
import { projectsList } from "site-config";

const ANIMATION_DURATION = 0.5;
const ORANGE = "#ff9400";

function Home() {
  return (
    <Flex direction="column" align="center">
      <Flex direction={["column", "column", "row"]}>
        <MotionFlex
          ml={["auto", "auto", 16]}
          m={["auto", "initial"]}
          w={["90%", "85%", "80%"]}
          maxW="800px"
          opacity="0"
          justify="center"
          direction="column"
          initial={{
            opacity: 0,
            translateX: 150
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              duration: ANIMATION_DURATION
            }
          }}
        >
          <Header underlineColor={ORANGE} mt={0}>
            Hey! 👋
          </Header>
          <Box as="h2" fontSize="2xl" fontWeight="400" textAlign="left">
            My name is&nbsp;
            <Box as="strong" fontWeight="600">
              Gavin
            </Box>
            &nbsp;and I&apos;m a&nbsp;
            <Box as="span" whiteSpace="nowrap">
              Full Stack Developer&nbsp;
            </Box>
            living in&nbsp;
            <Box as="span" whiteSpace="nowrap">
            Portland, OR
            </Box>
          </Box>
          <Box as="h2" fontSize="2xl" fontWeight="400" mt={5} textAlign="left">
            This is my personal site.
          </Box>
        </MotionFlex>
      </Flex>
      <MotionBox
        w="100%"
        opacity="0"
        initial={{
          translateY: 80
        }}
        animate={{
          translateY: 0,
          opacity: 1,
          transition: {
            delay: ANIMATION_DURATION - 0.1,
            duration: ANIMATION_DURATION
          }
        }}
      >
        <Box mt={10}>
          {/* <Stack
            mb={10}
            mx={[0, 0, 10]}
            padding={4}
            align="start"
            borderLeft="4px solid"
            borderColor={"#53c8c4"}
            color={"whatsapp"}
            _hover={{ shadow: "lg" }}
            backgroundColor={useColorModeValue("gray.100", "#1e2533")}
            rounded="sm"
            fontSize="md"
          >
            <Text textAlign="center" color="#53c8c4" fontWeight="bold">
              Highlights
            </Text>
            <UnorderedList textAlign="left" paddingLeft={5} m={0}>
              <ListItem>
                <NextLink href={'/about'} passHref>
                  <Link>
                    About
                </Link>
                </NextLink>
              </ListItem>
              <ListItem>
                <NextLink href={'/tech-stack'} passHref>
                  <Link>
                    Tech Stack
                </Link>
                </NextLink>
              </ListItem>
              <ListItem>
                <NextLink href={'/achievements'} passHref>
                  <Link>
                    Achievements
                </Link>
                </NextLink>
              </ListItem>
            </UnorderedList>
          </Stack> */}
          <VStack align="start" spacing={8}>
            <Header underlineColor={ORANGE} mt={0} mb={0}>
              Projects
            </Header>
            <AnimateSharedLayout>
              <SimpleGrid columns={1} spacing={4} mt={5} w="100%">
                {projectsList.map((project, index) => (
                  <MotionBox whileHover={{ y: -5 }} key={index}>
                    <Card
                      title={project.title}
                      description={project.desc}
                      src={project.logo}
                      link={project.link}
                      technologies={project.technologies}
                    />
                  </MotionBox>
                ))}
              </SimpleGrid>
            </AnimateSharedLayout>
          </VStack>
        </Box>
      </MotionBox>
    </Flex>
  );
};

export default Home;
