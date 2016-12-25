import React from 'react';
import styles from './style.module.css';

export default class CompanyDesciption extends React.Component {
  render() {
    return (
      <div className={styles.company}>
        <h2 className={styles.title}>ABOUT COMPANY</h2>
        <p>
          All our hearts are in home, so why not to fill them with beautiful and unique home decor items that you love. We believe that choosing the best handmade home decor items for your houses goes a long way toward making it a sweet home.
        </p>
        <p>
          More than anything else in your home, your accessories in each and every room reveal a little bit of your personality. There’s nothing better to help reflect your tastes and those of your family. Simply stated, a home without accessories is like food without seasoning.
        </p>
        <p>
          Add some charm to your home with our line of personalized napkins, handmade towels and unique onesies. To get your handmade home decor, contact us today!
        </p>
      </div>
    )
  }
}
