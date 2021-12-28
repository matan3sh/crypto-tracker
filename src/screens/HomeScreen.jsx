import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { CoinItem } from '../components';
import cryptocurrencies from '../../assets/data/cryptocurrencies.json';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        renderItem={({ item }) => <CoinItem coin={item} />}
        data={cryptocurrencies}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
  },
});

export default HomeScreen;
