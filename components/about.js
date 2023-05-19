import * as FramerMotion from 'framer-motion';
import { Box, Heading, Text } from '@chakra-ui/react';

const { motion } = FramerMotion;

const About = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  return (
    <Box
      py="80px"
      bg="#f5f5f5"
      fontFamily="San Francisco, sans-serif"
    >
      <motion.h1
        variants={textVariants}
        initial="hidden"
        animate="visible"
        fontSize="48px"
        fontWeight="bold"
        textAlign="center"
        color="#000"
      >
        About Spektrer
      </motion.h1>
      <motion.p
        variants={textVariants}
        initial="hidden"
        animate="visible"
        fontSize="20px"
        lineHeight="1.5"
        maxW="800px"
        mx="auto"
        my="40px"
        color="#333"
      >
        Spektrer is a revolutionary new product that helps people see the world in a whole new way. With our advanced technology, you'll be able to experience the world like never before, with stunning clarity and detail. Our team of experts has spent years perfecting the Spektrer system, and we're proud to offer it to you today. Whether you're exploring new places or just enjoying the world around you, Spektrer is the perfect companion for your adventures.
      </motion.p>
    </Box>
  );
};

export default About;
