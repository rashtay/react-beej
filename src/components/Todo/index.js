// @flow
import React from 'react';
import logo from 'assets/images/svg/logo.svg';
import styles from './style.module.css';

function Todo() {
  return (
    <div className={styles.container}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />

        <a
          className={styles.appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <main>
        <input type="text" placeholder="Add tasks" />
      </main>
    </div>
  );
}

export default Todo;
