import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useWatchlist } from '../../context/WatchlistContext';
import { styles } from './styles';

const CoinDetailsHeader = ({ coin }) => {
  const navigation = useNavigation();
  const { watchlistCoinIds, addToWatchlist, removeFromWatchlist } =
    useWatchlist();

  const isCoinIsWatchlisted = () =>
    watchlistCoinIds.some((coinId) => coinId === coin.id);

  const onAddToWatchlist = () => {
    if (isCoinIsWatchlisted()) removeFromWatchlist(coin.id);
    else addToWatchlist(coin.id);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name='chevron-back-sharp' size={30} color='white' />
      </TouchableOpacity>
      <View style={styles.tickerContainer}>
        <Image style={styles.imageSmall} source={{ uri: coin.image.small }} />
        <Text style={styles.biggerText}>{coin.symbol.toUpperCase()}</Text>
        <View style={styles.rank}>
          <Text style={styles.text}>#{coin.market_cap_rank}</Text>
        </View>
      </View>
      <FontAwesome
        size={25}
        name={isCoinIsWatchlisted() ? 'star' : 'star-o'}
        color={isCoinIsWatchlisted() ? '#FFBF00' : 'white'}
        onPress={onAddToWatchlist}
      />
    </View>
  );
};

export default CoinDetailsHeader;
