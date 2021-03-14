import React from 'react';
import Divider from '../../UI/Divider/Divider';
import Button from '../../utilities/Button/Button';
import LandingContent from './LandingContent/LandingContent';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './LandingPage.css';

import ui from './mentor.svg';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <main className='landing-page'>
      <Header />
      <div className='welcome-page'>
        <div className='page'>
          <div className='welcome-quote'>
            <p>
              <q>
                Our chief want in life is somebody who will make us do what we
                can.
              </q>
              — Ralph Waldo Emerson
            </p>
          </div>
          <div className='welcome-message'>
            <h3>
              <mark>Connect</mark> without <mark>limit</mark> with
              <mark className='margin'>a</mark>
              mentor
            </h3>
          </div>
          <Link to='/login'>
            <Button name='CHAT WITH A MENTOR' bgColor='btn-secondary' />
          </Link>
        </div>

        <div className='interface'>
          <img src={ui} alt='Landing interface' />
        </div>
      </div>
      <Divider />
      <LandingContent />
      <Footer />
    </main>
  );
};

export default LandingPage;
