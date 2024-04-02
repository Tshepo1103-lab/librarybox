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
      <div className={styles.data}>
        {state.CategoryBooks?.map((item: IBook, index) => (
          <Link href={{ pathname: `/catalog/book/${index}` }} key={item.id}>
            <Card key={item.id} className={styles.searchCard} cover={<AntdImage src={item.url} alt="Stack of books" width={200} height={250} />}>
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
