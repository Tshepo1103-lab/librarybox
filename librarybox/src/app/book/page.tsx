'use client'
import React from 'react';
import { Button, Card, Flex, Typography } from 'antd';
import Image from 'next/image';
import { useStyles } from './styles/style';



const Book = () => {
   const{ styles } = useStyles();
  return (
    <>
    <Flex>
    <Card hoverable  className={styles.card}>
    <Flex justify="space-between">
      <Image
        alt="avatar"
        src="/assets/img/bookCover.jpg"
        width={500}
        height={550}
      />
      <Flex vertical align="flex-start" justify="space-between" style={{ padding: 40 }}>
        <h1 className={styles.title}>Waves</h1>
        <h5 className={styles.title}>
        “This new edition of Aristotles Nicomachean Ethics is an accurate, 
        readable and accessible translation of one of the worlds
         greatest ethical works. Based on lectures Aristotle gave 
         in Athens in the fourth century BCE, 
        Nicomachean Ethics is one of the most significant works in moral philosophy,”
        </h5>
        <Button type="primary" href="https://ant.design" target="_blank" className={styles.btn}>
          Borrow
        </Button>
      </Flex>
    </Flex>
  </Card>
  <Card hoverable  className={styles.sidecard}>
  
    
  
</Card>
</Flex>
</>
  )
}

export default Book




