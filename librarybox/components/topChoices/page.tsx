import React, { useEffect } from 'react';
import { Card } from 'antd';
import { useStyles } from './styles/style';
import { useTop, useTopState } from '../../Providers/TopChoiceProvider';
import Link from 'next/link';

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
                {status.FetchTopchoice?.map((item,index) => (
                    <Link  href={{ pathname: `/catalog/book/${index}` }}  key={item.id}>
                      <Card
                       
                        className={`${styles.searchCard} top-choice-card`}
                        style={{ backgroundImage: `url(${item.url})` }} // Set background image
                    >
                        <div>
                            <h3 >{item.title}</h3>
                            <p>Authors: {item.authors.join(', ')}</p>
                            <p>ISBN: {item.isbn}</p>
                        </div>
                    </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default TopChoice;
