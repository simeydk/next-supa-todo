import '@/styles/global.css'

import { UserProvider } from '@supabase/supabase-auth-helpers/react';
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  return (
    <UserProvider supabaseClient={supabaseClient}>
      <Header />
      <Component {...pageProps} />
    </UserProvider>
  );
}

const Header = () => {
  const router = useRouter();
  const user = supabaseClient.auth.user();

  return <header className="bg-slate-600 text-white px-4 py-2 flex justify-between gap-4 items-center w-full shadow-md">
    <h3 className="text-slate-100 text-2xl font-medium">#TODO</h3>
    <div className="flex gap-4 items-center">
    <h4 className="font-medium text-sm">{user?.email}</h4>
    {user ? 
    <button onClick={() => {supabaseClient.auth.signOut();router.push('/login')}} className="border rounded border-white  px-2 py-1 text-sm">{"Log out"}</button> :
    <button onClick={() => {router.push('/login'); router.reload()}} className="border rounded border-white  px-2 py-1 text-sm">{"Log in"}</button>
    } 

    </div>
  </header>
}