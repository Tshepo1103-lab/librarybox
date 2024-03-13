'use client';

import React from 'react';

import {useStyles} from './styles/styles'
import Link from 'next/link';




const NavBar = () => {
  const {styles}=useStyles();
  return (
    <nav className={styles.navContainer}>
        <div>
        <h2>LibraryBox</h2>
        </div>

        <div className={styles.list}>
          <Link href ="/"> <span className={styles.items}>Home </span></Link>
          <Link href ="/catalog"> <span className={styles.items}>Catalogue</span> </Link>
          <Link href =""> <span className={styles.items}>About</span> </Link>
          <Link href =""> <span className={styles.items}>Contact</span></Link>
        </div>


        <div>
            <h4>Hi Mpho!</h4>
        </div>
    </nav> 
    
  )
}

export default NavBar