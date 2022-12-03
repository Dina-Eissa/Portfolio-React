import {
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

export default function socialProfileWithImageHorizontal() {
  return (
    <Center py={6} id="about">
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "90%" }}
        height={{ sm: "476px", md: "20rem" }}
        direction={{ base: "column", md: "row" }}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
      >
        <SimpleGrid columns={{ base: 1 }} spacing={5} p={1} pt={10}>
          <Flex justifyContent="center" p={1} pt={10} flex={1}>
            <Image
              height="100px"
              width="100px"
              borderRadius="lg"
              src={
                "https://media-exp1.licdn.com/dms/image/C5603AQFGhcwAhhl6NQ/profile-displayphoto-shrink_200_200/0/1517431875863?e=1675296000&v=beta&t=0JLha0AQsMf34uofBcoy9uYkY0cIxmmQsDV4422FWG8"
              }
            />
          </Flex>
        </SimpleGrid>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="left"
          p={1}
          pt={2}
        >
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            About Me
          </Heading>

          <Text
            textAlign={"left"}
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
            py={2}
          >
            I have five years of hands-on experience efficiently design and
            coding websites and applications using modern HTML, CSS, and
            JavaScript. Building state-of-the-art, easy to use, user-friendly
            websites and applications is truly a passion of mine. In addition to
            my knowledge base, I actively seek out new technologies and stay up
            to date on industry trends and advancements. This has allowed me to
            stay ahead of the curve and deliver exceptional work to my
            employers, including those I have worked for on a project basis.
          </Text>
        </Stack>
      </Stack>
    </Center>
  );
}
