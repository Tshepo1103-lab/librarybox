'use client'
import React, { useEffect, useState } from 'react';
import { Button, Card, Flex, message } from 'antd';
import Image from 'next/image';
import { useStyles } from './styles/style';
import useLocalStorageBook from '@/utilis/Book';
import { useTransaction } from '../../../../../../Providers/TransactionProvider';

const Book = ({ params }: { params: { bookId: string } }) => {
    const { styles } = useStyles();
    const { setBookToLocalStorage, getBookInfo } = useLocalStorageBook();
    const { createtransaction } = useTransaction();

    const [userId, setUserId] = useState('');


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
            BookId:getBookInfo(params.bookId)?.id,
            UserId:'8'
        };

        // Call the createTransaction method to store the transaction
        console.log(transaction);
        if(createtransaction){
            createtransaction(transaction);
        }
       
    };

    return (
        <>
            <Flex>
                <Card hoverable className={styles.card}>
                    <Flex justify="space-between">
                        <Image
                            alt="avatar"
                            src="/assets/img/bookCover.jpg"
                            width={500}
                            height={550}
                        />
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
                <Card hoverable className={styles.sidecard}>

                </Card>
            </Flex>
        </>
    );
};

export default Book;
