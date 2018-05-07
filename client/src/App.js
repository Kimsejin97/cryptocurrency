import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import CoinList from './containers/coin_list';
import CoinShow from './containers/coin_show';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container mt-3">
        <Switch>
          <Route exact path="/" component={CoinList} />
          <Route path="/:id" component={CoinShow} />
        </Switch>
      </div>
    );
  }
}

export default App;