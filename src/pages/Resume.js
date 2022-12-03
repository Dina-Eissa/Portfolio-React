import React from "react";
import {
  SimpleGrid,
  Flex,
  Heading,
  IconButton,
  ListIcon,
  ListItem,
  List,
  VStack,
  useColorModeValue,
  Box,
  Text,
  Link,
} from "@chakra-ui/react";
import { FaFileDownload, FaCheckCircle } from "react-icons/fa";
import Resume from "../assets/files/DinaResume.pdf";

function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

function ProductAddToCart() {
  return (
    <>
      <Flex
        py={10}
        px={10}
        w="full"
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading size={"lg"}>
          Resume
          <Link href={Resume} target="_blank" download>
            <IconButton
              as={"Link"}
              aria-label="Link"
              variant="ghost"
              size="md"
              mx={2}
              isRound={true}
              _hover={{ bg: "red.400", color: "white" }}
              icon={<FaFileDownload size="24px" />}
              // href={Resume}
            />
          </Link>
        </Heading>
      </Flex>

      <SimpleGrid
        columns={{ base: 1, lg: 3, md: 3 }}
        spacing={20}
        p={5}
        w="full"
      >
        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: "translate(-50%)" }}
            >
              <Text
                textTransform="uppercase"
                bg={useColorModeValue("red.300", "red.700")}
                px={3}
                py={1}
                color={useColorModeValue("gray.900", "gray.300")}
                fontSize="sm"
                fontWeight="600"
                rounded="xl"
              >
                Front-end Skills
              </Text>
            </Box>

            <VStack
              bg={useColorModeValue("gray.50", "gray.700")}
              py={4}
              borderBottomRadius={"xl"}
            >
              <List spacing={3} textAlign="left" px={3}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  HTML
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  CSS
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  JavaScript
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Bootstrap
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Bulma
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  GIT
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  React
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Chakra UI
                </ListItem>
              </List>
            </VStack>
          </Box>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: "translate(-50%)" }}
            >
              <Text
                textTransform="uppercase"
                bg={useColorModeValue("red.300", "red.700")}
                px={3}
                py={1}
                color={useColorModeValue("gray.900", "gray.300")}
                fontSize="sm"
                fontWeight="600"
                rounded="xl"
              >
                Back-end Skills
              </Text>
            </Box>

            <VStack
              bg={useColorModeValue("gray.50", "gray.700")}
              py={4}
              borderBottomRadius={"xl"}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Node.js
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Express
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  JavaScript
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Object Oriented Programming (OOP)
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Object-Relational Mapping(ORM)
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Model-View-Controller (MVC)
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  NoSQL
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  MongoDB
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  MERN
                </ListItem>
              </List>
            </VStack>
          </Box>
        </PriceWrapper>
      </SimpleGrid>
    </>
  );
}
export default ProductAddToCart;
