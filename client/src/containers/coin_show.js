import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CoinShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coinsData: []
    };
    this.loadData = this.loadData.bind(this);
  }

  async loadData() {
    const URI = `https://api.coinmarketcap.com/v1/ticker/${this.props.match.params.id}/`;
    const coinsData = await axios.get(URI);
    this.setState({
      coinsData: coinsData.data,
    });
  }

  async componentDidMount() {
    await this.loadData();
  }

  render() {
    console.log(this.props.match);
    const coinDescription = this.state.coinsData.map((coin, id) => (
      <ul class="list-unstyled" key={id}>
        <li>Rank: {coin.rank}</li>
        <li>Name: {coin.name}</li>
        <li>Symbol: {coin.symbol}</li>
        <li>Price_usd: {coin.price_usd}</li>
        <li>Percent_change_1h: {coin.percent_change_1h}</li>
        <li>Percent_change_24h: {coin.percent_change_24h}</li>
        <li>Percent_change_7d: {coin.percent_change_7d}</li>
      </ul>
    ));
    return (
      <div className="coin-show">
        <h1>{this.props.match.params.id}</h1>
      <div className='text-right'>
        <Link className="btn btn-secondary" to='/'>List</Link>
      </div>
        {coinDescription}
      </div>
    );
  }
}

export default CoinShow;