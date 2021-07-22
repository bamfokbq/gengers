import React from 'react';
import style from './Dashboard.module.css';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import Sidebar from './Sidebar/Sidebar';

const Dashboard = () => {
  return (
    <main className={style.layout}>
      <div className={style.dashboard}>
        <Header />
        <Navigation />
        <Sidebar />
      </div>
    </main>
  );
};

export default Dashboard;
