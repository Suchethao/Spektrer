import React from 'react';
import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <Box bg="white" color="black" py={10}>
      <Flex justify="left">
        <Box maxWidth="1200px" width="100%" px={4}>
          <Flex align="center" mb={6}>
            <Icon as={MdLocationOn} boxSize={20} mr={4} />
            <Text>
              Teknikringen 1, Stockholm, Sweden
            </Text>
          </Flex>

          <Flex align="center" mb={6}>
            <Icon as={MdPhone} boxSize={20} mr={4} />
            <Text>
              +46 728 525 608
            </Text>
          </Flex>

          <Flex align="center" mb={6}>
            <Icon as={MdEmail} boxSize={20} mr={4} />
            <Text>
              info@spektrer.com
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Contact;
