'use client'
import React, { useState } from 'react';
import { TextField, Button, makeStyles } from '@material-ui/core';

export default function RegisterPage() {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        className={classes.input}
        type="email"
        name="email"
        label="Email"
        placeholder="Email"
        variant="outlined"
        value={formData.email}
        onChange={handleChange}
      />
      <TextField
        className={classes.input}
        type="password"
        name="password"
        label="Password"
        placeholder="Password"
        variant="outlined"
        value={formData.password}
        onChange={handleChange}
      />
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        type="submit"
      >
        Register
      </Button>
    </form>
  );
}
function useStyles() {
    throw new Error('Function not implemented.');
}

