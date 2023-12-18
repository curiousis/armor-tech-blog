'use client'
import React,{FormEvent} from 'react'
import { TextField, Button, } from '@mui/material'
import { orange } from '@mui/material/colors';
import {signIn} from 'next-auth/react';
import {  useRouter } from 'next/navigation';

export default function LoginForm() {
    const router = useRouter();
    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const response = await signIn('credentials',{
        email: formData.get('email'),
        password: formData.get('password'),
        redirect: false,
      })

      if(!response?.error){
        router.push('/dashboard');
        router.refresh();
      }
      };
    
  return (
    <form className='flex justify-center items-center flex-col w-4/5' onSubmit={handleSubmit}>
      <TextField
        type="email"
        name="email"
        label="Email"
        placeholder="Email"
        variant="outlined"
        style={{width:'50%',border:'2px solid rgba(255,0,0,.3)',borderRadius:'.5rem'}}
      />
      <TextField
        type="password"
        name="password"
        label="Password"
        placeholder="Password"
        variant="outlined"
        style={{width:'50%',border:'2px solid rgba(255,0,0,.3)',borderRadius:'.5rem'}}

      />
      <Button

        variant="contained"
        color="primary"
        type="submit"
        style={{ backgroundColor: orange[500], color: '#2C3E50' }}
      >
        Login
      </Button >
  </form>
  )
}
