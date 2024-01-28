import { Flex, Link, Spacer, Text, Box, Tooltip } from "@chakra-ui/react";
import "../styles/Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";



function Footer() {
  return (
    <div id="Footer">
      <Flex p={5} mt={10} bg="blue.900" color="white" gap="5" alignItems='center'>
        <Text p="1">© 2024 Finnow</Text>
        <FaInstagram />
        <Link href="https://github.com/SriramGaddam5/Finnow" isExternal>
        <FaYoutube />
        </Link>
        <Spacer/>
        <Spacer/>
        <Tooltip label="Our Privacy Policy" rounded="lg">
          <Link href="/privacy" isExternal>
          <Text p="1">Privacy Policy</Text>
          </Link>
        </Tooltip>
        <Tooltip label="Check out the GitHub" rounded="lg">
          <Link href="https://github.com/SriramGaddam5/Finnow" isExternal>
            <Box
              px="2"
              py="1"
              rounded="full"
              bg="white"
              color="blue.900"
              _hover={{ background: "blue.50", transform: "scale(0.99)" }}
              _active={{ background: "blue.100", transform: "scale(1.01)" }}>
              GitHub
            </Box>
          </Link>
        </Tooltip>
      </Flex>
    </div>
  );
}

export default Footer;
