import React from 'react';
import Link from 'react-router/lib/Link';

import styles from './style.module.css';
import sprites from './sprites.module.css';

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
            <Link>
              <i className={`${ sprites.sprite } ${sprites['facebook']}`} />
            </Link>
            <Link>
              <i className={`${ sprites.sprite } ${sprites['instagram']}`} />
            </Link>
            <Link>
              <i className={`${ sprites.sprite } ${sprites['twitter']}`} />
            </Link>
          </div>
        </div>
      </footer>
    )
  }
}
