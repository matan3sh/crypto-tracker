import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { CoinChart, CoinDetailsBody, CoinDetailsHeader } from '../components';
import crypto from '../../assets/data/crypto.json';
import { spacing } from '../styles';

const DetailsScreen = () => {
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
