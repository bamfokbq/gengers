import React from 'react';
import classes from './Sidebar.module.css';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <>
      <div className={styles.sidebar}>
        <div className={classes.sidebar__header}>
          <p>SUGGESTED ARTICLES</p>
        </div>
        <div className={classes.sidebar__articles}>
          <div className={classes.articles}>
            <p className={classes.article__link}>
              Article heading to be a link
            </p>
            <p className={classes.article__link}>
              Article heading to be a link
            </p>
            <p className={classes.article__link}>
              Article heading to be a link
            </p>
            <p className={classes.article__link}>
              Article heading to be a link
            </p>
            <p className={classes.article__link}>
              Article heading to be a link
            </p>
            <p className={classes.article__link}>
              Article heading to be a link
            </p>
            <p className={classes.article__link}>
              Article heading to be a link
            </p>
            <p className={classes.article__link}>
              Article heading to be a link
            </p>
            <p className={classes.article__link}>
              Article heading to be a link
              Article heading to be a link
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
