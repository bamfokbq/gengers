import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import LandingPage from './components/Pages/LandingPage/LandingPage';
import Login from './components/Pages/Login/Login';
import SignUp from './components/Pages/SignUp/SignUp';
import Resources from './components/Pages/Resources/Resources';
import Mentors from './components/Pages/Mentors/Mentors';
import Chat from './components/Pages/Chat/Chat';
import About from './components/Pages/About/About';



const Home = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/resources'>
          <Resources />
        </Route>
        <Route path='/mentors'>
          <Mentors />
        </Route>
        <Route path='/sign-up'>
          <SignUp />
        </Route>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
        <Route path='/chat'>
          <Chat />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </Router>
  );
};

export default Home;
