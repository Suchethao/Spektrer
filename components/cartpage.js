import React from 'react';
import { Box, Text, Flex, ChakraProvider, Button } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider, useQuery, useMutation } from 'react-query';

const queryClient = new QueryClient();

const fetchCartItems = async () => {
  const response = await fetch('/api/cart'); // Replace '/api/cart' with your actual API endpoint
  const data = await response.json();
  return data;
};

const removeCartItem = async (productId) => {
  await fetch(`/api/cart/${productId}`, { method: 'DELETE' }); // Replace '/api/cart' with your actual API endpoint
};

const CartPage = () => {
  const { data: cartItems = [], refetch } = useQuery('cart', fetchCartItems);
  const removeItemMutation = useMutation(removeCartItem, {
    onSuccess: () => {
      refetch();
    },
  });

  const handleRemoveItem = (productId) => {
    removeItemMutation.mutate(productId);
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
            {cartItems.map((item) => (
              <Box key={item.id} p="4" borderWidth="1px" borderRadius="lg" mb="4">
                <Text>{item.name}</Text>
                <Text>${item.price}</Text>
                <Button onClick={() => handleRemoveItem(item.id)} mt="2" size="sm" colorScheme="red">
                  Remove
                </Button>
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
