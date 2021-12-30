import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { CoinDetailsBody, CoinDetailsHeader } from '../components';
import { getCoinDetails } from '../actions';
import { spacing } from '../styles';
import crypto from '../../assets/data/crypto.json';

const DetailsScreen = () => {
  const { params } = useRoute();
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCoinData = async () => {
    setLoading(true);
    const fetchCoinData = await getCoinDetails(params.coinId);
    setCoin(fetchCoinData);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoinData();
  }, []);

  if (loading || !coin) {
    <ActivityIndicator size='large' />;
  }

  return (
    <View style={styles.container}>
      <CoinDetailsHeader crypto={crypto} />
      <CoinDetailsBody crypto={crypto} />
    </View>
  );
};

export default DetailsScreen;

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing[3],
  },
});
