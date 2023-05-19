import { Box, Flex, Text, ChakraProvider, IconButton, Link } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import theme from "../chakra.config";

export default function Footer() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        bg="#f58024" // Update background color to Hermes orange (#f58024)
        color="white"
        padding="10px"
        width="100%"
      >
        <Flex justify="space-between" align="center">
          <Text fontSize="sm" fontWeight="bold">
            &copy; 2023 Spektrer
          </Text>
          <Flex>
            <Link href="#" isExternal>
              <IconButton
                aria-label="Instagram"
                icon={<FaInstagram />}
                colorScheme="whiteAlpha"
                variant="ghost"
                fontSize="20px"
                mr={2}
              />
            </Link>
            <Link href="#" isExternal>
              <IconButton
                aria-label="Twitter"
                icon={<FaTwitter />}
                colorScheme="whiteAlpha"
                variant="ghost"
                fontSize="20px"
                mr={2}
              />
            </Link>
            <Link href="#" isExternal>
              <IconButton
                aria-label="Facebook"
                icon={<FaFacebook />}
                colorScheme="whiteAlpha"
                variant="ghost"
                fontSize="20px"
              />
            </Link>
          </Flex>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}
