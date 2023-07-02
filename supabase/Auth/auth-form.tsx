'use client';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '../types/database.types';

export default function AuthForm() {
  const supabase = createClientComponentClient<Database>();

  return (
    <Auth
      supabaseClient={supabase}
      view='sign_in'
      appearance={{
        theme: ThemeSupa,
        style: {
          button: {
            borderRadius: '8px',
            padding: '14px',
            fontSize: '14px',
            fontWeight: 500,
            border: '1px solid black',
          },
          anchor: { color: 'black' },
          input: {
            width: '100%',
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid #ccc',
          },
          label: {
            fontWeight: 600,
            color: 'black',
            fontSize: '13px',
            marginBottom: '3px',
            },
            container: {
                width: '100%',
                gap: '10px',
            },
        },
        variables: {
          default: {
            colors: {
              brand: 'black',
              brandAccent: 'black',
            },
          },
        },
      }}
      localization={{
        variables: {
          sign_in: {
            email_label: 'Email address',
            password_label: 'Password',
          },
        },
      }}
      theme='light'
      showLinks={false}
      providers={['google', 'github']}
      redirectTo={typeof window !== 'undefined' ? `${window.location.origin}/auth/callback` : ''}
    />
  );
}
