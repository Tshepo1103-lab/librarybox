'use client'
import React, { useEffect } from 'react';
import { Divider, List, Typography } from 'antd';
import { useBook, useBookState,  } from '../../../../../Providers/BookProviders';




const Category= ({params}:{params:{categoryid:string}}) => {
   
 const state= useBookState();
 const {fetchCategory}=useBook();
 useEffect(()=>{
      fetchCategory&&fetchCategory(params.categoryid);
  },[])
  console.log('state:',state)
return(
  <>
    <Divider orientation="left">Categories</Divider>
    <List
      header={<div>Shelf A</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={state.BookCategory}
      renderItem={(item) => (
        <List.Item>
           {item?.name}
        </List.Item>
      )}
    />
  </>
)};

export default Category;