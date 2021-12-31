import CoinApi from '../lib/api/coin';

export const getMarketData = async (pageNumber = 1) => {
  try {
    const { data } = await new CoinApi().getAll(pageNumber);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCoinDetails = async (id) => {
  try {
    const { data } = await new CoinApi().getById(id);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCoinChartData = async (id) => {
  try {
    const { data } = await new CoinApi().getChartData(id);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCoinsByIds = async (coinIds) => {
  try {
    const { data } = await new CoinApi().getCoinsByIds(coinIds);
    return data;
  } catch (error) {
    console.log(error);
  }
};
