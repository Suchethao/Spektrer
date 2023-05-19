import React from 'react';
import { Box, Button, Image, Text, Flex } from '@chakra-ui/react';

const ProductCard = ({ imageSrc, productName, price }) => {
  return (
    <Box flex="1" maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m="2">
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

        <Button colorScheme="blue" mt="4">
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

const Products = () => {
  return (
    <Box mb="30px">
      <Flex flexWrap="wrap">
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
    </Box>
  );
};

export default Products;
