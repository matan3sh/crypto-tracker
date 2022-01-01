import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, RefreshControl } from 'react-native';
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
    const watchListData = await getCoinsByIds(watchlistCoinIds.join('%2C'));
    setCoins(watchListData);
    setLoading(false);
  };

  useEffect(() => {
    if (watchlistCoinIds.length > 0) {
      fetchWatchlist();
    }
  }, [watchlistCoinIds]);

  return (
    <FlatList
      data={coins}
      renderItem={({ item }) => <CoinItem coin={item} />}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          tintColor='white'
          onRefresh={fetchWatchlist}
        />
      }
    />
  );
};

export default WatchlistScreen;

const styles = StyleSheet.create({});
