import React from 'react';
import styles from './Content.module.css';
// import avatar from '/assets/me.jpg';

const Content = () => {
  return (
    <div className={styles.contents}>
      <div className={styles.content}>
        <div className={styles.image}>
          <img src="" alt='' />
        </div>
        <div className={styles.body}>
          <div className={styles.header}>
            <img src="" alt='' />
            <p>Friday, March 2021</p>
          </div>
          <h5>This is the main title of the article</h5>
          <div className={styles.tags}>
            <span>#academic</span>
            <span>#talent</span>
            <span>#marriage</span>
            <span>#career</span>
            <span>#personal development</span>
          </div>
          <div className={styles.footer}></div>
        </div>
      </div>
    </div>
  );
};

export default Content;
