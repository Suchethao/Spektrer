import { useState } from "react";
import { Flex, Text, Button, ChakraProvider, Box, Select } from "@chakra-ui/react";
import { HamburgerIcon, Icon, ShoppingCartIcon } from "@chakra-ui/icons";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import theme from "../chakra.config";

export default function Header() {
  return (
    <ChakraProvider theme={theme}>
      <header style={{ position: "fixed", top: 0, width: "100%", zIndex: 999 }}>
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          bg="white"
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
                  src="https://i.ibb.co/sbgt3cQ/spektrer-web-title.png"
                  alt="Logo"
                  style={{ height: "70px" }}
                />
              </Flex>
            </LinkWrapper>
          </Link>

          <Flex align="center">
          <Icon as={ShoppingCartIcon} boxSize={8} color="gray.600" />
            <UserButton />
          </Flex>
        </Flex>
      </header>
    </ChakraProvider>
  );
}

// Rest of the code remains the same



function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box position="relative">
      <Button
        variant="ghost"
        colorScheme="orange"
        size="lg"
        mr={2}
        _hover={{ bg: "#d5601f", color: "white" }}
        rightIcon={<HamburgerIcon boxSize={8} />}
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
          <LanguageDropdown />
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
        colorScheme="orange"
        size="sm"
        width="100%"
        mb={2}
        _hover={{ bg: "#d5601f", color: "white" }}
      >
        {children}
      </Button>
    </Link>
  );
}

function LanguageDropdown() {
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    // Handle language change logic
    console.log("Selected Language:", selectedLanguage);
  };

  return (
    <Select mt={2} onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="fr">French</option>
      <option value="es">Spanish</option>
      <option value="de">German</option>
      <option value="nl">Dutch</option>
    </Select>
  );
}

const LinkWrapper = ({ children }) => <div style={{ cursor: "pointer" }}>{children}</div>;
