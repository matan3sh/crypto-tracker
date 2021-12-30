import CoinApi from '../lib/api/coin';

export const getCoinDetails = async (id) => {
  try {
    const { data } = await new CoinApi().getById(id);
    return data;
  } catch (error) {
    console.log(error);
  }
};
