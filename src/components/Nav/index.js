import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box color={"red.400"} fontFamily="NewYork">
              <Heading
                lineHeight="tall"
                size="md"
                fontFamily="NewYork"
                fontWeight="bold"
                textShadow="1px 1px 1px #662e05"
              >
                {" "}
                Dina Eissa
              </Heading>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Button
                as={"a"}
                fontSize={"sm"}
                fontWeight={400}
                variant={"link"}
                href={"/About"}
              >
                About
              </Button>
              <Button
                as={"a"}
                fontSize={"sm"}
                fontWeight={400}
                variant={"link"}
                href={"/Project"}
              >
                Portfolio
              </Button>
              <Button
                as={"a"}
                fontSize={"sm"}
                fontWeight={400}
                variant={"link"}
                href={"/Contact"}
              >
                Contact
              </Button>
              <Button
                as={"a"}
                fontSize={"sm"}
                fontWeight={400}
                variant={"link"}
                href={"/Resume"}
              >
                Resume
              </Button>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.18169-9/12301466_10153798821365799_8603215130777176318_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=SPa_dk1zlLwAX92O_mx&_nc_ht=scontent-sjc3-1.xx&oh=00_AfAfeiuSV-gIbca42O_YiT_Df_IMc7_gj45bVlgIiF6B1Q&oe=63B12545"
                  }
                />
              </MenuButton>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Button
                as={"a"}
                fontSize={"sm"}
                fontWeight={400}
                variant={"link"}
                href={"/"}
              >
                About
              </Button>
              <Button
                as={"a"}
                fontSize={"sm"}
                fontWeight={400}
                variant={"link"}
                href={"/Project"}
              >
                Portfolio
              </Button>
              <Button
                as={"a"}
                fontSize={"sm"}
                fontWeight={400}
                variant={"link"}
                href={"/Contact"}
              >
                Contact
              </Button>
              <Button
                as={"a"}
                fontSize={"sm"}
                fontWeight={400}
                variant={"link"}
                href={"/Resume"}
              >
                Resume
              </Button>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
