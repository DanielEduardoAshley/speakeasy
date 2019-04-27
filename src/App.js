import React from 'react';
import { HashRouter, Route } from 'react-router-dom';


import Home from './containers/home';



class App extends React.Component {
    constructor(props){
      super(props);

    }



    render() {
      return(
      <HashRouter> 
        <Route path='/' exact component={Home} />
        
       </HashRouter> 
      );
    };
}
export default App;
