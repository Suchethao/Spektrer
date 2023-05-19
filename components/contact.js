import React from 'react';
import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <Box maxW="300px" mx="auto" p="4">
      <Flex align="center" mb="4">
        <Icon as={MdLocationOn} boxSize="20px" mr="2" />
        <Text>123 Street, City, Country</Text>
      </Flex>

      <Flex align="center" mb="4">
        <Icon as={MdPhone} boxSize="20px" mr="2" />
        <Text>+1 234 567 890</Text>
      </Flex>

      <Flex align="center">
        <Icon as={MdEmail} boxSize="20px" mr="2" />
        <Text>example@example.com</Text>
      </Flex>
    </Box>
  );
};

export default Contact;