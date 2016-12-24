import React from 'react';
import Link from 'react-router/lib/Link';
import styles from './style.module.css';

export default class Products extends React.Component {
  items = [
    {
      id: 1,
      imgUrl: './assets/HalloweenCandle.jpg',
      lotName: 'Halloween Candle',
      startPrice: 100.00,
      currency: 'UAH',
      salesman: 'Iryna Lukianchenko',
      category: 'Halloween decoration',
      description: 'Who says your Halloween decor can not be pretty? ... All you need are a couple of such a great candles',
      details: {
        color: 'black',
        material: 'plastic'
      }
    },
    {
      id: 2,
      imgUrl: './assets/pillows.jpg',
      lotName: 'Colorful pillows',
      startPrice: 100.00,
      currency: 'UAH',
      salesman: 'Iryna Lukianchenko',
      category: 'pillows',
      description: 'Decorative throw pillows for your home will make your home more colorful and warm.',
      details: {
        color: 'orange with vertical lines',
        material: 'tricot'
      }
    },
    {
      id: 3,
      imgUrl: './assets/NY_toys.jpg',
      lotName: 'Hand-made new year toys',
      startPrice: 30.00,
      currency: 'UAH',
      salesman: 'Liliia Lukianchenko',
      category: 'New Year decoration',
      description: 'Christmas hand-made toys will be a cute Christmas Ornaments or become a great gift for special person.',
      details: {
        color: 'red',
        material: 'tricot'
      }
    },
    {
      id: 4,
      imgUrl: './assets/HalloweenFrontDoor.jpg',
      lotName: 'Front-door halloween decor',
      startPrice: 150.00,
      currency: 'UAH',
      salesman: 'Elena Ivaschenko',
      category: 'Halloween decoration',
      description: 'Trick and treat your neighbors with these wicked ways to transform your front door, porch, or yard for Halloween.',
      details: {
        color: 'beige',
        material: 'textile'
      }
    }
  ];
  render() {
    return (
      <div className={styles.products}>
        <h2>Products</h2>
        <div className={styles.catalog}>
          {this.items.map(item => {
            console.log(item.imgUrl);
            return (
              <div className={styles.item} key={item.id} to={`${item.id}`}>
                <Link className='' to={`${item.id}`}><img src={item.imgUrl} /></Link>
                <p>Price: {item.startPrice} {item.currency}</p>
                <h3><Link to={`${item.id}`}>{item.lotName}</Link></h3>
                <p>{item.description}</p>
                <Link to={`${item.id}`}>More... </Link>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
