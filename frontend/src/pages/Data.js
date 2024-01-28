import { useState } from "react";
import {
  Heading,
  VStack,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";
import "../styles/Error.css";

function Data() {
  // State to store input values
  const [income, setIncome] = useState("");
  const [expenditures, setExpenditures] = useState("");
  const [savings, setSavings] = useState("");

  // Function to handle submission and file writing for income
  const handleIncomeSubmit = () => {
    writeToFile("income.txt", `Annual Income: ${income}`);
  };

  // Function to handle submission and file writing for expenditures
  const handleExpendituresSubmit = () => {
    writeToFile("expenditures.txt", `Annual Expenditures: ${expenditures}`);
  };

  // Function to handle submission and file writing for savings
  const handleSavingsSubmit = () => {
    writeToFile("savings.txt", `Annual Savings: ${savings}`);
  };

  // Generic function to write data to a text file
  const writeToFile = (fileName, data) => {
    const blob = new Blob([data], { type: "text/plain" });

    // Create an anchor element with a download attribute
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;

    // Append the link to the body and click it programmatically
    document.body.appendChild(link);
    link.click();

    // Clean up by removing the link
    document.body.removeChild(link);
  };

  return (
    <div id="Body">
      <Heading p="30px">Data</Heading>
      {/* Income input */}
      <VStack p="30px" spacing="20px">
        <Text fontSize={"xl"}>Enter Annual Income</Text>
        <Input
          placeholder="Type your Income here"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />
        <Button colorScheme="blue" onClick={handleIncomeSubmit}>
          Submit
        </Button>
        <br />
      </VStack>
      {/* Expenditures input */}
      <VStack p="30px" spacing="20px">
        <Text fontSize={"xl"}>Enter Annual Expenditures</Text>
        <Input
          placeholder="Type your Expenditures here"
          value={expenditures}
          onChange={(e) => setExpenditures(e.target.value)}
        />
        <Button colorScheme="blue" onClick={handleExpendituresSubmit}>
          Submit
        </Button>
        <br />
      </VStack>
      {/* Savings input */}
      <VStack p="30px" spacing="20px">
        <Text fontSize={"xl"}>Enter Annual amount put into Savings</Text>
        <Input
          placeholder="Type your Savings here"
          value={savings}
          onChange={(e) => setSavings(e.target.value)}
        />
        <Button colorScheme="blue" onClick={handleSavingsSubmit}>
          Submit
        </Button>
        <br />
      </VStack>
    </div>
  );
}

export default Data;
