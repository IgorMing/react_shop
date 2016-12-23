import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './styles/fonts/fonts.css';
import './styles/reset.module.css';
import styles from './styles/styles.module.css';


import Header from './components/Header';
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import Products from './components/Products';

const root = document.getElementById('root');

class App extends Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.wrapper}>
          <Header className={styles.wrapper} />
          <Navigation className={styles.wrapper} />
        </div>
        <Banner />
        <div className={styles.wrapper}>
          <Products />
        </div>
      </div>
    );
  }
};

ReactDOM.render(<App />, root);
