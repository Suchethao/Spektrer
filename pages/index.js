import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import * as FramerMotion from 'framer-motion';
import Header from '../components/header.js';
import Footer from '../components/footer';
import Animation from '../components/animation';
import Products from '../components/products';
import About from '../components/about.js';
import Gallery from '../components/festivals.js';
import Contact from '../components/contact.js';




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
      <Animation />
      <div>
        <SignedIn>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <About />
            <Products />
            <Gallery />
            <Contact />
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