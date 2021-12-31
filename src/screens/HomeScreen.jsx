import React, { useState, useEffect } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { CoinItem } from '../components';
import { getMarketData } from '../actions';

const HomeScreen = () => {
  const [marketData, setMarketData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMarketData = async (pageNumber) => {
    if (loading) return;
    setLoading(true);
    const coinsData = await getMarketData(pageNumber);
    setMarketData((prevData) => [...prevData, ...coinsData]);
    setLoading(false);
  };

  useEffect(() => {
    fetchMarketData();
  }, []);

  const reFetchMarketData = async () => {
    if (loading) return;
    setLoading(true);
    const coinsData = await getMarketData();
    setMarketData(coinsData);
    setLoading(false);
  };

  return (
    <FlatList
      data={marketData}
      renderItem={({ item }) => <CoinItem coin={item} />}
      onEndReached={() => fetchMarketData(marketData.length / 50 + 1)}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          tintColor='white'
          onRefresh={reFetchMarketData}
        />
      }
    />
  );
};

export default HomeScreen;
