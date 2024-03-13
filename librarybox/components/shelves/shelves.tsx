'use client';
import React from 'react';
import { Card, Space } from 'antd';
import { useStyles } from './styles/style';

const Shelves = () => {
const {styles}=useStyles();
  return (
    <div className={styles.container}>
    <Space className={styles.cardBox}>
    <Card className={styles.card} >
      <h1>Shelf A</h1>
     
    </Card>
    <Card className={styles.card}>
      <h1>Shelf B</h1>
      
    </Card>
    <Card className={styles.card} >
      <h1>Shelf C</h1>
      
    </Card>
    <Card className={styles.card}>
      <h1>Shelf D</h1>
      
    </Card>
   
  </Space>
  </div>
  )
}

export default Shelves;