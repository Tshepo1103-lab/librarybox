'use client'
import React, { useEffect } from 'react';
import { Divider, List } from 'antd';
import { useBook, useBookState,  } from '../../../../../Providers/BookProviders';
import { useStyles } from './styles/style';




const Category= ({params}:{params:{categoryid:string}}) => {
  const {styles}=useStyles(); 
 const state= useBookState();
 const {fetchCategory}=useBook();
 useEffect(()=>{
      fetchCategory&&fetchCategory(params.categoryid);
  },[])
  console.log('state:',state)
return(
  <>
    {/* <Divider orientation="center" ><h2 className={styles.title}>Categories</h2></Divider> */}
    <List
      header={<h2 className={styles.title}>Categories</h2>}
      className={styles.list}
      dataSource={state.BookCategory}
      renderItem={(item) => (
        <List.Item className={styles.items}>
           <h3>{item?.name}</h3>
        </List.Item>
      )}
    />
  </>
)};

export default Category;