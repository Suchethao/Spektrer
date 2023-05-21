import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { Box, Center } from '@chakra-ui/react';
import Header from '../components/header';
import Footer from '../components/footer';
import Glasses from '../components/animation';
import Products from '../components/products';
import Gallery from '../components/festivals';
import About from '../components/about.js';

const h1Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function SpektrerApp() {
  const router = useRouter();

  return (
    <ClerkProvider
      frontendApi={process.env.NEXT_PUBLIC_CLERK_FRONTEND_API}
      navigate={router.push}
    >
      <Box bg="#fafafa" minHeight="100vh">
        <Header />

        <Center py={20} bgGradient="linear(to-b, #f5f5f5, #fafafa)">
          <motion.h1
            variants={h1Variants}
            initial="hidden"
            animate="visible"
            style={{ fontSize: '2rem', fontWeight: 'bold', letterSpacing: '-0.04em' }}
          >
            Welcome to Spektrer
          </motion.h1>
        </Center>

        <Glasses />

        <Box py={10} bg="#fafafa">
          <Products />
        </Box>

        <Box bg="#fafafa">
          <Gallery />
        </Box>

        <Footer />
      </Box>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
}
