'use client'
import React, { useEffect, useState } from 'react';
import { Button, Card, Flex, message, Result } from 'antd';
import {Image as AntdImage} from 'antd';
import { useStyles } from './styles/style';
import useLocalStorageBook from '@/utilis/Book';
import { useTransaction } from '../../../../../../Providers/TransactionProvider';

const Book = ({ params }: { params: { bookId: string } }) => {
    const { styles } = useStyles();
    const { setBookToLocalStorage, getBookInfo } = useLocalStorageBook();
    const { createtransaction } = useTransaction();
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        setBookToLocalStorage(params.bookId);
        // Assuming you have a way to retrieve the user ID
        // setUserId(/* get user ID */);
    }, []);

    const handleClick = () => {
        // Assuming you have a way to retrieve the book ID
        // setBookId(/* get book ID */);

        // Check if user ID and book ID are available
        // if (!userId || !params.bookId) {
        //     message.error('User ID or Book ID not available.');
        //     return;
        // }

        // Calculate the checkout date
        const checkoutDate = new Date();

        // Calculate the due date (10 days from the checkout date)
        const dueDate = new Date();
        dueDate.setDate(checkoutDate.getDate() + 10);

        // Create a new transaction object
        const transaction = {
            CheckOutDate: checkoutDate,
            DueDate: dueDate,
            ReturnedDate:  new Date(), // Assuming book has not been returned yet
            BookId: getBookInfo(params.bookId)?.id,
            UserId: '8'
        };

        // Call the createTransaction method to store the transaction
        if (createtransaction) {
            createtransaction(transaction);
            setShowResult(true);
        }
    };

    return (
        <>
            <Flex>
            {showResult ? (
                    <div className={styles.resultContainer}>
                        <h1 className={styles.resultTitle}>Successfully Borrowed a book!</h1>
                        <p className={styles.resultSubtitle}>Rev number: 2017182818828182881 use this number to collect your book.</p>
                        <div className={styles.resultExtraButtons}>
                            <Button type="primary">Go Home</Button>
                            <Button>Borrow more</Button>
                        </div>
                    </div>
                ) : (
                    <Card hoverable className={styles.card}>
                        <Flex justify="space-between">
                          
                        <AntdImage src={getBookInfo(params.bookId)?.url} alt="Stack of books" width={1200} height={500} />
                            <Flex vertical align="flex-start" justify="space-between" style={{ padding: 40 }}>
                                <h1 className={styles.title}>{getBookInfo(params.bookId)?.title}</h1>
                                <h5 className={styles.title}>
                                    {getBookInfo(params.bookId)?.description}
                                </h5>
                                <Button type="primary" onClick={handleClick} className={styles.btn} >
                                    Borrow
                                </Button>
                            </Flex>
                        </Flex>
                    </Card>
                )}
                
            </Flex>
        </>
    );
};

export default Book;
