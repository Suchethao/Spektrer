import { useEffect } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { motion } from "framer-motion";

const About = () => {
  useEffect(() => {
    // Load the YouTube Player API asynchronously
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/player_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Initialize the YouTube player when the API is ready
    window.onYouTubePlayerAPIReady = () => {
      new window.YT.Player('youtube-player', {
        videoId: 'FFx178osh-o', // Replace with your YouTube video ID
        width: '100%', // Set the width to 100% to span the page
        height: '360',
        playerVars: {
          autoplay: 1, // Set to 0 if you don't want the video to autoplay
          controls: 1, // Set to 0 if you don't want to display video controls
          rel: 0, // Set to 0 to disable related videos at the end
        },
      });
    };
  }, []);

  return (
    <Box
      position="relative"
      py="80px"
      bg="black" // Set the background color to black
      fontFamily="San Francisco, sans-serif"
      width="100%"
    >
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
        zIndex="1"
      >
        <Heading as={motion.h1} fontSize="48px" fontWeight="bold" color="#fff">
          About Spektrer
        </Heading>
        <Text
          as={motion.p}
          fontSize="20px"
          lineHeight="1.5"
          maxW="800px"
          mx="auto"
          my="40px"
          color="#fff"
          width="80%"
        >
When Light Meets Sound        </Text>
      </Box>
      <Box
        id="youtube-player"
        filter="brightness(70%)" // Adjust the brightness value as per your preference
      />
    </Box>
  );
};

export default About;
