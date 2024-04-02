import React from 'react';
import { useRouter } from 'next/router';
import { useStyles } from './styles/styles';
import { FacebookOutlined, LinkedinOutlined, InstagramOutlined } from '@ant-design/icons';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const FooterContainer = () => {
  const { styles } = useStyles();
  const pathname = usePathname();

  // Check if the current page is the login page
  const isLoginPage = pathname === '/login';

  // If on the login page, don't render the footer
  if (isLoginPage) {
    return null;
  }

  // If not on the login page, render the footer
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.column}>
        <h1 className={styles.libraryBox}>LibraryBox</h1>
      </div>
      <div className={styles.column}>
        <h5>© {new Date().getFullYear()} LibraryBox. All rights reserved.</h5>
      </div>
      <div className={styles.column}>
        <div>
          <Link href='https://www.facebook.com/' target='_blank'><FacebookOutlined className={styles.socials}/></Link>
          <Link href='https://www.linkedin.com/in/tshepo-mahlangu-592970247/' target='_blank'><LinkedinOutlined className={styles.socials}/></Link>
          <Link href='https://www.instagram.com/' target='_blank'><InstagramOutlined className={styles.socials}/></Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterContainer;
