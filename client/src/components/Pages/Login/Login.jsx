import React, { useState } from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';
// import Header from '../../Header/Header';
import { Person , Lock} from '@material-ui/icons'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(`Username: ${username} == Password: ${password}`);

    setUsername('');
    setPassword('');
  };

  return (
    <main className={styles.Content}>
      {/*<Header />*/}
      <div className={styles.Login}>
        <p className={styles.login__header}>Login to your account</p>
        <div className='form'>
          <form onSubmit={handleSubmit}>
            <div className={styles.FormWhite}>
              <div className={styles.FormBox}>
                <Person style={{ color: '#14213D', fontSize: '30px', marginRight:'1px solid red' }} />
                <input
                  type='text'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder='Username'
                  autoComplete='off'
                />
              </div>
              <div className={styles.FormBox}>
                <Lock style={{ color: '#14213D', fontSize: '30px' }} />
                <input
                  type='password'
                  autoComplete='off'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Password'
                />
              </div>
              <Link to='/dashboard'>
               <input type='submit' value='Log In' className={styles.SubmitBtn} />
</Link>
               <div className={styles.sign_up}>
              <p>New to Gengers?</p>
               <Link to='/sign-up' className={""}>
          Sign-up
        </Link>
               </div>
            </div>
          </form>
        </div>
      </div>
      <footer>
       
      </footer>
    </main>
  );
};

export default Login;
