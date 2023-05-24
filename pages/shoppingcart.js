import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/nextjs';
import { ChakraProvider, Box, Button, Heading } from '@chakra-ui/react';
import { UserButton } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import * as FramerMotion from 'framer-motion';
import Header from '../components/header.js';
import Footer from '../components/footer';
import CartRender from '../components/cartpage.js';

const { motion } = FramerMotion;
const h1Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

export default function SpektrerApp() {
  const router = useRouter();

  return (
    <ClerkProvider
      frontendApi={process.env.NEXT_PUBLIC_CLERK_FRONTEND_API}
      navigate={router.push}
    >
      <ChakraProvider>
        <Header />
        <Container maxW="container.md" mt={8}>
          <Heading as="h2" size="lg" textAlign="center" mb={8}>
            Explore Festivals
          </Heading>
          <Box borderWidth="1px" borderRadius="md" p={4} mt={40}>
            <CartRender />
          </Box>
          <Footer />
        </Container>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </ChakraProvider>
    </ClerkProvider>
  );
}
