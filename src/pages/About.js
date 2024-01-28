import { Heading, Text, HStack } from "@chakra-ui/react";

import "../styles/About.css";

function About() {
  return (
    <div id="Body">
      <Heading p="30px">About Us</Heading>
      <HStack my="10">
        <Text p="30px" fontSize={"xl"}>
          Finnow is a platform intended to assist users with their financial
          journey. It utilizes an LLM that gives users advice based on their
          inputted financial data, making recommendations on savings,
          investments, income, and expenditures. The goal of our platform is to
          support financial literacy and lower the barrier of entry into the
          financial world.
        </Text>
      </HStack>
    </div>
  );
}

export default About;
