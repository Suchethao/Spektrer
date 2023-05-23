import React from 'react';
import { Box, Button, Image, Text, Flex, Center } from '@chakra-ui/react';

const TeamCard = ({ imageSrc, productName, price }) => {
  return (
    <Box
      padding="6vw"
      flex="1"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      m="2"
      boxShadow="md"
      transition="transform 0.3s"
      _hover={{ transform: 'scale(1.02)' }}
      bg="white" // Set the background color of the product card to white
      color="black" // Set the text color to black
    >
      <Image src={imageSrc} alt={productName} />

      <Box p="6">
        <Box d="flex" justifyContent="space-between" alignItems="baseline">
          <Text fontWeight="semibold" fontSize="xl">
            {productName}
          </Text>
          <Text fontSize="lg" color="gray.500">
            ${price}
          </Text>
        </Box>

        <Button
          colorScheme="blue"
          mt="4"
          w="100%"
          size="md"
          fontWeight="semibold"
          letterSpacing="wide"
          _hover={{ opacity: 0.8 }}
        >
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

const Team = () => {
  return (
    <Box bg="gray.100" p="4" mt="4" w="100vw"> {/* Set the background color of the component to a light gray */}
      <Center>
        <Flex flexWrap="wrap" justifyContent="center" m="-2">
          {/* Add negative margin to create spacing */}
          <TeamCard
            imageSrc="https://via.placeholder.com/300x300.png?text=Product+1"
            productName="Spektrer Mark 1"
            price={70}
          />
          <TeamCard
            imageSrc="https://via.placeholder.com/300x300.png?text=Product+2"
            productName="C Wave"
            price={140}
          />
          <TeamCard
            imageSrc="https://via.placeholder.com/300x300.png?text=Product+2"
            productName="C Wave"
            price={140}
          />
        </Flex>
      </Center>
    </Box>
  );
};

export default Team;
