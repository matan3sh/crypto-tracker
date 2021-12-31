import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { CoinDetailsBody, CoinDetailsHeader } from '../components';
import { getCoinDetails, getCoinChartData } from '../actions';
import { spacing } from '../styles';

const DetailsScreen = () => {
  const { params } = useRoute();
  const [loading, setLoading] = useState(false);
  const [coin, setCoin] = useState(null);
  const [coinChart, setCoinChart] = useState(null);

  const fetchCoinData = async () => {
    setLoading(true);
    const fetchCoinData = await getCoinDetails(params.coinId);
    const fetchCoinChartData = await getCoinChartData(params.coinId);
    setCoin(fetchCoinData);
    setCoinChart(fetchCoinChartData);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoinData();
  }, []);

  if (loading || !coin || !coinChart) {
    return <ActivityIndicator size='large' />;
  }

  return (
    <View style={styles.container}>
      <CoinDetailsHeader coin={coin} />
      <CoinDetailsBody coin={coin} prices={coinChart.prices} />
    </View>
  );
};

export default DetailsScreen;

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing[3],
  },
});
