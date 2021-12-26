import React from 'react';
import { View, Dimensions } from 'react-native';
import { ChartDot, ChartPath } from '@rainbow-me/animated-charts';

const CoinChart = ({ data }) => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <View>
      <ChartPath height={screenWidth / 2} stroke='yellow' width={screenWidth} />
      <ChartDot style={{ backgroundColor: 'blue' }} />
    </View>
  );
};

export default CoinChart;
