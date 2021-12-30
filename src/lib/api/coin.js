import axios from 'axios';

class CoinApi {
  constructor() {
    this.apiUrl = 'https://api.coingecko.com/api/v3/coins';
  }

  getById(id) {
    return axios.get(
      `${this.apiUrl}/${id}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`
    );
  }
}

export default CoinApi;
