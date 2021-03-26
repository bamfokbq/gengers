import React from 'react';
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';
import { FcHome } from 'react-icons/fc';
import { FcReadingEbook } from 'react-icons/fc'
import { FcCollaboration } from 'react-icons/fc';
import { FcAbout } from 'react-icons/fc';
import { FcConferenceCall } from 'react-icons/fc';

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <Link to='/resources' className={styles.navigation__link}>
        <FcHome style={{ fontSize: '2vw' }} />
        <p className='navigation__name'>Home</p>
      </Link>
      <Link to='/resources' className={styles.navigation__link}>
        <FcReadingEbook style={{ fontSize: '2vw' }} />
        <p className='navigation__name'>Resources</p>
      </Link>
      <Link to='/chat' className={styles.navigation__link}>
        <FcCollaboration style={{ fontSize: '2vw' }} />
        <p className='navigation__name'>Chat</p>
      </Link>
      <Link to='/mentors' className={styles.navigation__link}>
        <FcConferenceCall style={{ fontSize: '2vw' }} />
        <p className='navigation__name'>Mentors</p>
      </Link>
      <Link to='/about' className={styles.navigation__link}>
        <FcAbout style={{ fontSize: '2vw' }} />
        <p className='navigation__name'>About</p>
      </Link>
    </div>
  );
};

export default Navigation;
