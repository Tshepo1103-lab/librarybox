import React from 'react';
import data from '../topChoices/topchoice.json';
import { Card } from 'antd';
import Image from 'next/image';
import { useStyles } from './styles/style';


const UpcomingBook = () => {
    const {styles}=useStyles();

  return (
    <div className={styles.container}>
    <div className={styles.titlecontainer}>
    <h2 className={styles.title}>Upcoming Books</h2>
    </div>
    <br/>
    <div className={styles.cardBox}>
      {data.map(item => (
        <Card key={item.id} className={styles.searchCard} >
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
    </div>
  );
};

export default UpcomingBook;
