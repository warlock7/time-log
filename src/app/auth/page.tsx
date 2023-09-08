import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import AuthComponent from './components/AuthComponent';

export default async function Page() {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase.auth.getSession();

  if (data.session) {
    return redirect('/');
  }

  return <AuthComponent />;
}
