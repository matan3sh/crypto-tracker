import React from 'react';
import { useWatchlist } from '../context/WatchlistContext';
import { StyleSheet, Text, View } from 'react-native';

const WatchlistScreen = () => {
  const { watchlistCoinIds } = useWatchlist();

  console.log(watchlistCoinIds);

  return (
    <View>
      <Text>Watchlist Screen</Text>
    </View>
  );
};

export default WatchlistScreen;

const styles = StyleSheet.create({});
