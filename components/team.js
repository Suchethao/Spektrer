import React from 'react';
import { Box, Button, Text, Flex, Center } from '@chakra-ui/react';

const TeamCard = ({ imageSrc, Name, Title }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${imageSrc})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '30vw',
    height: '30vw',
  };

  return (
    <Box
      padding="1vw"
      flex="1"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      transition="transform 0.3s"
      _hover={{ transform: 'scale(1.02)' }}
      bg="#b042ff" // Set the background color of the product card to white
      color="white" // Set the text color to black
    >
      <Box
        style={backgroundImageStyle}
        backgroundPosition="center" // Center the background image
      />

      <Box p="2">
        <Box d="flex" justifyContent="space-between" alignItems="center">
          <Text fontWeight="semibold" fontSize="xl">
            {Name}
          </Text>
          <Text fontSize="lg" color="gray.500">
            {Title}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

const Team = () => {
  return (
    <Box bg="gray.100" p="4" mt="4" display="flex" alignItems="center" justifyContent="center"> {/* Set the background color of the component to a light gray */}
      <Flex flexWrap="wrap" justifyContent="center">
        {/* Add negative margin to create spacing */}
        <TeamCard
          imageSrc="https://i.ibb.co/KjGkyt4/SURANJAN-V1.png" alt="SURANJAN-V1" border="0"
          Name="Suranjan Ram Ottikkutti"
          Title="CEO & Founder"
        />
        <TeamCard
          imageSrc="https://i.ibb.co/vhy1nhV/cissi.jpg" alt="cissi" border="0"
          Name="Cissi Nilsson"
          Title="Marketing Manager"
        />
        <TeamCard
          imageSrc="https://i.ibb.co/521wN1F/harshdeep.jpg" alt="harshdeep" border="0"
          Name="Harshdeep Parmar"
          Title="CTO"
        />
      </Flex>
    </Box>
  );
};

export default Team;
