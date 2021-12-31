import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useWatchlist } from '../context/WatchlistContext';
import { CoinItem } from '../components';
import { getCoinsByIds } from '../actions';

const WatchlistScreen = () => {
  const { watchlistCoinIds } = useWatchlist();
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchWatchlist = async () => {
    if (loading) return;
    setLoading(true);
    const watchListData = await getCoinsByIds(watchlistCoinIds);
    setCoins(watchListData);
    setLoading(false);
  };

  useEffect(() => {
    fetchWatchlist();
  }, []);

  console.log(coins);

  return (
    <FlatList
      data={watchlistCoinIds}
      renderItem={({ item }) => <CoinItem coin={item} />}
    />
  );
};

export default WatchlistScreen;

const styles = StyleSheet.create({});
