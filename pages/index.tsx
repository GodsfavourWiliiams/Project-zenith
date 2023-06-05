import Head from 'next/head';
import { supabase } from './../lib/supabaseClient';

export default function Home({ countries, date }) {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-3'>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className='flex flex-1 flex-col items-center justify-center'>
        <h1 className='text-3xl font-bold underline'>
          Welcome to Project Zenith!
        </h1>

        <code className='mt-3 rounded-md bg-gray-100 p-3 font-mono text-lg'>
          <ul>
            {countries ? (
              countries.map((country: any) => (
                <li key={country.id}>{country.name}</li>
              ))
            ) : (
              <li>No countries available</li>
            )}
          </ul>
        </code>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  let { data } = await supabase.from('countries').select();
  let { data: date, error } = await supabase.from('date').select('name');

  return {
    props: {
      countries: data,
      date,
    },
  };
}
