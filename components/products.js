import React from 'react';
import { Box, Button, Image, Text, Flex, Center } from '@chakra-ui/react';

const ProductCard = ({ imageSrc, productName, price }) => {
  return (
    <Box
      flex="1"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      m="2"
      boxShadow="md"
      transition="transform 0.3s"
      _hover={{ transform: 'scale(1.02)' }}
      bg="black" // Set the background color to black
    >
      <Image src={imageSrc} alt={productName} />

      <Box p="6">
        <Box d="flex" justifyContent="space-between" alignItems="baseline">
          <Text fontWeight="semibold" fontSize="xl" color="white">
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

const Products = () => {
  return (
    <Center bg="black" p="4" mt="4"> {/* Add Center component to center align the content */}
      <Flex flexWrap="wrap" justifyContent="center" m="-2" maxW="100vw"> {/* Add maxW="100vw" to make the component full width */}
        {/* Add negative margin to create spacing */}
        <ProductCard
          imageSrc="https://via.placeholder.com/300x300.png?text=Product+1"
          productName="Product 1"
          price={999}
        />
        <ProductCard
          imageSrc="https://via.placeholder.com/300x300.png?text=Product+2"
          productName="Product 2"
          price={1299}
        />
        <ProductCard
          imageSrc="https://via.placeholder.com/300x300.png?text=Product+3"
          productName="Product 3"
          price={1799}
        />
      </Flex>
    </Center>
  );
};

export default Products;
