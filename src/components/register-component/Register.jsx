import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import './Register.css';

export default function Register() {
  function submit() {
    console.log('submited');
  }
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
      <div>
        <Box
          component='form'
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete='off'
        >
          <h1>Register Component</h1>
          <TextField
            className='input-field'
            id='name'
            label='Name'
            variant='standard'
          />
          <TextField
            className='input-field'
            id='standard-basic'
            label='Email'
            variant='standard'
          />
          <TextField
            className='input-field'
            id='standard-basic'
            label='Password'
            variant='standard'
          />
          <TextField
            className='input-field'
            id='standard-basic'
            label='Confirm Password'
            variant='standard'
          />
        </Box>
        <Button onClick={submit} variant='contained'>
          Send
        </Button>
      </div>
    </Grid>
  );
}
