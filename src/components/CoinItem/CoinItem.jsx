import React from 'react';
import { Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';

const CoinItem = ({ coin }) => {
  const percentageColor =
    coin.price_change_percentage_24h < 0 ? '#ea3943' : '#16c784';

  const normalized = (value) => {
    let units = ['M', 'B', 'T', 'Q'];
    let unit = Math.floor((value / 1.0e1).toFixed(0).toString().length);
    let r = unit % 3;
    let x = Math.abs(Number(value)) / Number('1.0e+' + (unit - r)).toFixed(2);
    return x.toFixed(2) + units[Math.floor(unit / 3) - 2];
  };

  return (
    <View style={styles.row}>
      <Image source={{ uri: coin.image }} style={styles.icon} />
      <View>
        <Text style={styles.title}>{coin.name}</Text>
        <View style={styles.content}>
          <View style={styles.rankContainer}>
            <Text style={styles.rank}>{coin.market_cap_rank}</Text>
          </View>
          <Text style={styles.text}>{coin.symbol.toUpperCase()}</Text>
          <AntDesign
            style={styles.downArrow}
            name={
              coin.price_change_percentage_24h < 0 ? 'caretdown' : 'caretup'
            }
            size={12}
            color={coin.price_change_percentage_24h < 0 ? '#ea3943' : '#16c784'}
          />
          <Text style={[styles.text, { color: percentageColor }]}>
            {coin.price_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
      </View>

      <View style={styles.right}>
        <Text style={styles.title}>{coin.current_price}</Text>
        <Text style={styles.textNormal}>
          MCap {normalized(coin.market_cap)}
        </Text>
      </View>
    </View>
  );
};

export default CoinItem;
