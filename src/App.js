import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './containers/home';
import Info from './components/info';
import Record from './containers/record';
import Dialog from './components/dialog';



class App extends React.Component {
    constructor(props){
      super(props);

    }



    render() {
      return(
      <HashRouter> 
        <Route path='/*' component= {Navbar}/>
        <Switch>

        <Route path='/' exact component= {Home} />
        <Route path='/info' exact component= {Info}/> 
        <Route path ='/record' exact component ={Record}/>

        </Switch>
       </HashRouter> 
      );
    };
}
export default App;
