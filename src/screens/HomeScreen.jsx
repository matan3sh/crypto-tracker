import React from 'react';
import { FlatList } from 'react-native';
import { CoinItem } from '../components';
import cryptocurrencies from '../../assets/data/cryptocurrencies.json';

const HomeScreen = () => {
  return (
    <FlatList
      renderItem={({ item }) => <CoinItem coin={item} />}
      data={cryptocurrencies}
    />
  );
};

export default HomeScreen;
