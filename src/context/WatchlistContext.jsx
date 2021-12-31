import React, { useContext, createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WatchlistContext = createContext();
export const useWatchlist = () => useContext(WatchlistContext);

const WatchlistProvider = ({ children }) => {
  const [watchlistCoinIds, setWatchlistCoinsIds] = useState([]);

  const getWatchlistData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@watchlist_coins');
      setWatchlistCoinsIds(jsonValue !== null ? JSON.parse(jsonValue) : []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWatchlistData();
  }, []);

  const addToWatchlist = async (coinId) => {
    try {
      const newWatchlist = [...watchlistCoinIds, coinId];
      const jsonValue = JSON.stringify(newWatchlist);
      await AsyncStorage.setItem('@watchlist_coins', jsonValue);
      setWatchlistCoinsIds(newWatchlist);
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromWatchlist = async (coinId) => {
    try {
      const newWatchlist = watchlistCoinIds.filter(
        (currentCoinId) => currentCoinId !== coinId
      );
      const jsonValue = JSON.stringify(newWatchlist);
      await AsyncStorage.setItem('@watchlist_coins', jsonValue);
      setWatchlistCoinsIds(newWatchlist);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <WatchlistContext.Provider
      value={{ watchlistCoinIds, addToWatchlist, removeFromWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};

export default WatchlistProvider;
