import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";

export default function Header() {
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 15, md: 20 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "red.400",
                zIndex: -1,
              }}
            >
              Dina Eissa
            </Text>
            <br />
            <Text as={"span"} color={"red.400"}>
              Frontend Developer
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            I’m a front-end developer, and I create fun, innovative, accessible,
            and fast websites. I try to leave every bit of code I touch more
            readable, modular, performant and accessible than I found it.
          </Text>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={"300px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={
                "https://media.istockphoto.com/id/500954400/photo/computer-coffee-mug-telephone-on-black-wood-table-sun-rising.jpg?s=612x612&w=0&k=20&c=AWZgqePKVZQ30tKTRtZQlrWSd1ycwGpVtr1tRbDmn8o="
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
