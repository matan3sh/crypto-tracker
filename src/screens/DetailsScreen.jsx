import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { CoinDetailsBody, CoinDetailsHeader } from '../components';
import crypto from '../../assets/data/crypto.json';
import { spacing } from '../styles';

const DetailsScreen = () => {
  const { params } = useRoute();

  console.log(params.coinId);

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
