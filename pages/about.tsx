import {
  Box,
  Stack,
  VStack,
  Heading,
  Flex,
  Text,
  Tag,
  useColorMode,
  useColorModeValue,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGraduationCap } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { PageSlideFade } from "components/transitions";
import { cardContainerMotion, cardMotion } from "components/motion";
import { companies, education } from "site-config";
import Header from "components/header";
import PageLayout from "components/page-layout";
import { getTagColor } from "styles/theme";

interface CardProps {
  title: string;
  role: string;
  skills: string[];
  period: string;
  logo: StaticImageData;
  colorMode: string;
  alt?: string;
}

const TURQUOISE = "#06b6d4";

const Card = (props: CardProps) => {
  const { title, role, skills, period, logo, colorMode } = props;
  return (
    <motion.div {...{ ...cardMotion, whileTap: undefined }}>
      <Box
        px={4}
        py={5}
        borderWidth="1px"
        _hover={{ shadow: "lg" }}
        bg={useColorModeValue("white", "gray.800")}
        position="relative"
        rounded="md"
      >
        <Grid
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={2}
        >
          <GridItem rowSpan={2} colSpan={1}>
            <Image
              width={64}
              height={64}
              src={logo}
              placeholder="blur"
            />
          </GridItem>
          <GridItem colSpan={2} rowSpan={2}>
            <Heading
              align="left"
              fontSize="xl"
              color={`mode.${colorMode}.career.text`}
            >
              {title}
            </Heading>
            <Heading
              align="left"
              fontSize="sm"
              color={`mode.${colorMode}.career.subtext`}
            >
              {role}
            </Heading>
          </GridItem>
          <GridItem rowSpan={2} colSpan={1}>
            <Text fontSize={13} color={`mode.${colorMode}.career.subtext`}>
              {period}
            </Text>
          </GridItem>
          <GridItem colSpan={4}>
            <Stack
              spacing={2}
              mt={3}
              isInline
              wrap="wrap"
              alignItems="center"
            >
              {skills.map(skill => (
                <Tag size="sm" padding="1px 3px" key={skill} colorScheme={getTagColor(skill)}>
                  {skill}
                </Tag>
              ))}
            </Stack>
          </GridItem>
        </Grid>
      </Box>
    </motion.div>
  );
};

function About() {
  const { colorMode } = useColorMode();

  return (
    <PageLayout
      title="About"
      description="My educational and professional journey so far"
    >
      <PageSlideFade>
        <Box>
          <motion.div {...cardContainerMotion}>
            <Heading>
              <Flex alignItems="center">
                <Header underlineColor={TURQUOISE} mt={0} mb={0}>
                  Career
                </Header>
                <Stack pl={3}>
                  <Box as={BsFillBriefcaseFill} size="25px" />
                </Stack>
              </Flex>
            </Heading>
            <VStack
              spacing={4}
              marginBottom={6}
              align="left"
              mx={[0, 0, 6]}
              mt={12}
            >
              {companies.map((company, index) => (
                <Card
                  key={index}
                  title={company.title}
                  role={company.role}
                  skills={company.skills}
                  period={company.period}
                  logo={company.logo}
                  colorMode={colorMode}
                />
              ))}
            </VStack>
            <Heading>
              <Flex alignItems="center">
                <Header underlineColor={TURQUOISE} mt={0} mb={0}>
                  Education
                </Header>
                <Stack pl={3}>
                  <Box as={FaGraduationCap} size="25px" />
                </Stack>
              </Flex>
            </Heading>
            <VStack
              spacing={4}
              marginBottom={6}
              align="left"
              mx={[0, 0, 6]}
              mt={12}
            >
              {education.map((institute, index) => (
                <Card
                  key={index}
                  title={institute.title}
                  role={institute.role}
                  skills={institute.skills}
                  period={institute.period}
                  logo={institute.logo}
                  colorMode={colorMode}
                />
              ))}
            </VStack>
          </motion.div>
        </Box>
      </PageSlideFade>
    </PageLayout>
  );
};

export default About;
