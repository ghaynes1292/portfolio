import * as React from "react";
import {
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Tag,
  Link,
} from "@chakra-ui/react";
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion";
import { getTagColor } from "styles/theme";

interface ProjectCardProps {
  title: string;
  description: string;
  src: StaticImageData;
  link: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  src,
  link,
  technologies
}) => {
  const textColor = useColorModeValue("gray.500", "gray.200");

  return (
    <motion.div layout>
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
        />
        <VStack align="start" justify="flex-start">
          <VStack spacing={0} align="start">
            <motion.div layout>
              <HStack>
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
            </motion.div>
            <AnimatePresence>
              <motion.div
                layout
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
              >
                <Text fontSize="sm" color={textColor} noOfLines={{ base: 2 }}>
                  {description}
                </Text>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
              >
              </motion.div>
            </AnimatePresence>
          </VStack>
        </VStack>
      </HStack>
    </motion.div>
  );
};

export default ProjectCard;
