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
          <Text fontSize={"xl"}>Enter Annual Income</Text>
          <Input placeholder="Type your Income here" />
          <Button colorScheme="blue">Submit</Button>
          <br />
        </VStack>
        <VStack p="30px" spacing="20px">
          <Text fontSize={"xl"}>Enter Annual Expenditures</Text>
          <Input placeholder="Type your Expenditures here" />
          <Button colorScheme="blue">Submit</Button>
          <br />
        </VStack>
        <VStack p="30px" spacing="20px">
          <Text fontSize={"xl"}>Enter Annual amount put into Savings</Text>
          <Input placeholder="Type your Savings here" />
          <Button colorScheme="blue">Submit</Button>
          <br />
        </VStack>
        <VStack p="30px" spacing="20px">
          <Text fontSize={"xl"}>Enter Annual Expenses</Text>
          <Input placeholder="Type your question here" />
          <Button colorScheme="blue">Submit</Button>
          <br />
        </VStack>
      </div>
      
    );
  }
  
  export default Data;