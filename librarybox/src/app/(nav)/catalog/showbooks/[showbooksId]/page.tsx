'use client';
import { Card } from 'antd';
import React, { useEffect } from 'react';
import { useStyles } from './styles/style';
import { useBook, useBookState } from '../../../../../../Providers/BookProviders';
import Image from 'next/image';
import { IBook } from '../../../../../../Providers/BookProviders/context';
import Link from 'next/link';

const ShowBooks = ({ params }: { params: { showbooksId: string } }) => {
  const { styles } = useStyles();
  const state= useBookState();
  const { fetchBooks} = useBook();
  
  
  useEffect(() => {
    fetchBooks && fetchBooks(params.showbooksId);
  }, []);


  return (
    <div>
      <div className={styles.data}>
              {state.CategoryBooks?.map((item:IBook,index)=> (
                <Link href={{ pathname: `/catalog/book/${index}` }} key={item.id}>
                <Card key={item.id} className={styles.searchCard} cover={<Image src="/assets/img/book.png" alt="Stack of books" width={240} height={160} />}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>Authors: {item.authors.join(', ')}</p>
                    <p>ISBN: {item.isbn}</p>
                    <p>Category: {item.categoryId}</p>
                  </div>
                </Card>
                </Link>
              ))}
      </div>
    </div>
  );
};

export default ShowBooks;
