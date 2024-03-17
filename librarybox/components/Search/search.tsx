import React, { useState } from 'react';
import { Input, Card } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';
import { useStyles } from './styles/styles';
import data from './template.json';
import Image from 'next/image';
import Shelves from '../shelves/shelves';

const { Meta } = Card;

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { styles } = useStyles();
  const { Search } = Input;
  const [search, setSearch] = useState(false);

  const onSearch: SearchProps['onSearch'] = (value, _e, info) =>
    console.log(info?.source, value);

  const filteredData = data.filter(item =>
    searchTerm !== '' ? item.title.toLowerCase().includes(searchTerm.toLowerCase()) : false
  );

  const searchData = filteredData.map(item => (
    <Card key={item.id} className={styles.searchCard} cover={<Image src="/assets/img/book.png" alt="Stack of books" width={240} height={160} />}>
    <div>
        <h3>{item.title}</h3>
    </div>
  </Card>
  
  ));

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setSearch(e.target.value !== ''); // Toggle search state based on whether there's a search term
  };

  return (
    <div className={styles.searchContainer}>
      <Search
        placeholder="Search here..."
        allowClear
        enterButton="Search"
        onSearch={onSearch}
        onChange={handleSearchChange}
        className={styles.searchBox}
      />
      <div className={styles.data}>{searchData}</div>
      {!search && searchTerm === '' && ( // Show shelves if search is not active and there's no search term
        <div className={styles.container}>
          <h2>Explore the shelves</h2>
          <br />
          <div>
            <Shelves />
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
