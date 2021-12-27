import React from 'react';
import { View, Dimensions } from 'react-native';
import { ChartDot, ChartPath } from '@rainbow-me/animated-charts';

const CoinChart = ({ data, price }) => {
  const screenWidth = Dimensions.get('window').width;
  const chartColor = price > data[0][1] ? '#16c784' : '#ea3943';

  return (
    <View>
      <ChartPath
        strokeWidth={2}
        height={screenWidth / 2}
        stroke={chartColor}
        width={screenWidth}
      />
      <ChartDot style={{ backgroundColor: chartColor }} />
    </View>
  );
};

export default CoinChart;
