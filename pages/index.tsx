import { supabase } from './../lib/supabaseClient';
import Home from '../views/Home';

export default function Index({ countries, date }) {
  return <Home countries={countries} date={date} />;
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
