/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import Link from 'next/link';
import AuthForm from '../../supabase/Auth/auth-form';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const Login = () => {
  const supabase = createServerComponentClient({ cookies });

  // const { data: session } = supabase.auth.getSession();
  
  if (!supabase.auth.getSession()) {
    redirect("/dashboard");
  }
  
  return (
    <div className='h-full px-4 py-16'>
      <div className='mx-auto flex w-full max-w-md flex-col items-center justify-center'>
        <Link href='/'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src='./Project Zenith.svg' alt='' className='py-3' />
        </Link>
        <p
          tabIndex={0}
          aria-label='Login to your account'
          className='text-2xl font-bold leading-6 text-gray-800'
        >
          Login to Project Zenith
        </p>
        <p className='mt-4 text-sm font-medium leading-none text-gray-500'>
          Dont have account?{' '}
          <span className='cursor-pointer text-sm font-medium leading-none text-gray-800 underline'>
            {' '}
            <Link href='/signup'>Sign up here</Link>
          </span>
        </p>

        <div className='w-full'>
          <AuthForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
