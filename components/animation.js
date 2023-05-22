import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { ChakraProvider, Box, Button } from '@chakra-ui/react';
import Link from 'next/link';

const Animation = () => {
  const [showText, setShowText] = useState(false);

  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '20vh',
    paddingTop: '56.25%', // 16:9 aspect ratio (adjust as needed)
  };

  const videoStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  };

  const overlayStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    opacity: showText ? 1 : 0,
    transition: 'opacity 0.5s ease-in-out',
    fontFamily: 'Audiowide, sans-serif',
    color: '#fff',
    fontSize: '40px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
    zIndex: 1,
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowText(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <ChakraProvider>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet" />
      </Helmet>
      <Box style={containerStyle}>
        <video autoPlay muted style={videoStyle}>
          <source src="/test3.avi0001-0180.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {showText && (
          <>
            <div style={overlayStyle} className="text-animation">
              When light meets sound.
            </div>
            <Link href="/shop">
              <Button
                as="a"
                size="lg"
                colorScheme="white"
                backgroundColor="white"
                color="black"
                position="absolute"
                bottom="80px"
                left="50%"
                transform="translateX(-50%)"
              >
                Get Started
              </Button>
            </Link>
          </>
        )}
      </Box>
    </ChakraProvider>
  );
};

export default Animation;
