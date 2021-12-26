import React from 'react';
import { Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';

const CoinDetailsBody = ({ crypto }) => {
  const percentageColor =
    crypto.market_data.price_change_percentage_24h < 0 ? '#ea3943' : '#16c784';

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{crypto.name}</Text>
        <Text style={styles.price}>
          ${crypto.market_data.current_price.usd}
        </Text>
      </View>
      <View style={[styles.priceChangeContainer, { color: percentageColor }]}>
        <AntDesign
          style={styles.downArrow}
          name={
            crypto.market_data.price_change_percentage_24h < 0
              ? 'caretdown'
              : 'caretup'
          }
          size={12}
          color={'white'}
        />
        <Text style={styles.priceChange}>
          {crypto.market_data.price_change_percentage_24h.toFixed(2)}%
        </Text>
      </View>
    </View>
  );
};

export default CoinDetailsBody;
