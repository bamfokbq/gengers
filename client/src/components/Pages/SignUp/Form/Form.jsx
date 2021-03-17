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
import Card from '@material-ui/core/Card';
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

  const regionsInGhana = [
    'Select Region',
    'Greater Accra Region',
    'Western Region',
    'Greater Ashanti Region',
    'Central Region',
    'Eastern Region',
    'Northern Region',
    'Upper East Region',
    'Upper West Region',
    'Volta Region',
    'Brong Ahafo Region',
    'Oti Region',
    'Western North Region',
    'North East Region',
    'Savannah Region',
    'Bono East Region',
    'Ahafo Region',
  ];

  const clearField = () => {
    setUserInfo({
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
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(userInfo);
    clearField();
  };

  return (
    <Card className={styles.form__container}>
      <div className={styles.Form}>
        <form onSubmit={handleSubmit}>
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
              onChange={(event) =>
                setUserInfo({
                  ...userInfo,
                  firstName: event.target.value,
                })
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
              onChange={(event) =>
                setUserInfo({
                  ...userInfo,
                  middleName: event.target.value,
                })
              }
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
              onChange={(event) =>
                setUserInfo({
                  ...userInfo,
                  lastName: event.target.value,
                })
              }
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
              onChange={(event) =>
                setUserInfo({
                  ...userInfo,
                  dateOfBirth: event.target.value,
                })
              }
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
            <label className={`${classes.radio} ${classes.radio__gradient}`}>
              <span className={classes.radio__input}>
                <input type='radio' name='radio' />
                <span className={classes.radio__control}></span>
                <span className={classes.radio__label}>Male</span>
              </span>
            </label>
            <label className={`${classes.radio} ${classes.radio__before}`}>
              <span className={classes.radio__input}>
                <input type='radio' name='radio' />
                <span className={classes.radio__control}></span>
                <span className={classes.radio__label}>Female</span>
              </span>
            </label>
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
              onChange={(event) =>
                setUserInfo({
                  ...userInfo,
                  email: event.target.value,
                })
              }
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
              onChange={(event) =>
                setUserInfo({
                  ...userInfo,
                  contactNumber: event.target.value,
                })
              }
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
            <div className={classes.form__selection}>
              <label>
                <select
                  value={userInfo.region}
                  required
                  onChange={(event) =>
                    setUserInfo({
                      ...userInfo,
                      region: event.target.value,
                    })
                  }>
                  {regionsInGhana.map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </label>
            </div>
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
              onChange={(event) =>
                setUserInfo({
                  ...userInfo,
                  fieldOfInterest: event.target.value,
                })
              }
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
              onChange={(event) =>
                setUserInfo({
                  ...userInfo,
                  profilePicture: event.target.value,
                })
              }
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
              onChange={(event) =>
                setUserInfo({
                  ...userInfo,
                  userName: event.target.value,
                })
              }
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
              onChange={(event) =>
                setUserInfo({
                  ...userInfo,
                  password: event.target.value,
                })
              }
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
              onChange={(event) =>
                setUserInfo({
                  ...userInfo,
                  confirmPassword: event.target.value,
                })
              }
              placeholder='Confirm password'
            />
          </div>

          <div className={classes.submit__btn}>
            <input type='submit' value='Create New Account' />
          </div>
        </form>
      </div>
    </Card>
  );
};

export default Form;
