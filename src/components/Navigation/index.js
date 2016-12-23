import React from 'react';
import styles from './style.module.css';

export default class Header extends React.Component {
  links = [
    {
      id: 1,
      url:  '#',
      name: 'Main'
    },
    {
      id: 2,
      url:  '#',
      name: 'Products'
    },
    {
      id: 3,
      url:  '#',
      name: 'About company'
    },
    {
      id: 4,
      url:  '#',
      name: 'Our achievements'
    },
    {
      id: 5,
      url:  '#',
      name: 'Our contacts'
    }
  ];
  render() {
    return (
      <nav className={styles.navigation}>
        <ul className={styles.items}>
          {this.links.map(link => {
            return <li key={link.id}>
              <a className={styles.item} href={link.url}>{link.name}</a>
            </li>
          }, this)}
        </ul>
      </nav>
    );
  }
};
