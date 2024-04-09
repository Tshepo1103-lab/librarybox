'use client'
import React, { useState } from 'react';
import { Input, Card, Form, Select, Button } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';
import { useStyles } from './styles/styles';
import { Ifilter } from '../../Providers/BookProviders/context';
import {  useBookAction, useBookState } from '../../Providers/BookProviders';
import { SearchOutlined } from '@ant-design/icons';
import Link from 'next/link';



const { Meta } = Card;
const {Option}=Select;

const Search: React.FC<SearchProps> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { styles } = useStyles();
  const {searchBooks}=useBookAction();
  const state=useBookState();

  const onFinish=(values:Ifilter)=>{
    if(searchBooks)
      searchBooks(values)
  }

  return (
    <div className={styles.searchContainer}>
      <div>
        <Form
         style={{display:'flex',flexDirection:'row',marginLeft:30}}
         onFinish={onFinish}
         className={styles.searchBox}
          >
          {/* filter */}
          <Form.Item
            name="filterby"
            style={{width:100,marginLeft:30}}
          >
            <Select defaultValue="title">
              <Option value={"title"}>title</Option>
              <Option value={"author"}>author</Option>
              <Option value={"isbn"}>isbn</Option>
              <Option value={"category"}>category</Option>
            </Select>
          </Form.Item>
          {/* search */}
          <Form.Item
            name="filtervalue"
            
          >
            <Input placeholder='search here' style={{width:500,height:30}} onChange={(e)=>setSearchTerm(e.target.value)}/>
          </Form.Item>
          {/* {button} */}
          <Form.Item>
            <Button htmlType='submit'><SearchOutlined /></Button>
          </Form.Item>
        </Form>
      </div>
      { searchTerm !== '' ? (
          <>
          {state.SearchBooks&&state.SearchBooks? (
            <div className={styles.data}>
              {state.SearchBooks&&state.SearchBooks?.map((item,index) => (
                  <Link href={{ pathname: `/catalog/book/${index}` }} key={item.id}>
                    <Card key={item.id} className={styles.searchCard} cover={<img src={item.url} alt="Stack of books" width={200} height={250} />}>
                      <div>
                        <h3 className={styles.title}>{item.title}</h3>
                      </div>
                    </Card>
                  </Link>
                ))}
            </div>
          ) : (
            <div className={styles.container}>
              <br/>
              <h2>No results found</h2>
            </div>
          )
          }
        </>
      ) : (
        // Conditionally render children container only if children are present
        children ? <div className={styles.container}>{children}</div> : null
      )} 
    </div>
  );
};

export default Search;
