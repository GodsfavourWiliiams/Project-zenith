import { useEffect } from 'react';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Home from '../views/Home';
import { supabase } from './../lib/supabaseClient';
import { redirect } from 'next/navigation';


export default async function Index({ countries, date }) {
  const router = useRouter();
  const { data: session } = await supabase.auth.getSession();
  console.log(countries, date, session);

  useEffect(() => {
    if (session) {
      redirect('/dashboard');
    }
  }, [session, router]);

  return (
    <>
      <Head>
        <meta
          name='google-site-verification'
          content='1sh6t8QRUBfF9WzSoGxTch1ilV37MQvTE9h-Yu-rV9M'
        />
      </Head>
      <Home />
    </>
  );
}

export async function getServerSideProps() {
  const supabaseClient = createServerComponentClient({ cookies });
  const { data } = await supabaseClient.from('countries').select();
  const { data: date } = await supabaseClient.from('date').select('name');

  return {
    props: {
      countries: data,
      date,
    },
  };
}
