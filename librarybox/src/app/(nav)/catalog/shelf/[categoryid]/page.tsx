'use client'
import React, { useEffect } from 'react';
import { List } from 'antd';
import { useBook, useBookState,  } from '../../../../../../Providers/BookProviders'
import { useStyles } from './styles/style';
import Link from 'next/link';



const Category=({ params}:{params:{categoryid:string}}) => {
  const {styles}=useStyles(); 
 const state= useBookState();
 const {fetchCategory}=useBook();
 useEffect(()=>{
      fetchCategory&&fetchCategory(params.categoryid);
  },[]);
return(
  <div className={styles.main}>
    <div>
    <h1 className={styles.title}>Categories</h1>
    <List
      className={styles.list}
      dataSource={state.BookCategory}
      renderItem={(item) => (

        <Link href={{ pathname: `/catalog/showbooks/${item.id}` }} key={item.id}>
        <List.Item className={styles.items}>
           <h3 className={styles.itemText}>{item?.name}</h3>
        </List.Item>
        </Link>
      )}
    />
    </div>
     
  </div>
)};

export default Category;