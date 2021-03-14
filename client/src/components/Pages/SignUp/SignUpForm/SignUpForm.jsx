import React from 'react';
import {
  FormControl,
  InputLabel,
  FormHelperText,
  Input,
} from '@material-ui/core';
import classes from './SignUpForm.module.css';

const SignUpForm = () => {
  return (
    <form>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor='my-input'>Email address</InputLabel>
        <Input id='my-input' aria-describedby='my-helper-text' />
        <FormHelperText id='my-helper-text'>
          We'll never share your email.
        </FormHelperText>
      </FormControl>
    </form>
  );
};

export default SignUpForm;
