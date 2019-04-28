import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

//components
import Home from './containers/Home';
import Nav from './components/Nav';
import Cam from './components/Cam';
import Results from './components/Results';


export default class App extends Component {


  render() {
    return (
      <HashRouter>
        <Route path='/' component={Nav} />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/record' exact component={Cam} />
            <Route path='/results' exact component={Results} />
          </Switch>
      </HashRouter>
    )
  }
}
