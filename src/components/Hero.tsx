import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { orange } from '@mui/material/colors';

export default function Hero() {
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', width: '100%', backgroundColor: '#2C3E50', padding: '2rem', alignItems: 'center', gap: '2rem' }}>
      <Typography variant='h2' component='h1' fontWeight={'bold'} color='#F4F6F6'>Welcome to Armor-Tech</Typography>
      <Typography component='p' color='#F4F6F6' fontSize='1.2rem'>
        Unveiling Limitless Innovation, Safeguarding Your Digital Domain - Join us at Armor-Tech's micro-blog social hub, where we explore the cutting edge of technology. Your go-to platform for unlocking innovation and ensuring security in the dynamic world of digital possibilities.
      </Typography>
      <div className='flex justify-center items-center gap-4 w-1/2'>
        <Button variant='contained' style={{ backgroundColor: orange[500], color: '#2C3E50' }}>Login</Button>
        <Button variant='contained' color='warning' style={{backgroundColor:'#fff', color:'#2C3E50'}}>Register</Button>
      </div>
    </Container>
  );
}
