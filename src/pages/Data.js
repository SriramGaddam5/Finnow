import {
    Heading,
    VStack,
    Text,
    Input,
    Button,
    Textarea,
  } from "@chakra-ui/react";
  import "../styles/Error.css";
  
  function Data() {
    return (
      <div id="Body">
        <Heading p="30px">Data</Heading>
        <VStack p="30px" spacing="20px">
          <Text fontSize={"xl"}>Ask your questions here</Text>
          <Input placeholder="Type your question here" />
          <Button colorScheme="blue">Submit</Button>
          <br />
          <Textarea isDisabled placeholder="Output" />
        </VStack>
      </div>
    );
  }
  
  export default Data;