import React from 'react';
import Link from 'next/link';
// import {
//   Session,
// } from '@supabase/auth-helpers-nextjs';


const Home = () => {
  const user = '';

  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-3 font-mono'>
      <main className='flex flex-1 flex-col items-center justify-center'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src='./Project Zenith.svg' alt='project zenith logo' />
        <h1 className='text-3xl font-bold'>Welcome to Project Zenith!</h1>

        {user ? (
          <Link href={'/dashboard'}>
            <button className='mt-3 rounded-md bg-black px-5 py-3 text-white'>
              Dashboard
            </button>
          </Link>
        ) : (
          <Link href={'/login'}>
            <button className='mt-3 rounded-md bg-black px-5 py-3 text-white'>
              Login
            </button>
          </Link>
        )}
      </main>
    </div>
  );
};

export default Home;
