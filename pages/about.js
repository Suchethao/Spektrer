import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import * as FramerMotion from 'framer-motion';
import Header from '../components/header.js';
import Footer from '../components/footer';
import Glasses from '../components/animation';
import Products from '../components/products';
import About from '../components/about.js';
import DescriptionBox from '../components/description.js';
import { ChakraProvider, Box, Button } from '@chakra-ui/react';


const { motion } = FramerMotion;
const h1Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

export default function SpektrerApp() {
  const router = useRouter()

  return (
    <ClerkProvider
      frontendApi={process.env.NEXT_PUBLIC_CLERK_FRONTEND_API}
      navigate={router.push}
    >
      <Header />
      <Glasses />
      <DescriptionBox />
      <div>
        <SignedIn>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <About />
            <Footer />
          </div>
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </div>
    </ClerkProvider>
  );
}