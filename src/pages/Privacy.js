import { Heading, Text, HStack } from "@chakra-ui/react";

import "../styles/Privacy.css";

function Privacy() {
  return (
    <div id="Body">
      <Heading p="30px">Privacy Policy</Heading>
      <HStack mx="5" my="10">
        <Text p="30px">
        This website collects personal data such as financial data to power our LLM's responses
        </Text>
      </HStack>
    </div>
  );
}

export default Privacy;
