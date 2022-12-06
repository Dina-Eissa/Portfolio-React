import React from "react";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Link,
} from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { BsGithub, BsPerson } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";

// Here we import a helper function that will check if the email is valid
import { validateEmail } from "../../utils/helpers";

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and message
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!userName) {
      setErrorMessage("Name is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the message is not valid. If so, we set an error message regarding the message.
    }

    if (!validateEmail(email) || !userName) {
      setErrorMessage("Email is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the message is not valid. If so, we set an error message regarding the message.
    }

    if (!setMessage(message)) {
      setErrorMessage(`Message is required.`);
      return;
    }

    // If everything goes according to plan, we want to clear out the input after a successful submission.
    setUserName("");
    setMessage("");
    setEmail("");
  };

  return (
    <Container maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="gray.100"
          color="#0B0E3F"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Box textAlign={"center"}>
              <Heading>Contact</Heading>
              <Text my={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                Fill up the form below to contact
              </Text>
            </Box>
            <Wrap column={1}>
              <WrapItem w="100%" justifyContent="center">
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input
                            type="text"
                            size="md"
                            value={userName}
                            name="userName"
                            onChange={handleInputChange}
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input
                            type="email"
                            size="md"
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          placeholder="message"
                          value={message}
                          name="message"
                          onChange={handleInputChange}
                          type="message"
                        />
                      </FormControl>
                      <FormControl id="name">
                        <Button
                          rounded={"full"}
                          size={"lg"}
                          fontWeight={"normal"}
                          px={6}
                          colorScheme={"red"}
                          bg={"red.400"}
                          _hover={{ bg: "red.500" }}
                          width={"full"}
                          onClick={handleFormSubmit}
                        >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                    {errorMessage && (
                      <div>
                        <p className="error-text">{errorMessage}</p>
                      </div>
                    )}
                  </Box>
                </Box>
              </WrapItem>
              <WrapItem justifyContent="center" w="100%">
                <HStack spacing={5} px={5} alignItems="flex-start">
                  <Link href="https://www.linkedin.com/in/dinameissa/">
                    <IconButton
                      aria-label="Linkedin"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "red.400", color: "white" }}
                      icon={<FaLinkedin size="28px" />}
                    />
                  </Link>
                  <Link href="https://github.com/Dina-Eissa">
                    <IconButton
                      as="Link"
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "red.400", color: "white" }}
                      icon={<BsGithub size="28px" />}
                    />
                  </Link>
                  <Link href="mailto:dinamshawky@gmail.com">
                    <IconButton
                      aria-label="Email"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "red.400", color: "white" }}
                      icon={<MdOutlineEmail size="28px" />}
                    />
                  </Link>
                </HStack>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}

export default Contact;
