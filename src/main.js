
import 'babel-polyfill';

// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

// Base styling
import styles from './common/base.css';

import Header from './common/components/Header/Header';

const DOM_APP_EL_ID = document.getElementById('main');

export default class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

// Render the router
ReactDOM.render((
  <LoginPage />
), DOM_APP_EL_ID);
