import {
  HStack,
  Text,
  useColorModeValue,
  IconButton,
  Tag,
  Link,
  Flex,
  Box,
  VStack,
  SimpleGrid
} from "@chakra-ui/react";
import Image from 'next/image'
import { AnimateSharedLayout, motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import PageLayout from "components/page-layout";
import Header from "components/header";
import { cardMotion } from "components/motion";
import { projectsList } from "site-config";
import { getTagColor } from "styles/theme";
import { PageSlideFade } from "components/transitions";

const ANIMATION_DURATION = 0.5;
const ORANGE = "#ff9400";

interface ProjectCardProps {
  title: string;
  description: string;
  src: StaticImageData;
  link: string;
  codeLink: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  src,
  link,
  codeLink,
  technologies
}) => {
  const textColor = useColorModeValue("gray.500", "gray.200");

  return (
    <motion.div {...cardMotion}>
      <HStack
        p={4}
        bg={useColorModeValue("white", "gray.800")}
        rounded="xl"
        borderWidth="1px"
        borderColor={useColorModeValue("gray.100", "gray.700")}
        w="100%"
        h="100%"
        textAlign="left"
        align="start"
        spacing={4}
        cursor="pointer"
        _hover={{ shadow: "lg" }}
      >
        <Image
          src={src}
          alt={title}
          width={64}
          height={64}
          layout="fixed"
        />
        <VStack align="start" justify="flex-start">
          <VStack spacing={0} align="start">
            <HStack>
              {codeLink && (
                <IconButton
                as={Link}
                isExternal
                href={codeLink}
                aria-label="github"
                colorScheme="gray"
                icon={<FaGithub />}
                variant="ghost"
                size="lg"
                isRound={true}
              />
              )}
              <Text
                as={Link}
                href={link}
                fontWeight="bold"
                fontSize="md"
                noOfLines={1}
                onClick={e => e.stopPropagation()}
                isExternal
              >
                {title}
              </Text>
              <HStack spacing="1">
                {technologies.map((tech, index) => (
                  <Tag key={index} size="sm" colorScheme={getTagColor(tech)}>
                    {tech}
                  </Tag>
                ))}
              </HStack>
            </HStack>
            <Text fontSize="sm" color={textColor} noOfLines={{ base: 2 }}>
              {description}
            </Text>
          </VStack>
        </VStack>
      </HStack>
    </motion.div>
  );
};

function Home() {
  return (
    <PageLayout
      title="Home"
      description="Welcome"
    >
      <PageSlideFade>
        <Flex direction="column" align="center">
          <Flex direction={["column", "column", "row"]}>
            <motion.div
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
              }}>
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
            </motion.div>
          </Flex>
          <motion.div
            initial={{
              translateY: 80,
              opacity: 0,
            }}
            animate={{
              translateY: 0,
              opacity: 1,
              transition: {
                delay: ANIMATION_DURATION - 0.1,
                duration: ANIMATION_DURATION
              }
            }}>
            <Box mt={10}>
              <VStack align="start" spacing={8}>
                <Header underlineColor={ORANGE} mt={0} mb={0}>
                  Projects
                </Header>
                <AnimateSharedLayout>
                  <SimpleGrid columns={1} spacing={4} mt={5} w="100%">
                    {projectsList.map((project, index) => (
                      <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.desc}
                        src={project.logo}
                        link={project.link}
                        codeLink={project.codeLink}
                        technologies={project.technologies}
                      />
                    ))}
                  </SimpleGrid>
                </AnimateSharedLayout>
              </VStack>
            </Box>
          </motion.div>
        </Flex>
      </PageSlideFade>
    </PageLayout>
  );
};

export default Home;
