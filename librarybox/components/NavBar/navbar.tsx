'use client';

import React,{useState} from 'react';
import {useStyles} from './styles/styles'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserOutlined,LogoutOutlined } from '@ant-design/icons';
import { Drawer,Button } from 'antd';

const navLinks=[
  {name:"Home",href:"/"},
  {name:"Catalogue",href:"/catalog"},
  {name:"About",href:"/about"},
  {name:"Contact",href:"/contact"},
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

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
            <Button onClick={showDrawer} className={styles.items}>
                <UserOutlined />
               
              </Button>
              <Drawer title="Profile" onClose={onClose} open={open}>
                <div className={styles.drawerItems}>
                <p>Tshepo</p>
                <p>Mahlangu</p>
                <p>tshepo1103@gmail.com</p>
                <Link href="/">Account Settings</Link>
                </div>
                <div>
                  <h4 className={styles.logout}><LogoutOutlined />  Logout</h4>
                </div>            
              </Drawer>
        </div>
    </nav> 
    
  )
}

export default NavBar