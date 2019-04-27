import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './containers/home';
import Info from './components/info';



class App extends React.Component {
    constructor(props){
      super(props);

    }



    render() {
      return(
      <HashRouter> 
        <Route path='/*' component= {Navbar}/>
        <Route path='/' exact component= {Home} />
        <Route path='/info' exact component= {Info}/> 

       </HashRouter> 
      );
    };
}
export default App;
