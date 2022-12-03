import React from "react";
import { SimpleGrid, Flex, Heading } from "@chakra-ui/react";
import ProjectCard from "../components/ProjectOne";
import Fashion from "../assets/image/Fashion.jpg";
import Event from "../assets/image/event.jpg";
import Tech from "../assets/image/4.jpg";
import Weather from "../assets/image/Weather.jpg";
import Airsoup from "../assets/image/airsoup.jpg";

function ProductAddToCart() {
  return (
    <>
      <Flex
        pt={5}
        px={10}
        w="full"
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading size={"lg"}>Portfolio</Heading>
      </Flex>
      <Flex p={10} w="full" alignItems="center" justifyContent="space-between">
        <SimpleGrid columns={{ base: 1, lg: 4, md: 3 }} spacing={20}>
          <ProjectCard
            maxW="md"
            imgPath={Fashion}
            title="Fashion Freaks"
            ghLink="https://github.com/YeshNels/FashionFreaks"
            demoLink=""
          />

          <ProjectCard
            maxW="md"
            imgPath={Event}
            title="Lumivent"
            ghLink="https://github.com/noahwesttech/Group-Event-Planner"
            demoLink="https://lumivent.herokuapp.com/"
          />

          <ProjectCard
            maxW="md"
            imgPath={Weather}
            title="Weather"
            ghLink="https://github.com/Dina-Eissa/weather_dashboard"
            demoLink="https://dina-eissa.github.io/weather_dashboard/"
          />

          <ProjectCard
            maxW="md"
            imgPath={Airsoup}
            title="Airsoup"
            ghLink="https://github.com/pjsherpa/AirSoup"
            demoLink="https://pjsherpa.github.io/AirSoup/"
          />
          <ProjectCard
            maxW="md"
            imgPath={Tech}
            title="Tech Blog"
            ghLink="https://github.com/Dina-Eissa/tech_blog"
            demoLink="https://nameless-shore-20267.herokuapp.com/"
          />
        </SimpleGrid>
      </Flex>
    </>
  );
}
export default ProductAddToCart;
