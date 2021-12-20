import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

const CoinDetailsBody = ({ crypto }) => {
  return (
    <View style={styles.container}>
      <Text>{crypto.name}</Text>
    </View>
  );
};

export default CoinDetailsBody;
