import { Heading, Text, HStack } from "@chakra-ui/react";

import "../styles/About.css";

function About() {
  return (
    <div id="Body">
      <Heading p="30px">About Us</Heading>
      <HStack mx="5" my="10">
        <Text p="30px">
          With Finnow you can learn anything from the basics of finance to the
          most advanced topics. We help assist our users with their finananical
          journey by providing them with the tools they need to succeed.
        </Text>
      </HStack>
    </div>
  );
}

export default About;
