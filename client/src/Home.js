import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import LandingPage from './components/Pages/LandingPage/LandingPage';
import Login from './components/Pages/Login/Login';
import SignUp from './components/Pages/SignUp/SignUp';

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
        <Route path='/sign-up'>
          <SignUp />
        </Route>
        <Route path='/dashboard'>
         <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
};

export default Home;
