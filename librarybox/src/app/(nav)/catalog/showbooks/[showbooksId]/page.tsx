'use client';
import { Card, Image as AntdImage } from 'antd';
import React, { useEffect } from 'react';
import { useStyles } from './styles/style';
import { useBook, useBookState } from '../../../../../../Providers/BookProviders';
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
    <div className={styles.main}>
      <div className={styles.header}>
        <br/><br/>
      <h1 className={styles.header}>Explore the books</h1>
      </div>
      <div className={styles.data}>
        {state.CategoryBooks?.map((item: IBook, index) => (
          <Link href={{ pathname: `/catalog/book/${item.id}` }} key={item.id}>
            <Card key={item.id} className={styles.searchCard} cover={<img src={item.url} alt="Stack of books" width={200} height={250} />}>
              <div>
                <h3 className={styles.title}>{item.title}</h3>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShowBooks;
