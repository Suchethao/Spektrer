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
              <a
                href="https://maps.google.com/?q=Teknikringen+1+Stockholm+Sweden"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'black', textDecoration: 'underline' }}
              >
                Teknikringen 1, Stockholm, Sweden
              </a>
            </Text>
          </Flex>

          <Flex align="center" mb={6}>
            <Icon as={MdPhone} boxSize={20} mr={4} />
            <Text>
              <a href="tel:+46728525608" style={{ color: 'black', textDecoration: 'underline' }}>
                +46 728 525 608
              </a>
            </Text>
          </Flex>

          <Flex align="center" mb={6}>
            <Icon as={MdEmail} boxSize={20} mr={4} />
            <Text>
              <a href="mailto:info@spektrer.com" style={{ color: 'black', textDecoration: 'underline' }}>
                info@spektrer.com
              </a>
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Contact;
