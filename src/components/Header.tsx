
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Link } from '@mui/material';
import { orange } from '@mui/material/colors';

export default function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#2C3E50' }}>
      <Toolbar className='flex justify-between py-4 px-3'>
        <Typography variant="h6" style={{color:orange[500]}} component="div">
          ArmorSphere
        </Typography>
        <nav className='w-1/2'>
          <ul className='flex justify-around'>
            <li><Link color="inherit" href="#" underline='none'>Home</Link></li>
            <li><Link color="inherit" href="#" underline='none'>About</Link></li>
            <li><Link color="inherit" href="#" underline='none'>Contact</Link></li>
          </ul>
        </nav>
      </Toolbar>
    </AppBar>
  );
}
