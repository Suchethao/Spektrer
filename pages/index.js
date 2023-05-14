import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import * as FramerMotion from 'framer-motion';
import Header from '../components/header.js';
import Footer from '../components/footer';

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
      <div>
        <SignedIn>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <motion.h1 variants={h1Variants} initial="hidden" animate="visible" style={{ fontSize: '24px', fontWeight: 'bold', color: 'blue' }}>Welcome to your dashboard!</motion.h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '10px', padding: '10px' }}>
              <div style={{ backgroundColor: 'red', height: '100px' }}></div>
              <div style={{ backgroundColor: 'green', height: '100px' }}></div>
              <div style={{ backgroundColor: 'blue', height: '100px' }}></div>
              <div style={{ backgroundColor: 'yellow', height: '100px' }}></div>
              <div style={{ backgroundColor: 'orange', height: '100px' }}></div>
              <div style={{ backgroundColor: 'purple', height: '100px' }}></div>
            </div>
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