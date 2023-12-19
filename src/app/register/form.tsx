'use client'
import React,{useState,FormEvent} from 'react'
import { TextField, Button } from '@mui/material'
import { orange } from '@mui/material/colors';
import {  useRouter } from 'next/navigation';

export default function Form() {
  const router = useRouter();
  const [email,setEmail] = React.useState('');
  const [name,setName] = React.useState('');
  const [password,setPassword] = React.useState('');
  const [error,setError] = React.useState('');

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
       try {
        const response = await fetch(`/api/auth/register`,{
            method:'POST',
            body: JSON.stringify({
            email: formData.get('email'),
            password: formData.get('password'),
            name: formData.get('name'),
            role: 'user',
          })
        });


        if(response.ok){
          router.push('/login');
          router.refresh();
     } else{
      console.error('Something went wrong');
     }
      }catch(error){
        console.error('An error occured during registration', error);
      
    }
  }
  return (
    <form className='flex justify-center items-center flex-col w-4/5' onSubmit={handleSubmit}>
    <TextField
      type="text"
      name="name"
      label="Name"
      placeholder="Name"
      variant="outlined"
      style={{width:'50%',border:'2px solid rgba(255,0,0,.3)',borderRadius:'.5rem'}}
      onChange={(e)=> setName(e.target.value)}
    />
    <TextField
      type="email"
      name="email"
      label="Email"
      placeholder="Email"
      variant="outlined"
      style={{width:'50%',border:'2px solid rgba(255,0,0,.3)',borderRadius:'.5rem'}}
      onChange={(e)=> setEmail(e.target.value)}
    />
    <TextField
      type="password"
      name="password"
      label="Password"
      placeholder="Password"
      variant="outlined"
      style={{width:'50%',border:'2px solid rgba(255,0,0,.3)',borderRadius:'.5rem'}}
      onChange={(e)=>setPassword(e.target.value)}
    />
    <Button      
      variant="contained"
      color="primary"
      type="submit"
      style={{ backgroundColor: orange[500], color: '#2C3E50' }}
    >
      Register
    </Button >
  </form>
  )
}
