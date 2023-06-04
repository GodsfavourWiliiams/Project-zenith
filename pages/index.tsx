import Head from 'next/head';

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-3'>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className='flex flex-1 flex-col items-center justify-center'>
        <h1 className='text-3xl font-bold underline'>
          Welcome to <a href='/'>Project Zenith!</a>
        </h1>

        <p className='mt-3 text-2xl'>
          Get started by editing{' '}
          <code className='rounded-md bg-gray-100 p-3 font-mono text-lg'>
            pages/index.js
          </code>
        </p>
      </main>
    </div>
  );
}
