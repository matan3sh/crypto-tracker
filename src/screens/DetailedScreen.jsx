import React from 'react';
import { CoinDetaildHeader } from '../components';

import crypto from '../../assets/data/crypto.json';

const DetailedScreen = () => {
  return <CoinDetaildHeader crypto={crypto} />;
};

export default DetailedScreen;
