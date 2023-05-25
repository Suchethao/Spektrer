import { useEffect } from 'react';
import { Box, extendTheme, ChakraProvider } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const theme = extendTheme({
  fonts: {
    heading: 'Audiowide, sans-serif',
    body: 'Audiowide, sans-serif',
  },
});

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
        videoId: 'TEcJaJXWjy0', // Replace with your new YouTube video ID
        width: '80%', // Set the width to 100% to span the page
        height: '800',
        playerVars: {
          autoplay: 1, // Set to 1 to autoplay the video
          controls: 0, // Set to 0 to hide the video controls
          modestbranding: 1, // Set to 1 to remove the YouTube logo from the player
          rel: 0, // Set to 0 to disable related videos at the end
        },
      });
    };
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box position="relative" py="80px" bg="black" width="100%">
        <Box id="youtube-player" />
      </Box>
    </ChakraProvider>
  );
};

export default About;
