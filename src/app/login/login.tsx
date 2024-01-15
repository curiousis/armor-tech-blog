'use client'
import React, { FormEvent, useState, useEffect } from 'react';
import { TextField, Button, Link } from '@mui/material';
import { orange } from '@mui/material/colors';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { getSession } from 'next-auth/react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();
  console.log('hej');


  useEffect(() => {
    const checkSession = async () => {
      const session = await getSession();
      console.log(session);


      if (session) {
        const isAdmin = session.user?.role === 'admin';

        if (isAdmin) {
          router.push('/admindashboard');
        } else {
          router.push('/dashboard');
        }
      }
    };

    checkSession();
  }, [router]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const session = await getSession();
    const response = await signIn('credentials', {
      email: email,
      password: password,
      redirect: false,
      callbackUrl: session?.user?.role === 'admin' ? '/admindashboard' : '/dashboard',
    });

    if (response?.error) {
      setError('Invalid Email or Password');
    } else if (response?.ok) {
      setError('');

    }
  };

  return (
    <>
      <form className='flex justify-center items-center flex-col w-4/5' onSubmit={handleSubmit}>
        <TextField
          type="email"
          name="email"
          label="Email"
          placeholder="Email"
          variant="outlined"
          style={{ width: '50%', border: '2px solid rgba(255,0,0,.3)', borderRadius: '.5rem' }}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete='false'
        />
        <TextField
          type="password"
          name="password"
          label="Password"
          placeholder="Password"
          variant="outlined"
          style={{ width: '50%', border: '2px solid rgba(255,0,0,.3)', borderRadius: '.5rem' }}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete='false'
        />
        <p style={{ color: 'red' }}>
          {error}
        </p>
        <Button
          variant="contained"
          color="primary"
          type='submit'
          style={{ backgroundColor: orange[500], color: '#2C3E50' }}
        >
          Login
        </Button>
      </form>
      <Link href='/register'>Don't have an account? Register here</Link>
    </>
  );
}
