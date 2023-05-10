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
      <nav style={{ backgroundColor: 'black', color: 'white', padding: '10px' }}>
        <UserButton />
      </nav>
      <main>
        <SignedIn>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: 'blue' }}>Welcome to your dashboard!</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', padding: '10px' }}>
              <div style={{ backgroundColor: 'white', height: '100px', border: '1px solid black', boxShadow: '2px 2px 5px #888888' }}></div>
              <div style={{ backgroundColor: 'white', height: '100px', border: '1px solid black', boxShadow: '2px 2px 5px #888888' }}></div>
              <div style={{ backgroundColor: 'white', height: '100px', border: '1px solid black', boxShadow: '2px 2px 5px #888888' }}></div>
              <div style={{ backgroundColor: 'white', height: '100px', border: '1px solid black', boxShadow: '2px 2px 5px #888888' }}></div>
              <div style={{ backgroundColor: 'white', height: '100px', border: '1px solid black', boxShadow: '2px 2px 5px #888888' }}></div>
              <div style={{ backgroundColor: 'white', height: '100px', border: '1px solid black', boxShadow: '2px 2px 5px #888888' }}></div>
            </div>
            <footer style={{ backgroundColor: 'black', color: 'white', padding: '10px', marginTop: 'auto' }}>
              <p style={{ textAlign: 'center' }}>About Us</p>
            </footer>
          </div>
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </main>
    </ClerkProvider>
  )
}
