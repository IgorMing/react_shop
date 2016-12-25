import React from 'react';
import styles from './style.module.css';

export default class Achivements extends React.Component {
  render() {
    return (
      <div className={styles.company}>
        <h2 className={styles.title}>OUR ACHIEVEMENTS:</h2>
        <p>
          Our product line is a reflection of the things we enjoy and would want to have in our own home. We love hand-made decor and know how it' hard to create it to our own; we always try to gather different products in order to make our homes ready not only on different holidays and celebrations, but also to be creative and sweet every day and hour. We try to bring a piece that can be visually enjoyed at avery moment.
        </p>
      </div>
    )
  }
}
