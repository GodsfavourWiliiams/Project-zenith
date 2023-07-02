/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react';
import { EyeIcon } from './ProviderIcons';
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';
import { FormInput, FormCheckBox } from '../../components/form';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '../../logic/action/types';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '../../supabase/types/database.types';
import { toast } from 'react-toastify';
import { object, string, number, date, InferType } from 'yup';

type FormState = {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  hasError: {
    [key in keyof FormState]?: boolean;
  };
};

const initialState: FormState = {
  username: '',
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  hasError: {},
};

let schema = object().shape({
  username: string().required('Username is required'),
  firstname: string().required('First name is required'),
  lastname: string().required('Last name is required'),
  email: string().email('Invalid email').required('Email is required'),
  password: string().required('Password is required'),
});

const SignUp = () => {
  const checkBox = useSelector(
    (state: RootState) => state.dashboardReducer.checkBox
  );
  const [loading, setLoading] = useState<boolean>(false);
  const supabase = createClientComponentClient<Database>();
  const [form, setForm] = useState<FormState>(initialState);
  const router = useRouter();
  const [errors, setErrors] = useState<FormState>(initialState);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  
    if (value === '') {
      setErrors({ ...errors, hasError: { ...errors.hasError, [name]: true } });
    } else {
      setErrors({ ...errors, hasError: { ...errors.hasError, [name]: false } });
    }
  };
  

  const submit = async () => {
    // if (!schema.isValidSync(form)) return;
    schema
    .validate(form, { abortEarly: false })
    .then(() => {
      setErrors({ ...errors, hasError: {} });
    })
    .catch((err) => {
      const validationErrorMessages: any = {};
      err.inner.forEach((error: { path: string | number; message: any }) => {
        validationErrorMessages[error.path] = error.message;
        setErrors({ ...errors, hasError: { ...errors.hasError, [error.path]: true } });
      });
      setErrors({ ...errors, hasError: validationErrorMessages });
    });
    try {
      if (!checkBox && !form.hasError)
      return toast.warning('Please agree to the terms and conditions');
      await schema.validate(form, { abortEarly: false });
      setLoading(true);
      const { email, password, firstname, lastname, username } = form;
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: typeof window !== 'undefined' ? `${window.location.origin}/auth/callback` : '',
          data: {
            first_name: firstname,
            last_name: lastname,
            user_name: username,
          },
        },
      });
      if (error) {
        throw error;
      }
      if (!error && data) {
        // router.push('/login');
        toast.success('Registration Successful., Check your email to verify your account');
      }
      console.log(data);
    } catch (error) {
      toast.error(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
    router.refresh();
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
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
          Sign Up to Project Zenith
        </p>
        <p className='mt-4 text-sm font-medium leading-none text-gray-500'>
          Already have an account?{' '}
          <span className='cursor-pointer text-sm font-medium leading-none text-gray-800 underline'>
            {' '}
            <Link href='/login'>Login here</Link>
          </span>
        </p>
        <div className='mt-10 grid w-full grid-cols-2 gap-3'>
          <div className='w-full'>
            <label className='text-sm font-medium leading-none text-gray-800'>
              First Name
            </label>
            <FormInput
              name='firstname'
              type='text'
              placeHolderClass='placeholder:text-start text-start'
              value={form.firstname}
              placeholder='Enter your first name'
              error={errors.hasError.firstname} // Display error message
              required
              onChange={handleChange}
            />
          {errors.hasError.firstname && (
          <p className='text-red-500 text-sm'>{errors.hasError.firstname}</p>
        )}
          </div>
          <div className='w-full'>
            <label className='text-sm font-medium leading-none text-gray-800'>
              Last Name
            </label>
            <FormInput
              name='lastname'
              type='text'
              placeHolderClass='placeholder:text-start text-start'
              value={form.lastname}
              placeholder='Enter your Last name'
              required
              onChange={handleChange}
              error={errors.hasError.lastname} // Display error message
            />
            {errors.hasError.lastname && (
              <p className='text-red-500 text-sm'>{errors.hasError.lastname}</p>
            )}
          </div>
        </div>
        <div className='mt-3 w-full'>
          <label className='text-sm font-medium leading-none text-gray-800'>
            Username
          </label>
          <FormInput
            name='username'
            type='text'
            placeHolderClass='placeholder:text-start text-start'
            value={form.username}
            placeholder='Enter your prefered username'
            required
            onChange={handleChange}
            error={errors.hasError.username} // Display error message
          />
          {errors.hasError.username && (
            <p className='text-red-500 text-sm'>{errors.hasError.username}</p>
          )}
        </div>
        <div className='my-3 w-full'>
          <label className='text-sm font-medium leading-none text-gray-800'>
            Email
          </label>
          <FormInput
            name='email'
            type='email'
            placeHolderClass='placeholder:text-start text-start'
            value={form.email}
            placeholder='Enter email adress'
            required
            onChange={handleChange}
            error={errors.hasError.email} // Display error message
          />
          {errors.hasError.email && (
            <p className='text-red-500 text-sm'>{errors.hasError.email}</p>
          )}
        </div>
        <div className=' w-full'>
          <label className='text-sm font-medium leading-none text-gray-800'>
            Password
          </label>
          <FormInput
            name='password'
            type='password'
            value={form.password}
            placeholder='Enter password'
            required
            onChange={handleChange}
            iconClass='mt-[28px]'
            rightIcon={<EyeIcon />}
            error={errors.hasError.password} // Display error message
          />
          {errors.hasError.password && (
            <p className='text-red-500 text-sm'>{errors.hasError.password}</p>
          )}
        </div>
        <div className='mb-5 mt-3 flex w-full items-center justify-start'>
          <FormCheckBox
            label='Agree to Terms and Conditions'
            isChecked={checkBox}
          />
        </div>
        <div className='w-full'>
          <button
            onClick={submit}
            disabled={loading}
            className={`flex w-full items-center justify-center rounded-md border py-4 ${
              loading ? 'bg-slate-700' : 'bg-black'
            } text-sm font-semibold leading-none text-white `}
          >
            {loading ? 'Registering ...' : 'Register Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
