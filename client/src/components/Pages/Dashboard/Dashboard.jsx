import React from 'react';
import style from './Dashboard.module.css';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import Content from './Content/Content';
import Sidebar from './Sidebar/Sidebar';

const Dashboard = () => {
  return (
    <main className={style.dashboard}>
      <Header />
      <Navigation />
      <Content />
      <Sidebar />
    </main>
  );
};

export default Dashboard;
