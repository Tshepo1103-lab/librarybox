'use client'
import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import styles from "./page.module.css";
import { Button } from "antd";
import Image from 'next/image';
import Book from '../../public/assets/img/roman.jpg'; 

export default function Home() {
  
  var haveToken = localStorage.getItem("token") == null ? false : true; 
 

  return (
    <main className={styles.main}>
      {/* Content */}
      <div className={styles.column}>
        <div className={styles.content}>
          <h1></h1>
          <h1>Welcome Siyakwamukela!</h1>
          <h3>A Library for the community established in 1950</h3>
        </div>
      </div>

      {/* Trading Hours */}
      <div className={styles.column}>
        <div className={styles.tradingHours}>
          <h4>Trading Hours</h4>
          <ul>
            <li>Weekdays: 07:30 - 22:00</li>
            <li>Saturday: 08:00 - 15:00</li>
          </ul>
        </div>
        {haveToken===false?
        <div className={styles.buttonContainer}>
        <Button href="/login" className={styles.twobutton}>Sign In</Button>
        <Button href="/register" className={styles.twobutton}>Sign Up</Button>
      </div>:null}
      </div>
    </main>
  );
}
