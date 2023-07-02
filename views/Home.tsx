import React from 'react';
import Link from 'next/link';
// import { supabase } from './../lib/supabaseClient';

type Props = {
  countries: any;
  date: any;
  session: any;
};

const Home = (props: Props) => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-3 font-mono'>
      <main className='flex flex-1 flex-col items-center justify-center'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src='./Project Zenith.svg' alt='project zenith logo' />
        <h1 className='text-3xl font-bold'>Welcome to Project Zenith!</h1>
        {/* <p className='text-xl'>
          Project Zenith is a platform for you to manage your projects and
          tasks.
        </p>
        <p className='text-xl'>
          You can create projects, add tasks to them, and assign them to your
          team members.
        </p>
        <p className='text-xl'>
          You can also create your own account and start using Project Zenith
          today!
        </p> */}
        {props.session ? (
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
