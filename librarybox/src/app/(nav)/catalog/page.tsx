'use client'
import React from 'react';
import Search from '../../../../components/Search/search';
import { useStyles } from './styles/style';
import withAuth from '../../../../Hoc/withAuth';

const Catalog = () => {
const {styles}=useStyles();
   return(
    <div className={styles.main}>
      <Search/>
    </div>
   ) 
}

export default withAuth(Catalog)