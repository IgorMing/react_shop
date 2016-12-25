import React from 'react';
import Link from 'react-router/lib/Link';
import styles from './style.module.css';

import data from './data.json';

export default class Products extends React.Component {
  render() {
    return (
      <div className={styles.products}>
        <h2>Products</h2>
        <div className={styles.catalog}>
          {data.map(item => (
            <div className={styles.item} key={item.id} to={`${item.id}`}>
              <Link className={styles['product-link']} to={`${item.id}`}><img src={require(item.imgUrl)} /></Link>
              <p>Price: {item.startPrice} {item.currency}</p>
              <h3><Link to={`${item.id}`}>{item.lotName}</Link></h3>
              <p>{item.description}</p>
              <Link to={`${item.id}`}>More... </Link>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
