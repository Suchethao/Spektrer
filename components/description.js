import { Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const DescriptionBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        borderWidth="30px"
        borderRadius="md"
        p={40}
        mt={15}
        backgroundColor="gray.100"
        boxShadow="md"
        fontFamily="Compass Sans, sans-serif"
        textAlign="center"
      >
        <Text
          fontSize="xl"
          fontWeight="bold"
          mb={4}
          color="gray.800"
          textTransform="uppercase"
        >
         Spektrer
        </Text>
        <Text fontSize="lg" color="gray.600">
        Have you ever been to a party or music festival and wished that the lights reacted to the music better? Spektrer combines innovative software and hardware to take visual immersion at live music performances to a whole new level.
        </Text>
      </Box>
    </motion.div>
  );
};

export default DescriptionBox;
