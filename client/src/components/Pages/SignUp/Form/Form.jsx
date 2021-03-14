import React, { useState } from 'react';
import styles from './Form.module.css';
import {
  Person,
  Lock,
  DateRange,
  Wc,
  Email,
  ContactPhone,
  Public,
  Category,
  Image,
  PermIdentity,
} from '@material-ui/icons';
import classes from './Form.module.css';
// import {Container} from '@material-ui/core'

const Form = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    contactNumber: '',
    region: '',
    fieldOfInterest: '',
    profilePicture: '',
    userName: '',
    password: '',
    confirmPassword: '',
  });

  return (
    <section className={styles.form__container}>
      <div className={styles.Form}>
        <form>
          <div className={styles.form__box}>
            <Person
              style={{
                color: '#14213D',
                fontSize: '30px',
              }}
            />
            <input
              type='text'
              value={userInfo.firstName}
              onChange={(e) =>
                setUserInfo({ ...userInfo, firstName: e.target.value })
              }
              placeholder='First name'
            />
          </div>
          <div className={styles.form__box}>
            <Person
              style={{
                color: '#14213D',
                fontSize: '30px',
              }}
            />
            <input
              type='text'
              value={userInfo.middleName}
              onChange=''
              placeholder='Middle name'
            />
          </div>
          <div className={styles.form__box}>
            <Person
              style={{
                color: '#14213D',
                fontSize: '30px',
              }}
            />
            <input
              type='text'
              value={userInfo.lastName}
              onChange=''
              placeholder='Last name'
            />
          </div>
          <div className={styles.form__box}>
            <DateRange
              style={{
                color: '#14213D',
                fontSize: '30px',
              }}
            />
            <input
              type='date'
              value={userInfo.dateOfBirth}
              onChange=''
              placeholder='Date of birth'
            />
          </div>
          <div className={styles.form__box}>
            <Wc
              style={{
                color: '#14213D',
                fontSize: '30px',
              }}
            />
            <div className='gender__element'>
              <label for='female'>Female</label>
              <input
                type='radio'
                id='female'
                name='gender'
                value={userInfo.gender}
              />
            </div>
            <div className='gender-element'>
              <label for='male'>Male</label>
              <input
                type='radio'
                id='male'
                name='gender'
                value={userInfo.gender}
              />
            </div>
          </div>
          <div className={styles.form__box}>
            <Email
              style={{
                color: '#14213D',
                fontSize: '30px',
              }}
            />
            <input
              type='email'
              value={userInfo.email}
              onChange=''
              placeholder='Email'
            />
          </div>
          <div className={styles.form__box}>
            <ContactPhone
              style={{
                color: '#14213D',
                fontSize: '30px',
              }}
            />
            <input
              type='tel'
              value={userInfo.contactNumber}
              onChange=''
              placeholder='Contact number'
            />
          </div>
          <div className={styles.form__box}>
            <Public
              style={{
                color: '#14213D',
                fontSize: '30px',
              }}
            />
            <input
              type='text'
              value={userInfo.region}
              onChange=''
              placeholder='Region'
            />
          </div>
          <div className={styles.form__box}>
            <Category
              style={{
                color: '#14213D',
                fontSize: '30px',
              }}
            />
            <input
              type='text'
              value={userInfo.fieldOfInterest}
              onChange=''
              placeholder='Field of interest'
            />
          </div>
          <div className={styles.form__box}>
            <Image
              style={{
                color: '#14213D',
                fontSize: '30px',
              }}
            />
            <input
              alt={userInfo.username}
              value={userInfo.profilePicture}
              onChange=''
              type='file'
              name='avatar'
              accept='image/png, image/jpeg'
            />
          </div>
          <div className={styles.form__box}>
            <PermIdentity
              style={{
                color: '#14213D',
                fontSize: '30px',
              }}
            />
            <input
              type='text'
              value={userInfo.userName}
              onChange=''
              placeholder='Create a username'
            />
          </div>
          <div className={styles.form__box}>
            <Lock
              style={{
                color: '#14213D',
                fontSize: '30px',
              }}
            />
            <input
              type='password'
              value={userInfo.password}
              onChange=''
              placeholder='Create password'
            />
          </div>
          <div className={styles.form__box}>
            <Lock
              style={{
                color: '#14213D',
                fontSize: '30px',
              }}
            />
            <input
              type='password'
              value={userInfo.confirmPassword}
              onChange=''
              placeholder='Confirm password'
            />
          </div>

          <div className={classes.submit__btn}>
            <input type='submit' value='Create New Account' />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
