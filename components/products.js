import React from 'react';
import { Box, Button, Image, Text, Flex, Center, ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const theme = {
  fonts: {
    heading: 'Audiowide, sans-serif',
    body: 'Audiowide, sans-serif',
  },
};

const addToCart = async (productName) => {
  // TODO: Implement logic to add the item to the cart
  console.log(`Adding product ${productName} to the cart...`);
};

const ProductCard = ({ imageSrc, productName, price }) => {
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
      _hover={{
        transform: 'scale(1.02)',
        borderBottom: '2px solid #b042ff',
        borderLeft: '2px solid #ff0000',
        borderTop: '2px solid #00ff00',
        borderRight: '2px solid #0000ff',
      }}
      _active={{
        borderBottom: '2px solid #b042ff',
        borderLeft: '2px solid #ff0000',
        borderTop: '2px solid #00ff00',
        borderRight: '2px solid #0000ff',
      }}
      bg="#000000"
      color="#ffffff"
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
          onClick={() => addToCart(productName)}
        >
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

const Products = () => {
  const { data: cartItems = [] } = useQuery('cart');

  return (
    <ChakraProvider theme={theme}>
      <Box bg="#000000" p="4" mt="4" w="100vw">
        <Center>
          <Flex flexWrap="wrap" justifyContent="center" m="-2">
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
        <Button
          colorScheme="blue"
          size="sm"
          position="fixed"
          bottom="4"
          right="4"
          fontWeight="semibold"
          onClick={() => console.log('Open cart')}
        >
          Cart ({cartItems.length})
        </Button>
      </Box>
    </ChakraProvider>
  );
};

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Products />
    </QueryClientProvider>
  );
};

export default App;
