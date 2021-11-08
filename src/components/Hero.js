import React from "react";
import {
  Box,
  Text,
  Image,
  Center,
  Button
} from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box backgroundColor="#FFA8E2" w="100%" position="relative" h="70vh">
      <Image
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/diy-bath-bomb-recipe-1589827389.jpg?crop=0.502xw:1.00xh;0.498xw,0&resize=480:*"
        h="100%"
        m="auto"
        objectFit="contain"
        objectPosition={["top", "center"]}
      />
      <Text
        className="tracking-in-expand"
        position="absolute"
        bottom="20%"
        w="100%"
        textAlign="center"
        color="white"
        fontWeight="bold"
        fontSize="4rem"
      >
        Introducing Bath Bombs
      </Text>
      <Center>
        <Button
          w="10rem"
          backgroundColor="#FF38BD"
          color="white"
          _hover={{ opacity: "70%" }}
          position="absolute"
          bottom="10%"
        >
          Shop Now
        </Button>
      </Center>
    </Box>
  );
};

export default Hero;
