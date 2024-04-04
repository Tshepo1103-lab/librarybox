import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useStyles } from './styles/styles';
import { FacebookOutlined, LinkedinOutlined, InstagramOutlined } from '@ant-design/icons';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useConfigState } from '../../Providers/ConfigProvider';
import { IConfig } from '../../Providers/ConfigProvider/context';
import { useReducer } from "react";
import { ConfigReducer } from '../../Providers/ConfigProvider/reducer';
import { ConfigAction } from '../../Providers/ConfigProvider/actions';

const FooterContainer = () => {
  const { styles } = useStyles();

  const pathname = usePathname();
  const state = useConfigState();
  const [s, dispatch]=useReducer(ConfigReducer,state);

  const title = s.FetchConfig && s.FetchConfig[0] && s.FetchConfig[0].name;

  const color = state.FetchConfig && state.FetchConfig[0] && state.FetchConfig[0].primaryColor;

  useEffect(()=>{
    console.log('test1')
    if(localStorage.getItem('Config') ){
      console.log('test2')
      const ans = localStorage.getItem('Config');
      const newtypeAns:IConfig[] = ans? JSON.parse(ans): [];
  console.log('NewState',newtypeAns)
      dispatch(ConfigAction(newtypeAns));
      const dataConfig: IConfig[] = ans ? JSON.parse(ans) : [];

    }
  },[state])
  console.log(state.FetchConfig,'state in comonent fooyrt',title)

  // Check if the current page is the login page
  const isLoginPage = pathname === '/login';

  // If on the login page, don't render the footer
  if (isLoginPage) {
    return null;
  }

  // If not on the login page, render the footer


  return (
    <footer className={styles.footerContainer} style={{backgroundColor: color}}>
      <div className={styles.column}>
        <h1 className={styles.libraryBox}>{title}</h1>
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
