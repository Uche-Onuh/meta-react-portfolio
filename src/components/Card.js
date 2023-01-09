import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <VStack>
      <Text bg="white" color="black" borderRadius="10">
        <Image src={imageSrc} borderRadius="10" />
        <Heading as="h5" size="sm" mt="3" pl="3" pr="3">
          {title}
        </Heading>
        <Text mt="3" pl="3" pr="3">
          {description}
        </Text>

        <HStack spacing={2} mt="3" mb="3" pl="3" pr="3">
          <Heading size="sm">See More</Heading>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </Text>
    </VStack>
  );
};

export default Card;
