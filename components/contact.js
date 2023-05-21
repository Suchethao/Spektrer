import React from 'react';
import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <Box bg="black" color="white" py="4" width="100%">
      <Flex justify="center">
        <Box maxWidth="1200px" width="100%" px="4">
          <Flex align="center" mb="4">
            <Icon as={MdLocationOn} boxSize="20px" mr="2" />
            <Text>123 Street, City, Country</Text>
          </Flex>

          <Flex align="center" mb="4">
            <Icon as={MdPhone} boxSize="20px" mr="2" />
            <Text>+1 234 567 890</Text>
          </Flex>

          <Flex align="center" mb="4">
            <Icon as={MdEmail} boxSize="20px" mr="2" />
            <Text>example@example.com</Text>
          </Flex>

          <Text fontWeight="bold" mb="2">Have any questions?</Text>
          <Text>If you have any questions or need assistance, feel free to reach out to us.</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Contact;
