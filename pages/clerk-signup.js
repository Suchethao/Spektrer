import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import styles from '../styles/dashboard.module.css';

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
        <div className={styles.container}>
     <h1 className={styles.heading}>Welcome to your dashboard!</h1>
    </div>

        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </main>
    </ClerkProvider>
  )
}
