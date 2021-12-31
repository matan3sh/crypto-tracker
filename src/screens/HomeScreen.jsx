import React, { useState, useEffect } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { CoinItem } from '../components';
import { getMarketData } from '../actions';

const HomeScreen = () => {
  const [marketData, setMarketData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMarketData = async () => {
    setLoading(true);
    const coinsData = await getMarketData();
    setMarketData(coinsData);
    setLoading(false);
  };

  useEffect(() => {
    fetchMarketData();
  }, []);

  if (loading || !marketData) {
    return <ActivityIndicator size='large' />;
  }

  return (
    <FlatList
      renderItem={({ item }) => <CoinItem coin={item} />}
      data={marketData}
    />
  );
};

export default HomeScreen;
