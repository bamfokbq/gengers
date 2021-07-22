import './Navigation.css';
// import { Link } from 'react-router-dom';
// import { Link, Route } from 'react-router-dom';
// import Login from '../../Login/Login';
// import LandingPage from '../../Pages/LandingPage/LandingPage';


const Navigation = () => {
  return (
    <nav className='navigation'>
      <ul>
        <li>
          <a className='navigation__link' href='/'>
            Home
          </a>
        </li>
        <li>
          <a className='navigation__link' href='/login'>
            Login
          </a>
        </li>
        <li>
          <a className='navigation__link' href='/mentor'>
            Become a mentor
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
