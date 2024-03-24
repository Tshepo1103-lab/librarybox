import React from 'react';
import data from '../Search/template.json';
import { Card } from 'antd';
import Image from 'next/image';
import { useStyles } from './styles/style';

const TopChoice = () => {
    const {styles}=useStyles();
  return (
    <div className={styles.cardBox}>
    <h1>Top choices</h1>
      {data.map(item => (
        <Card key={item.id} className={styles.searchCard} cover={<Image src="/assets/img/book.png" alt="Stack of books" width={240} height={160} />}>
          <div>
            <h3>{item.title}</h3>
            <p>Authors: {item.authors.join(', ')}</p>
            <p>ISBN: {item.isbn}</p>
            <p>Category: {item.category}</p>
            <p>Shelf: {item.shelf}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default TopChoice;
