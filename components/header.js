import { useState } from "react";
import { Flex, Text, Button, ChakraProvider, Box } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
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
        bg="white" // Update background color to black
        color="white"
        padding="1.5rem"
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
      >
        <Flex align="center">
          <DropdownMenu />
        </Flex>

        <Link href="/" passHref>
          <LinkWrapper>
            <Flex align="center" mr={5}>
              <img
                src="https://i.ibb.co/sbgt3cQ/spektrer-web-title.png" // Replace with the new image URL
                alt="Logo"
                style={{ height: "70px" }} // Adjust the height as needed
              />
            </Flex>
          </LinkWrapper>
        </Link>

        <UserButton />
      </Flex>
    </ChakraProvider>
  );
}

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box position="relative">
      <Button
        variant="ghost"
        colorScheme="orange" // Update colorScheme to "orange" for Hermes orange color
        size="sm"
        mr={2}
        _hover={{ bg: "#d5601f", color: "white" }} // Update hover background color to a darker shade of Hermes orange (#d5601f)
        rightIcon={<HamburgerIcon />}
        onClick={handleToggle}
      />
      {isOpen && (
        <Box
          position="absolute"
          top="100%"
          left="30"
          mt={2}
          p={2}
          bg="white"
          color="black"
          boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
          zIndex="999"
          borderRadius="md"
        >
          <DropdownItem href="/about">About</DropdownItem>
          <DropdownItem href="/shop">Shop</DropdownItem>
          <DropdownItem href="/contact">Contact</DropdownItem>
        </Box>
      )}
    </Box>
  );
}

function DropdownItem({ href, children }) {
  return (
    <Link href={href}>
      <Button
        variant="ghost"
        colorScheme="orange" // Update colorScheme to "orange" for Hermes orange color
        size="sm"
        width="100%"
        mb={2}
        _hover={{ bg: "#d5601f", color: "white" }} // Update hover background color to a darker shade of Hermes orange (#d5601f)
      >
        {children}
      </Button>
    </Link>
  );
}

const LinkWrapper = ({ children }) => <div style={{ cursor: "pointer" }}>{children}</div>;
