import { useState } from "react";
import {
  Icon,
  VStack,
  HStack,
  Text,
  Button,
  ButtonGroup,
  useColorModeValue,
  SimpleGrid,
  Center,
  Box,
  Link,
} from "@chakra-ui/react";
import NextLink from 'next/link';
import Image from 'next/image';
import { AiTwotoneThunderbolt, AiOutlineCloudServer } from "react-icons/ai";
import { BiDesktop } from "react-icons/bi";
import { GiSpiderWeb } from "react-icons/gi";
import Header from "components/header";
import { cardMotion, cardContainerMotion } from "components/motion";
import { PageSlideFade } from "components/transitions";
import PageLayout from "components/page-layout";
import { skills } from "site-config";

import { motion } from 'framer-motion'

function SkillCard({ name, image, link, description }) {
  return (
    <motion.div {...cardMotion}>
      <NextLink href={link} passHref>
        <Link isExternal>
          <HStack
            p={4}
            bg={useColorModeValue("white", "gray.800")}
            rounded="xl"
            borderWidth="1px"
            borderColor={useColorModeValue("gray.100", "gray.700")}
            w="100%"
            textAlign="left"
            align="start"
            spacing={4}
            _hover={{ shadow: "md" }}
          >
            <Box
              rounded="lg"
              p={2}
              position="relative"
              overflow="hidden"
              lineHeight={0}
              boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
            >
              <Image
                src={image}
                height={26}
                width={26}
                layout="fixed"
              />
            </Box>
            <VStack
              align="start"
              justify="flex-start"
              spacing={1}
              maxW="lg"
              h="100%"
            >
              <VStack spacing={0} align="start" flexGrow={1}>
                <Text fontWeight="bold" fontSize="md" noOfLines={2}>
                  {name}
                </Text>
                <Text
                  fontSize="sm"
                  color={useColorModeValue("gray.500", "gray.200")}
                >
                  {description}
                </Text>
              </VStack>
            </VStack>
          </HStack>
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
        <VStack spacing={8}>
          <Center as="section" w="80%">
            <VStack>
              <Header mt={0} mb={1}>
                Tech Stack
              </Header>
              <Text
                fontSize={"xl"}
                color={useColorModeValue("gray.500", "gray.200")}
                maxW="lg"
                textAlign="center"
              >
                These are the tools I use
              </Text>
              <ButtonGroup colorScheme="gray" variant="solid" spacing="6">
                <Button
                  colorScheme={filter === 'all' ? "teal" : undefined}
                  onClick={() => handleFilterSelect('all')}
                  leftIcon={<Icon as={AiTwotoneThunderbolt} />}
                >
                  All
                </Button>
                <Button
                  colorScheme={filter === 'development' ? "red" : undefined}
                  onClick={() => handleFilterSelect('development')}
                  leftIcon={<Icon as={BiDesktop} />}
                >
                  Web Development
                </Button>
                <Button
                  colorScheme={filter === 'design' ? "green" : undefined}
                  onClick={() => handleFilterSelect('design')}
                  leftIcon={<Icon as={GiSpiderWeb} />}
                >
                  Web Design
                </Button>
                <Button
                  colorScheme={filter === 'devops' ? "blue" : undefined}
                  onClick={() => handleFilterSelect('devops')}
                  leftIcon={<Icon as={AiOutlineCloudServer} />}
                >
                  Devops
                </Button>
              </ButtonGroup>
              <motion.div {...cardContainerMotion}>
                <SimpleGrid columns={2} spacing={4} mt={8}>
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
            </VStack>
          </Center>
        </VStack>
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
