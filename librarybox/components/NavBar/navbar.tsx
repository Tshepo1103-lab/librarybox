'use client';

import React from 'react';
import {useStyles} from './styles/styles'
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const navLinks=[
  {name:"Home",href:"/"},
  {name:"Catalogue",href:"/catalog"},
  {name:"About",href:"/about"},
  {name:"Contact",href:"/contact"},
];

const NavBar = () => {
  const pathname=usePathname();
  const {styles}=useStyles();
  return (
    <nav className={styles.navContainer}>
        <div>
        <h1>LibraryBox</h1>
        </div>
        <div className={styles.list}>
        {navLinks.map((link)=>{
          const isActive=pathname.startsWith(link.href);
          return(
            <Link href={link.href} key={link.name}>
              <span className={styles.items}>{link.name}</span>
            </Link>
          );
        })}
        </div>
        <div>
            <Link href="/login" className={styles.items}>Login</Link>
        </div>
    </nav> 
    
  )
}

export default NavBar