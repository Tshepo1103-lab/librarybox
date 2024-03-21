'use client';
import React, { useEffect, useState } from 'react';
import { Card, Space } from 'antd';
import { useStyles } from './styles/style';
import { useBookAction, useBookState } from '../../Providers/BookProviders';
import { useRouter } from 'next/navigation';


const Shelves = () => { 
  const router=useRouter();

  const action:any=useBookAction();
  const status:any=useBookState();
  const { styles } = useStyles();

 
  console.log( console.log(status+"checking"))
  useEffect(()=>{
    action.fetchData();
   
  },[])
  
  return (
    <div className={styles.container}>
      <Space className={styles.cardBox}>
        {Object.keys(status).map((item:any, index:any) => (
          <Card className={styles.card} key={index} onClick={()=>router.push(`/catalog/${status[item].id}`)}>
            <h1>{status[item].name}</h1>
          </Card>
        ))}
      </Space>
    </div>
  );
};

export default Shelves;
