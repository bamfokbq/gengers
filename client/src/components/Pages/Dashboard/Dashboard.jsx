import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import style from './Dashboard.css';

const Dashboard = () => {
  return (
    <div className={style.Dashboard}>
      <Header />
      <h2>Dashboard</h2>
      <Footer />
    </div>
  );
};

export default Dashboard;
