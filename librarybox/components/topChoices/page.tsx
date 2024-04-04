import React, { useEffect } from 'react';
import data from './topchoice.json'
import { Card } from 'antd';
import Image from 'next/image';
import { useStyles } from './styles/style';
import { useTop, useTopState } from '../../Providers/TopChoiceProvider';

const TopChoice = () => {
    const { styles } = useStyles();
    const status = useTopState();
    const { fetchTopChoice } = useTop();
  
    useEffect(() => {
        if (fetchTopChoice) {
            fetchTopChoice();
        }
    }, []);

    console.log(status.FetchTopchoice);

    return (
        <div className={styles.container}>
            <div className={styles.titlecontainer}>
                <h2 className={styles.title}>Top 5 choices</h2>
            </div>
            <br />
            <div className={styles.cardBox}>
                {status.FetchTopchoice?.map(item => (
                    <Card
                        key={item.id}
                        className={`${styles.searchCard} top-choice-card`}
                        style={{ backgroundImage: `url(${item.url})` }} // Set background image
                    >
                        <div>
                            <h3 >{item.title}</h3>
                            <p>Authors: {item.authors.join(', ')}</p>
                            <p>ISBN: {item.isbn}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default TopChoice;
