import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const COINMARKETCAP_API_URI = 'https://api.coinmarketcap.com/v1/ticker/?limit=10';


class CoinList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coinsData: []
    };
    this.loadData = this.loadData.bind(this);
  }

  async loadData() {
    const coinsData = await axios.get(COINMARKETCAP_API_URI);
    this.setState({
      coinsData: coinsData.data,
    });
  }
  
  async componentDidMount() {
    await this.loadData();
    setInterval(this.loadData, 3000);
  }

  render() {
   var rowCoins = this.state.coinsData.map((coin, id, rank, name, price_usd) => (
      <tr key={coin.id}>
        <td>{coin.rank}</td>
        <td><Link to={`/${coin.id}`}>{coin.symbol}</Link></td>
        <td>{coin.name}</td>
        <td>{coin.price_usd}</td>
      </tr>
    ))
    return (
      <div className="coin_list">
        <h1>Cryptocurrency</h1>
        <table class = "table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Symbol</th>
              <th>Name</th>
              <th>Price (USD)</th>
            </tr>
          </thead>
          <tbody>
            {rowCoins}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CoinList;