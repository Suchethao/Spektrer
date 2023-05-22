import React from 'react';
import { Box, Button, Image, Text, Flex, Center } from '@chakra-ui/react';

const ProductCard = ({ imageSrc, productName, price }) => {
  return (
    <Box
      display="flex"
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
      <Box flex="1" p="6">
        <Box>
          <Text fontWeight="semibold" fontSize="xl" mb="2">
            {productName}
          </Text>
          <Text fontSize="lg" color="gray.500" mb="4">
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

      <Box flex="1">
        <Image src={imageSrc} alt={productName} objectFit="cover" />
      </Box>
    </Box>
  );
};

const Products = () => {
  return (
    <Box bg="black" p="4" mt="4" w="100vw"> {/* Set the background color of the component to black and width to 100vw */}
      <Center>
        <Flex flexWrap="wrap" justifyContent="center" m="-2">
          {/* Add negative margin to create spacing */}
          <ProductCard
            imageSrc="https://via.placeholder.com/300x300.png?text=Product+1"
            productName="Spektrer Mark 1"
            price={70}
          />
          <ProductCard
            imageSrc="https://via.placeholder.com/300x300.png?text=Product+2"
            productName="C Wave"
            price={140}
          />
        </Flex>
      </Center>
    </Box>
  );
};

export default Products;
