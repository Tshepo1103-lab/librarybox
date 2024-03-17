'use client'
import React from 'react';
import Shelves from '../../../components/shelves/shelves';
import { useStyles } from './styles/styles';
import Search from '../../../components/Search/search';

const Catalog = () => {
  const{styles}=useStyles();
 
  return (
    <div className={styles.container}>
      <Search/>
    </div>
  )
}

export default Catalog