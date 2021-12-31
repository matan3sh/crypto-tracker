import axios from 'axios';

class CoinApi {
  constructor() {
    this.apiUrl = 'https://api.coingecko.com/api/v3/coins';
  }

  getById(id) {
    return axios.get(
      `${this.apiUrl}/${id}?localization=false&community_data=false&developer_data=false&sparkline=false`
    );
  }

  getChartData(id) {
    return axios.get(
      `${this.apiUrl}/${id}/market_chart?vs_currency=usd&days=1&interval=hourly`
    );
  }
}

export default CoinApi;
