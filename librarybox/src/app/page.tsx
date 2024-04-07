'use client'
import React, { useEffect } from 'react';
import styles from "./page.module.css";
import { Button } from "antd";
import { useConfig, useConfigState } from '../../Providers/ConfigProvider';

export default function Home() {
  var haveToken = localStorage.getItem("token") == null ? false : true; 
  const state = useConfigState();
  const { fetchConfig } = useConfig();

  useEffect(() => {
    fetchConfig && fetchConfig();
    
  },[]);
  useEffect(()=>{
    
      if (state.FetchConfig) {
          const ConfigData = [state.FetchConfig[0]];
          localStorage.setItem('Config', JSON.stringify(ConfigData));
      } 
  },[state])

  // console.log(state.FetchConfig);

  return (
    <main className={styles.main}>
      {/* Content */}
      {state.FetchConfig?.map(item=> (
        <div className={styles.column} key={item.name}>
        <div className={styles.content}>
          <h1></h1>
          <h1>{item?.welcomeMessage}</h1>
          <h3>{item?.aboutMessage}</h3>
        </div>
      </div>
      ))}
      {/* Trading Hours */}
      <div className={styles.column}>
        <div className={styles.tradingHours}>
          <h4>Plan your visit</h4>
          <ul>
            <li>Weekdays: 07:30 - 22:00</li>
            <li>Saturday: 08:00 - 15:00</li>
          </ul>
        </div>
        {haveToken === false ?
          <div className={styles.buttonContainer}>
            <Button href="/login" className={styles.twobutton}>Sign In</Button>
            <Button href="/register" className={styles.twobutton}>Sign Up</Button>
          </div> : null
        }
      </div>
    </main>
  );
}
