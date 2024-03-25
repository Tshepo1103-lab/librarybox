'use client'
import React from 'react';
import Search from '../../../../components/Search/search';
import { useStyles } from './styles/style';
import withAuth from '../../../../Hoc/withAuth';
import TopChoice from '../../../../components/topChoices/page';

const Catalog = () => {
const {styles}=useStyles();
   return(
    <div className={styles.main}>
      <Search/>
      <TopChoice/>
   
    </div>
   ) 
}

export default withAuth(Catalog)