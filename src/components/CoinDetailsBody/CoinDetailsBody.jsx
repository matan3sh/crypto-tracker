import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

const CoinDetailsBody = ({ crypto }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{crypto.name}</Text>
        <Text style={styles.price}>
          ${crypto.market_data.current_price.usd}
        </Text>
      </View>
      <View>
        <Text style={styles.priceChange}>
          {crypto.market_data.price_change_percentage_24h.toFixed(2)}%
        </Text>
      </View>
    </View>
  );
};

export default CoinDetailsBody;
