'use client'
import React,{FormEvent,useState} from 'react'
import { TextField, Button,Snackbar, Alert} from '@mui/material'
import { orange } from '@mui/material/colors';
import {signIn} from 'next-auth/react';
import {  useRouter } from 'next/navigation';


export default function LoginForm() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
    const[openSnackbar,setOpenSnackbar] = useState(false)

    const router = useRouter();// Assuming this is part of your component where you handle the sign-in logic
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    
      const response = await signIn('credentials', {
        email: email,
        password: password,
        redirect: false,
      });
    
      if (response?.error) {
        // Handle authentication error
        console.error('Authentication error:', response.error);
        setError('Invalid Email or Password');
        setOpenSnackbar(true);
      } else {
        // Successful authentication
        router.push('/dashboard');
        router.refresh();
      }
    };
    
    
  return (
    <form className='flex justify-center items-center flex-col w-4/5'>
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
        onChange={(e)=> setPassword(e.target.value)}
      />
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={()=>setOpenSnackbar(false)}>
        <Alert 
        elevation={6}
        variant='filled'
        severity='error'
        onClose={()=>setOpenSnackbar(false)}>        
          {error}
        </Alert> 
      </Snackbar>

      <Button
        variant="contained"
        color="primary"
        type='submit'
        style={{ backgroundColor: orange[500], color: '#2C3E50' }}
        onClick={()=>handleSubmit}
      >
        Login
      </Button >
  </form>
  )
}
