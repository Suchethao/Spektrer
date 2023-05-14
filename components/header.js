import { UserButton } from '@clerk/nextjs';

export default function Header() {
  return (
    <div style={{ backgroundColor: 'orange', color: 'white', padding: '10px' }}>
      <UserButton />
    </div>
  );
}
