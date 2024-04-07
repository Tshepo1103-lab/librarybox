
'use client'
import React from 'react';
import { useStyles } from './styles/style';

const About: React.FC = () => {
  // Dummy data
  const teamMembers = [
    { id: 1, name: 'John Doe', position: 'Librian', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, name: 'Jane Smith', position: 'Librarian', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 3, name: 'Alice Johnson', position: 'Owner', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  ];
const {styles}=useStyles();
  return (
    <div className={styles.main}>
      <div className={styles.bookcontainer}>
      <div className={styles.container}>
      <h1 className={styles.header}>About Us</h1>
      <br/>
      <p>Welcome to our Library! Heres a brief introduction to our team:</p>
      <br/>
      <div className={styles.team}>
        {teamMembers.map(member => (
          <div key={member.id} className={styles.member}>
            <h2>{member.name}</h2>
            <p><strong>{member.position}</strong></p>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
      <p className={styles.paragraph} >Welcome to our library system, where knowledge meets curiosity and learning knows no bounds. Our library is more than just a collection of books; its a hub of 
      inspiration, exploration, and discovery. With a diverse range of resources spanning various genres, subjects, and formats, we cater to readers of all ages and interests. Whether youre
         seeking literary classics, cutting-edge research, or immersive storytelling, our library is here
          to ignite your imagination and fuel your intellectual journey. Join us in fostering a community
           of lifelong learners, where every page turned opens new horizons and every visit leaves you enriched with knowledge and inspiration</p>
    </div>
      </div>
    </div>
  );
};

export default About;
