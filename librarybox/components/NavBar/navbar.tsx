import React, { useState } from 'react';
import { useStyles } from './styles/styles';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Drawer, Button } from 'antd';
import Image from 'next/image'; 
import BookNestLogo from '../../public/assets/img/lib.png'; 
import { useUser } from '../../Providers/LoginProviders';

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Catalogue", href: "/catalog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { styles } = useStyles();
  const {logOutUser} =useUser();
  
  return (
    <nav className={styles.navContainer}>
      <div>
        
          <a><Image className={styles.img} src={BookNestLogo} alt="BookNest Logo" /></a>
  
      </div>
      <div className={styles.list}>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link href={link.href} key={link.name}>
              <span className={`${styles.items} ${isActive ? styles.active : ''}`}>{link.name}</span>
            </Link>
          );
        })}
      </div>
      <div>
        <Button onClick={() => setOpen(true)} style={{ backgroundColor: 'transparent'}}>
          <UserOutlined />
        </Button>
        <Drawer title="Profile" onClose={() => setOpen(false)} open={open}>
          <div className={styles.drawerItems}>
            <p>Tshepo</p>
            <p>Mahlangu</p>
            <p>tshepo1103@gmail.com</p>
            <Link href="/">Account Settings</Link>
          </div>
          <div  className={styles.logout}>
            <Button onClick={logOutUser}><LogoutOutlined />  Logout</Button>
          </div>
        </Drawer>
      </div>
    </nav>
  )
}

export default NavBar;
