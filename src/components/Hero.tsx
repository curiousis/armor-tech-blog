import React from 'react'
import { Container,Typography,Button } from '@mui/material'

export default function Hero() {
  return (
    <Container sx={{display:'flex',flexDirection:'column',width:'100%',backgroundColor:'#2C3E50',padding:'2rem',alignItems:'center',gap:'2rem'}}>
        <Typography variant='h2' component='h1' fontWeight={'bold'} color='#F4F6F6'>Welcome to Armor-Tech</Typography>
        <Typography component='p' color='#F4F6F6' fontSize='1.2rem'>
            Unlocking Innovation, Ensuring Security
            At Armor-Tech, we redefine the boundaries of technology to safeguard your world
        </Typography>
        <div className='flex justify-center items-center gap-4 w-1/2'>
            <button type='button' className='text-slate-700 bg-amber-500 px-4 py-2 rounded-xl font-bold'>Login</button>
            <button type='button' className='text-slate-700 bg-slate-50 px-4 py-2 rounded-xl font-bold'>Register</button>
        </div>

    </Container>
  )
}