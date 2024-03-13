'use client'
import React from 'react';
import Shelves from '../../../components/shelves/shelves';
import { useStyles } from './styles/styles';
import { Input, Space } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';

const Catalog = () => {
  const{styles}=useStyles();
  const { Search } = Input;
  const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
  return (
    <div>
      <div className={styles.searchContainer}>
      <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      onSearch={onSearch}
      className={styles.searchBox}/>
      </div>
      <div className={styles.container}>
        <h2>Explore the shelves</h2>
        <br/>
        <div>
        <Shelves/>
        </div>
      </div>  
    </div>
  )
}

export default Catalog