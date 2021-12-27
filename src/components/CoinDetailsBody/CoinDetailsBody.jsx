import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ChartPathProvider, ChartYLabel } from '@rainbow-me/animated-charts';
import { styles } from './styles';
import CoinChart from '../CoinChart/CoinChart';

const CoinDetailsBody = ({ crypto }) => {
  const [coinValue, setCoinValue] = useState('1');
  const [usdValue, setUsdValue] = useState(
    crypto.market_data.current_price.usd.toString()
  );

  const percentageColor =
    crypto.market_data.price_change_percentage_24h < 0 ? '#ea3943' : '#16c784';

  const formatCurrency = (value) => {
    'worklet';
    if (value === '') {
      return `$${crypto.market_data.current_price.usd.toFixed(2)}`;
    }
    return `$${parseFloat(value).toFixed(2)}`;
  };

  const changeCoinValue = (value) => {
    setCoinValue(value);
    const floatValue = parseFloat(value.replace(',', '.')) || 0;
    setUsdValue((floatValue * crypto.market_data.current_price.usd).toString());
  };

  const changeUsdValue = (value) => {
    setUsdValue(value);
    const floatValue = parseFloat(value.replace(',', '.')) || 0;
    setCoinValue(
      (floatValue / crypto.market_data.current_price.usd).toString()
    );
  };

  return (
    <View>
      <ChartPathProvider
        data={{
          points: crypto.prices.map(([x, y]) => ({ x, y })),
          smoothingStrategy: 'bezier',
        }}>
        <View style={styles.container}>
          <View>
            <Text style={styles.name}>{crypto.name}</Text>
            <ChartYLabel format={formatCurrency} style={styles.price} />
          </View>
          <View
            style={[styles.priceChangeContainer, { color: percentageColor }]}>
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

        <CoinChart
          data={crypto.prices}
          price={crypto.market_data.current_price.usd}
        />

        <View style={styles.converterContainer}>
          <View style={styles.converter}>
            <Text style={styles.symbol}>{crypto.symbol.toUpperCase()}</Text>
            <TextInput
              style={styles.input}
              value={coinValue}
              onChangeText={changeCoinValue}
            />
          </View>

          <View style={styles.converter}>
            <Text style={styles.symbol}>USD</Text>
            <TextInput
              style={styles.input}
              value={usdValue}
              keyboardType='numeric'
              onChangeText={changeUsdValue}
            />
          </View>
        </View>
      </ChartPathProvider>
    </View>
  );
};

export default CoinDetailsBody;
