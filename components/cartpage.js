import React from 'react';
import { Box, Text, Flex, ChakraProvider, IconButton } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { CloseIcon } from '@chakra-ui/icons';

const queryClient = new QueryClient();

const fetchCartItems = async () => {
  const response = await fetch('/api/cart'); // Replace '/api/cart' with your actual API endpoint
  const data = await response.json();
  return data;
};

const removeCartItem = async (productId) => {
  // TODO: Implement logic to remove the item from the cart
  const response = await fetch(`/api/cart/${productId}`, { method: 'DELETE' }); // Replace '/api/cart' with your actual API endpoint
  const data = await response.json();
  console.log(data);
};

const CartPage = () => {
  const { data: cartItems = [] } = useQuery('cart', fetchCartItems);

  const handleRemove = (productId) => {
    removeCartItem(productId);
    queryClient.invalidateQueries('cart');
  };

  return (
    <ChakraProvider>
      <Box p="4">
        <Text fontSize="xl" fontWeight="bold" mb="4">
          Shopping Cart
        </Text>
        {cartItems.length === 0 ? (
          <Text>No items in the cart</Text>
        ) : (
          <Flex direction="column">
            {/* Map over the cart items and display them */}
            {cartItems.map((item) => (
              <Box
                key={item.id}
                p="4"
                borderWidth="1px"
                borderRadius="lg"
                mb="4"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Flex alignItems="center">
                  <Text>{item.name}</Text>
                  <Text mx="4">${item.price}</Text>
                </Flex>
                <IconButton
                  size="sm"
                  variant="ghost"
                  colorScheme="red"
                  icon={<CloseIcon />}
                  aria-label="Remove"
                  onClick={() => handleRemove(item.id)}
                />
              </Box>
            ))}
          </Flex>
        )}
      </Box>
    </ChakraProvider>
  );
};

const CartRender = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CartPage />
    </QueryClientProvider>
  );
};

export default CartRender;
