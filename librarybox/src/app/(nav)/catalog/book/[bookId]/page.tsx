'use client'
import React, { useEffect, useState } from 'react';
import { Button, Card, Flex, message, Result } from 'antd';
import {Image as AntdImage} from 'antd';
import { useStyles } from './styles/style';
import useLocalStorageBook from '@/utilis/Book';
import { useTransaction, useTransactionState } from '../../../../../../Providers/TransactionProvider';
import { EyeOutlined } from '@ant-design/icons';
import { useLoginState, useUser} from '../../../../../../Providers/LoginProviders'
import { toString ,toInteger} from 'lodash';

const Book = ({ params }: { params: { bookId: string } }) => {
    const { styles } = useStyles();
    const { setBookToLocalStorage, getBookInfo,setBookToLocalStorageTop } = useLocalStorageBook();
    const { createtransaction ,fetchtransaction} = useTransaction();
    const [showResult, setShowResult] = useState(false);
    const state = useLoginState();
   
    // const { getUserDetails } = useUser();

    // useEffect(() => {
    //   getUserDetails && getUserDetails();
    // }, []);

    useEffect(() => {
        setBookToLocalStorage(params.bookId);
        setBookToLocalStorageTop(params.bookId)
       
    }, []);
   

    const handleClick = async () => {
        
        const checkoutDate = new Date();
        const dueDate = new Date();
        dueDate.setDate(checkoutDate.getDate() + 10);

        // Create a new transaction object
            const transaction = {
            CheckOutDate: checkoutDate,
            DueDate: dueDate,
            ReturnedDate:  new Date(), // Assuming book has not been returned yet
            BookId: getBookInfo(params.bookId)?.id,
            UserId: toString(state.currentUser?.id),
            status:0
        };
    
        if (createtransaction) {
            createtransaction(transaction)
                //setShowResult(true);
        
        }
        

        // if(fetchtransaction){
        //     fetchtransaction(state.currentUser?.id)
        // }
        
    };

    return (
        <div className={styles.main}>
            <Flex>
            {showResult ? (
                    <div className={styles.resultContainer}>
                        <h1 className={styles.resultTitle}>Successfully Borrowed a book!</h1>
                        <p className={styles.resultSubtitle}>Your book is ready to be collected. You will get an sms with the rev number, present it to the librarian.
                        </p>
                        <div className={styles.resultExtraButtons}>
                            <Button className={styles.twobutton} type="primary">Go Home</Button>
                            <Button className={styles.twobutton}>Borrow more</Button>
                        </div>
                    </div>
                ) : (
                    // 
                    <div className={styles.bookcontainer}>
                        <Flex justify="space-between">  
                            <img src={getBookInfo(params.bookId)?.url} alt="Stack of books" width={300} height={250}  className={styles.imageContainer}/>
                            <Flex vertical align="flex-start" justify="space-between" style={{ padding: 40 }}>
                               <h1 className={styles.title}>{getBookInfo(params.bookId)?.title}</h1>
                                <p className={styles.paragraph}>
                                    {getBookInfo(params.bookId)?.description}
                                </p>
                                <Button type="primary" onClick={handleClick} className={styles.btn} >
                                     Borrow
                                 </Button>
                                 <div className={styles.findContainer}>
                                    <h3 className={styles.find}><EyeOutlined /> Find in Library</h3>
                                    <p className={styles.findparagraph}> Shelf B , Architecture</p>
                                </div>
                                <div>
                                    <h2 className={styles.detailsTitle}>More details...</h2>
                                    <p>ISBN: {getBookInfo(params.bookId)?.isbn}</p>
                                    <p>Authors: {getBookInfo(params.bookId)?.authors}</p>
                                </div>
                            </Flex>
                        </Flex>
                    </div>
                )}
                
            </Flex>
        </div>
    );
};

export default Book;

