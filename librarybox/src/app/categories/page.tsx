'use client'
import React, { useEffect } from 'react';
import { Divider, List, Typography } from 'antd';
import { useBook, useBookState,  } from '../../../Providers/BookProviders';



const Category: React.FC = () => {
 const state= useBookState();
 const {fetchCategory}=useBook();
 useEffect(()=>{
      fetchCategory&&fetchCategory('A4F8731C-FF80-495D-6FDB-08DC4718DDEB');
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
          <Typography.Text mark>[ITEM]</Typography.Text> {item.name}
        </List.Item>
      )}
    />
  </>
)};

export default Category;