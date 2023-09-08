'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { usePathname, useRouter } from 'next/navigation';

import { IoMdTimer } from 'react-icons/io';
import { Button } from './ui/button';

export default function Navbar() {
  const router = useRouter();
  const path = usePathname();
  const supabase = createClientComponentClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  const isAuthPage = path === '/auth';

  return (
    <div className="flex items-center justify-between  ">
      <div className="flex items-center text-2xl">
        <IoMdTimer />
        <h1>Time</h1>
      </div>
      {!isAuthPage && <Button onClick={handleLogout}>Logout</Button>}
    </div>
  );
}
