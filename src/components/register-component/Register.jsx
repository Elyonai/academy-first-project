import React from 'react';
import TextField from '@mui/material/TextField';
//import './Register.scss';

export default function Register() {
  return (
    <div>
      <TextField
        className='input-field'
        id='name'
        label='Name'
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
    </div>
  );
}
