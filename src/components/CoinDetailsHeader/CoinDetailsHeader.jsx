import React from 'react';
import { Image, View, Text } from 'react-native';
import { Ionicons, EvilIcons } from '@expo/vector-icons';

import { styles } from './styles';

const CoinDetailsHeader = ({ crypto }) => {
  return (
    <View style={styles.container}>
      <Ionicons name='chevron-back-sharp' size={30} color='white' />
      <View style={styles.tickerContainer}>
        <Image style={styles.imageSmall} source={{ uri: crypto.image.small }} />
        <Text style={styles.biggerText}>{crypto.symbol.toUpperCase()}</Text>
        <View style={styles.rank}>
          <Text style={styles.text}>#{crypto.market_data.market_cap_rank}</Text>
        </View>
      </View>
      <EvilIcons name='user' size={30} color='white' />
    </View>
  );
};

export default CoinDetailsHeader;
