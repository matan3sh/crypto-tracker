import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { styles } from './styles';

const CoinDetailsHeader = ({ coin }) => {
  const navigation = useNavigation();

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
      <EvilIcons name='user' size={30} color='white' />
    </View>
  );
};

export default CoinDetailsHeader;
