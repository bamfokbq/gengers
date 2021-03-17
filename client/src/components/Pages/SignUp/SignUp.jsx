import React from 'react';
import Features from './Features/Features';
import Form from './Form/Form';
import styles from './SignUp.module.css'


const SignUp = () => {

  return (
    <>
      <p className={styles.header}>Sign up for free and experience a life of fulfillment</p>
      <div className={styles.sign__up}>
        <Features />
        <Form />
      </div>
    </>
  );
};

export default SignUp;
