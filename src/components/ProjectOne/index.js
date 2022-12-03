import React from "react";
import {
  Card,
  CardFooter,
  Image,
  CardHeader,
  Heading,
  IconButton,
  HStack,
  Link,
} from "@chakra-ui/react";
import { FaGithub, FaLink } from "react-icons/fa";

function ProjectCard(props) {
  return (
    <Card maxW="md">
      <CardHeader>
        <Heading size={"md"}> {props.title}</Heading>
      </CardHeader>
      <Image objectFit="cover" src={props.imgPath} alt={props.title} h="70%" />

      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        <HStack spacing={5} px={5} alignItems="flex-start">
          <Link href={props.ghLink} target="_blank">
            <IconButton
              aria-label="github"
              variant="ghost"
              size="md"
              isRound={true}
              _hover={{ bg: "red.400", color: "white" }}
              icon={<FaGithub size="24px" />}
            />
          </Link>
          <Link href={props.demoLink} target="_blank">
            <IconButton
              aria-label="Link"
              variant="ghost"
              size="md"
              isRound={true}
              _hover={{ bg: "red.400", color: "white" }}
              icon={<FaLink size="24px" />}
            />
          </Link>
        </HStack>
      </CardFooter>
    </Card>
  );
}
export default ProjectCard;
