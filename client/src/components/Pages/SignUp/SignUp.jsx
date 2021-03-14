import React from 'react';
import Features from './Features/Features';
import Form from './Form/Form';
import styles from './SignUp.module.css'


const SignUp = () => {

  return (
    <div className={styles.sign__up}>
      <Features />
      <Form />
    </div>
  );
};

export default SignUp;
