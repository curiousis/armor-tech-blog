'use client'
import React, { useState } from 'react';
import { TextField, Button,Container } from '@mui/material'
import { orange } from '@mui/material/colors';



export default function RegisterPage() {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
  };

  return (
    <Container className='flex justify-center items-center min-h-screen'>
        <form className='flex justify-center items-center flex-col w-4/5' onSubmit={handleSubmit}>
          <TextField
            className=''
            type="email"
            name="email"
            label="Email"
            placeholder="Email"
            variant="outlined"
            style={{width:'50%',border:'2px solid rgba(255,0,0,.3)',borderRadius:'.5rem'}}
          />
          <TextField
            className=''
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
    </Container>
  );
}

