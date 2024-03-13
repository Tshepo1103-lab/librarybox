// import React from 'react';
// import styles from './footer.module.css';
import { useStyles } from './styles/styles';


const FooterContainer = () => {
  const {styles}=useStyles();
  return (
    <footer className={styles.footerContainer}>
      <h5>Quick Links</h5>
      </footer>
  )
}

export default FooterContainer;