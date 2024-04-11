'use client'
import React, { useEffect, useState } from 'react';
import { Button, Card, Flex, message, Result,DatePicker } from 'antd';
import {Image as AntdImage} from 'antd';
import { useStyles } from './styles/style';
import { useTransaction, useTransactionState } from '../../../../../../Providers/TransactionProvider';
import { EyeOutlined } from '@ant-design/icons';
import { useLoginState, useUser} from '../../../../../../Providers/LoginProviders'
import { toString } from 'lodash';
import { BookContext } from '../../../../../../Providers/BookProviders/context';
import { useBook, useBookAction, useBookState } from '../../../../../../Providers/BookProviders';


const Book = ({ params }: { params: { bookId: string } }) => {
    const { styles } = useStyles();
    const states = useBookState();
    const {fetchBook} =useBook();
    const { createtransaction } = useTransaction();
    const [dueDate, setDueDate] = useState<Date | null>(null);
    const state = useLoginState();

    useEffect(() => {
        if(fetchBook)
            fetchBook(params.bookId)
    }, []);

    const handleClick = async () => {
        const checkoutDate = new Date();
    
        // Convert dueDate and returnedDate to formatted strings
        const formattedDueDate = dueDate ? dueDate.toISOString().slice(0, 10) : null;
        const formattedReturnedDate = new Date().toISOString().slice(0, 10); // Assuming book has not been returned yet
    
        // Create a new transaction object
        const transaction = {
            CheckOutDate: checkoutDate.toISOString().slice(0, 10), // Format checkoutDate to string in 'YYYY-MM-DD' format
            DueDate: formattedDueDate,
            ReturnedDate: formattedReturnedDate,
            BookId: states.FetchBook?.id,
            UserId: toString(state.currentUser?.id),
            status: 0
        };
    
        if (createtransaction) {
            createtransaction(transaction);
        }
    };
    
    return (
        <div className={styles.main}>
            <Flex>
                <div className={styles.bookcontainer}>
                    <Flex justify="space-between">
                        <img src={states.FetchBook?.url} alt="Stack of books" width={300} height={250} className={styles.imageContainer} />
                        <Flex vertical align="flex-start" justify="space-between" style={{ padding: 40 }}>
                            <h1 className={styles.title}>{states?.FetchBook?.title}</h1>
                            <p className={styles.paragraph}>{states?.FetchBook?.description}</p>
                            <DatePicker
                                className={styles.input}
                                style={{ marginBottom: 16 }}
                                onChange={(date) => setDueDate(date ? new Date(date.toString()) : null)} // Parse the date to Date object
                                placeholder="Select due date"
                            />
                            <Button type="primary" onClick={handleClick} className={styles.btn}>Borrow</Button>
                            <div className={styles.findContainer}>
                                <h3 className={styles.find}><EyeOutlined /> Find in Library</h3>
                                <p className={styles.findparagraph}>Shelf B, Architecture</p>
                            </div>
                            <div>
                                <h2 className={styles.detailsTitle}>More details...</h2>
                                <p>ISBN: {states.FetchBook?.isbn}</p>
                                <p>Authors: {states.FetchBook?.authors}</p>
                            </div>
                        </Flex>
                    </Flex>
                </div>
            </Flex>
        </div>
    );
};

export default Book;
