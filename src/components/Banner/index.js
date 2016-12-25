import React from 'react';
import styles from './style.module.css';
import BannerImage from './decor_main.jpg'

export default class Header extends React.Component {
  render() {
    return (
      <div className={styles.banner}>
        <div className={styles.item}>
          <img className={styles['banner-image']} src={BannerImage} alt='banner' />
          <h2 className={styles.title}>Home decor for your price</h2>
        </div>
      </div>
    )
  }
}
