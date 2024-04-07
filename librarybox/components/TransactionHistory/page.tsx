'use client'
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import React, { useEffect, useMemo } from 'react';
import { Avatar, List, Space } from 'antd';
import { useStyles } from './styles/style'; 
import { useTransaction, useTransactionState } from '../../Providers/TransactionProvider';
import { useLoginState, useUser} from '../../Providers/LoginProviders';

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const getStatusDescription = (status: number) => {
  switch (status) {
    case 0:
      return "Ready to be collected";
    case 1:
      return "Collected";
    case 2:
      return "Returned";
    case 3:
      return "Overdue";
    default:
      return "Unknown";
  }
};

const TransactionHistory = () => {
  const status = useTransactionState();
  const {styles}=useStyles();
  return (
    <div className={useStyles().styles.main}> 
    <br/>
    <h1 className={styles.header}>Transaction History</h1>
      <List
        className={styles.container}
        itemLayout="horizontal"
        dataSource={status.FetchTransaction}
        renderItem={(item, index) => (
          <List.Item className={styles.items}>
            <List.Item.Meta
              avatar={<img src={item.book?.url} alt="Book Cover" className={styles.imageContainer}/>}
             
            />
            <div className={styles.status}>
            <h2>{getStatusDescription( item.status&&item.status)}</h2> 
            </div>
            <div className={styles.details}>
              <h4>Title: {item.book?.title&& item.book.title}</h4>
              <br/>
              <p>Check out date: { item.checkOutDate&&item.checkOutDate}</p>
              <p>Due date: {item.dueDate && item.dueDate}</p>
              <p>Returned date: {item.returnedDate && item.returnedDate}</p>

            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default TransactionHistory;
