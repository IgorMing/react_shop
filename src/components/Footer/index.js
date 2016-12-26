import React from 'react';
import Link from 'react-router/lib/Link';
import SVG from 'svg-inline-react';

import styles from './style.module.css';
import facebook from '!!svg-inline!./facebook.svg';
import instagram from '!!svg-inline!./instagram.svg';
import twitter from '!!svg-inline!./twitter.svg';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className='styles.contacts'>
            <p>Contacts:</p>
            <p>Phone-number: 0 (800) 000 00 00</p>
            <p>E-mail: decorauction@mail.ru</p>
          </div>
          <div className='styles.social'>
            <p>Social pages</p>
            <Link className={styles.icon}>
              <SVG src={facebook} />
            </Link>
            <Link className={styles.icon}>
              <SVG src={instagram} />
            </Link>
            <Link className={styles.icon}>
              <SVG src={twitter} />
            </Link>
          </div>
        </div>
      </footer>
    )
  }
}
