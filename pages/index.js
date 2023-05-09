import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import styles from '../styles/Dashboard.module.css';

export default function Home() {
  const router = useRouter();

  return (
    <ClerkProvider
      frontendApi="ppk_test_dHJ1c3RlZC10dXJrZXktMzguY2xlcmsuYWNjb3VudHMuZGV2JA"
      navigate={router.push}
    >
      <nav>
        <UserButton />
      </nav>
      <main className={styles.container}>
        <SignedIn>
          <h1 className={styles.title}>Welcome to your dashboard!</h1>
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </main>
    </ClerkProvider>
  )
}
