import { Flex, Text, Button, ChakraProvider } from "@chakra-ui/react";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import theme from "../chakra.config";

export default function Header() {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        bg="#f58024" // Update background color to Hermes orange (#f58024)
        color="white"
        padding="1.5rem"
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
      >
        <Flex align="center" mr={5}>
          <Text fontSize="lg" fontWeight="bold">
            Logo
          </Text>
        </Flex>

        <Flex justify="center" align="center">
          <Link href="/about">
            <Button
              variant="ghost"
              colorScheme="white" // Update colorScheme to "white" for white color
              size="sm"
              mr={2}
              _hover={{ bg: "#d5601f", color: "white" }} // Update hover background color to a darker shade of Hermes orange (#d5601f)
            >
              About
            </Button>
          </Link>
          <Link href="/shop">
            <Button
              variant="ghost"
              colorScheme="white" // Update colorScheme to "white" for white color
              size="sm"
              mr={2}
              _hover={{ bg: "#d5601f", color: "white" }} // Update hover background color to a darker shade of Hermes orange (#d5601f)
            >
              Shop
            </Button>
          </Link>
          <Link href="/festivals">
            <Button
              variant="ghost"
              colorScheme="white" // Update colorScheme to "white" for white color
              size="sm"
              mr={2}
              _hover={{ bg: "#d5601f", color: "white" }} // Update hover background color to a darker shade of Hermes orange (#d5601f)
            >
              Festivals
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="ghost"
              colorScheme="white" // Update colorScheme to "white" for white color
              size="sm"
              mr={2}
              _hover={{ bg: "#d5601f", color: "white" }} // Update hover background color to a darker shade of Hermes orange (#d5601f)
            >
              Contact
            </Button>
          </Link>
        </Flex>

        <UserButton />
      </Flex>
    </ChakraProvider>
  );
}
