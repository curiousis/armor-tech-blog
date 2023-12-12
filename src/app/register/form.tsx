'use client'
import React,{FormEvent} from 'react'
import { TextField, Button,Container } from '@mui/material'
import { orange } from '@mui/material/colors';
import argon2  from 'argon2';
export default function Form() {
    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const response = await fetch(`/api/auth/register`,{
            method:'POST',
            body: JSON.stringify({
            email: formData.get('email'),
            password: formData.get('password'),
            name: formData.get('name'),
            role: 'user',
          })
        });
        console.log(response);
        
      };
    
  return (
    <form className='flex justify-center items-center flex-col w-4/5' onSubmit={handleSubmit}>
    <TextField
      type="text"
      name="name"
      label="Name"
      placeholder="Name"
      variant="outlined"
      style={{width:'50%',border:'2px solid rgba(255,0,0,.3)',borderRadius:'.5rem'}}
    />
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
      Register
    </Button >

  </form>
  )
}
