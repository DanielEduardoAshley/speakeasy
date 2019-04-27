import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

//components
import Home from './containers/Home';
import Nav from './components/Nav';


export default class App extends Component {


  render() {
    return (
      <HashRouter>
        <Route path='/' component={Nav} />
        <Route path='/' component={Home} />
      </HashRouter>
    )
  }
}
