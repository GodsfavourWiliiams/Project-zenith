/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react';
import { EyeIcon, GitHubIcon, GoogleIcon } from './ProviderIcons';
import { FormInput, FormCheckBox } from '../../components/form';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '../../logic/action/types';

type SignUpProps = {};

const SignUp = (props: SignUpProps) => {
  const checkBox = useSelector(
    (state: RootState) => state.dashboardReducer.checkBox
  );
  console.log(checkBox);

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
          Sign Up to Project Zenith
        </p>
        <p className='mt-4 text-sm font-medium leading-none text-gray-500'>
          Already have an account?{' '}
          <span className='cursor-pointer text-sm font-medium leading-none text-gray-800 underline'>
            {' '}
            <Link href='/login'>Login here</Link>
          </span>
        </p>
        <button
          aria-label='Continue with google'
          className='mt-6 flex w-full items-center rounded-md border border-gray-700 px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-1'
        >
          <GoogleIcon />
          <p className='ml-4 text-base font-medium text-gray-700'>
            Continue with Google
          </p>
        </button>
        <button
          aria-label='Continue with github'
          className='mt-4  flex w-full items-center rounded-md border border-gray-700 px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-1'
        >
          <GitHubIcon />
          <p className='ml-4 text-base font-medium text-gray-700'>
            Continue with Github
          </p>
        </button>

        <div className='py4 flex w-full items-center justify-between py-5'>
          <hr className='w-full bg-gray-400' />
          <p className='px-2.5 text-base font-medium leading-4 text-gray-400'>
            OR
          </p>
          <hr className='w-full bg-gray-400' />
        </div>
        <div className='w-full'>
          <label className='text-sm font-medium leading-none text-gray-800'>
            Username
          </label>
          <FormInput
            type='text'
            placeHolderClass='placeholder:text-start text-start'
            value={''}
            placeholder='Enter your prefered username'
            required
            onChange={(e) => e.target.value}
            iconClass='mt-5'
          />
        </div>
        <div className='my-3 w-full'>
          <label className='text-sm font-medium leading-none text-gray-800'>
            Email
          </label>
          <FormInput
            type='email'
            placeHolderClass='placeholder:text-start text-start'
            value={''}
            placeholder='Enter email adress'
            required
            onChange={(e) => e.target.value}
            iconClass='mt-5'
          />
        </div>
        <div className=' w-full'>
          <label className='text-sm font-medium leading-none text-gray-800'>
            Password
          </label>
          <FormInput
            type='password'
            value={''}
            placeholder='Enter password'
            required
            onChange={(e) => e.target.value}
            iconClass='mt-[28px]'
            rightIcon={<EyeIcon />}
          />
        </div>
        <div className='mb-5 mt-3 flex w-full items-center justify-start'>
          <FormCheckBox
            label='Agree to Terms and Conditions'
            isChecked={checkBox}
          />
        </div>
        <div className='w-full'>
          <button className='w-full rounded-md border bg-black py-4 text-sm font-semibold leading-none text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2'>
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
