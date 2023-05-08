import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/nextjs'
import { UserButton } from '@clerk/nextjs'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <ClerkProvider
      frontendApi={process.env.NEXT_PUBLIC_CLERK_FRONTEND_API}
      navigate={router.push}
    >
      <nav>
        <UserButton />
      </nav>
      <main>
        <SignedIn>
          <h1>Welcome to your dashboard!</h1>
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </main>
    </ClerkProvider>
  )
}
