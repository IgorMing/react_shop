import React from 'react';
import styles from './style.module.css';

export default class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
  			<div className={styles.logo}>
          <a href='#' className={styles.logo__title}>DECOR AUCTION</a>
        </div>
  			<div className={styles.header__section}>
  				<p className='email_text'>
  					If you have any questions, we waiting for your letters:
  					<a href='#' className='email_address'>decorauction@mail.ru</a>
  				</p>
  				<div>
  					<span className={styles.registration}>Registration</span>
            <span>Login</span>
  				</div>
  			</div>
  			{/* <LoginModal />
  			<RegistrationForm /> */}
  		</header>
    );
  }
};
