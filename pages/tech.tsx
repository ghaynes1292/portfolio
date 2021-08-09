import { useState } from "react";
import {
  Icon,
  Text,
  Button,
  useColorModeValue,
  useBreakpointValue,
  SimpleGrid,
  Box,
  Link,
  Wrap,
  WrapItem,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import NextLink from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion'
import { AiTwotoneThunderbolt, AiOutlineCloudServer } from "react-icons/ai";
import { BiDesktop } from "react-icons/bi";
import { GiSpiderWeb } from "react-icons/gi";
import Header from "components/header";
import { cardMotion, cardContainerMotion } from "components/motion";
import { PageSlideFade } from "components/transitions";
import PageLayout from "components/page-layout";
import { skills } from "site-config";

function SkillCard({ name, image, link, description }) {
  const descriptionLength = useBreakpointValue({ base: 5, sm: 5, md: 4, lg: 4 })
  
  return (
    <motion.div {...cardMotion}>
      <NextLink href={link} passHref>
        <Link isExternal>
          <Box
            bg={useColorModeValue("white", "gray.800")}
            rounded="xl"
            borderWidth="1px"
            borderColor={useColorModeValue("gray.100", "gray.700")}
            p={4}
            position="relative"
            overflow="hidden"
            boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
            _hover={{ shadow: "md" }}
          >
            <Grid
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(5, 1fr)"
              gap={1}
            >
              <GridItem rowSpan={1} colSpan={1}>
                <Image
                  src={image}
                  height={26}
                  width={26}
                  layout="fixed"
                />
              </GridItem>
              <GridItem colSpan={4}>
                <Text fontWeight="bold" fontSize="md">
                  {name}
                </Text>
              </GridItem>
              <GridItem colSpan={descriptionLength} colStart={6 - descriptionLength}>
                <Text
                  fontSize="sm"
                  color={useColorModeValue("gray.500", "gray.200")}
                >
                  {description}
                </Text>
              </GridItem>
            </Grid>
          </Box>
        </Link>
      </NextLink>
    </motion.div>
  );
};

const TechStack = ({ skills }) => {
  const [filter, setFilter] = useState('all');
  const skillsList = skills.filter(function (skill) {
    if (filter === 'all') {
      return true;
    }
    return filter === skill.type
  })
  function handleFilterSelect(newFilter) {
    if (filter && filter === newFilter) {
      setFilter('all')
    } else {
      setFilter(newFilter)
    }
  }
  return (
    <PageLayout
      title="Skills"
      keywords="javascript, react, node, typescript, ruby"
    >
      <PageSlideFade>
        <Box>
          <Header mt={0} mb={2}>
            Tech Stack
          </Header>
          <Text
            fontSize={"xl"}
            color={useColorModeValue("gray.500", "gray.200")}
            maxW="lg"
            textAlign="left"
          >
            These are the tools I use
          </Text>
          <Wrap mt={4}>
            <WrapItem>
              <Button
                colorScheme={filter === 'all' ? "teal" : undefined}
                onClick={() => handleFilterSelect('all')}
                leftIcon={<Icon as={AiTwotoneThunderbolt} />}
                size="sm"
              >
                All
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                colorScheme={filter === 'development' ? "red" : undefined}
                onClick={() => handleFilterSelect('development')}
                leftIcon={<Icon as={BiDesktop} />}
                size="sm"
              >
                Web Development
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                colorScheme={filter === 'design' ? "green" : undefined}
                onClick={() => handleFilterSelect('design')}
                leftIcon={<Icon as={GiSpiderWeb} />}
                size="sm"
              >
                Web Design
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                colorScheme={filter === 'devops' ? "blue" : undefined}
                onClick={() => handleFilterSelect('devops')}
                leftIcon={<Icon as={AiOutlineCloudServer} />}
                size="sm"
              >
                Devops
              </Button>
            </WrapItem>
          </Wrap>
          <motion.div {...cardContainerMotion}>
            <SimpleGrid columns={2} spacing={4} mt={4}>
              {skillsList.map((tool, index) => (
                <SkillCard
                  key={index}
                  name={tool.name}
                  description={tool.description}
                  image={tool.image}
                  link={tool.link}
                /> 
              ))}
            </SimpleGrid>
          </motion.div>
        </Box>
      </PageSlideFade>
    </PageLayout>
  );
};

export function getStaticProps() {
  return {
    props: {
      skills
    }
  };
}

export default TechStack;
