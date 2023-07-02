import { supabase } from './../lib/supabaseClient';
import Head from 'next/head';
import Home from '../views/Home';
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Index({ countries, date }) {
  const supabase = createServerComponentClient({ cookies });

  // const { data: session } = supabase.auth.getSession();
  
  if (supabase.auth.getSession()) {
    redirect("/dashboard");
  }
  
  return (
    <>
      <Head>
        <meta
          name='google-site-verification'
          content='1sh6t8QRUBfF9WzSoGxTch1ilV37MQvTE9h-Yu-rV9M'
        />
      </Head>
      <Home countries={countries} date={date} />
    </>
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
