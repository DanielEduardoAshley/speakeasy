import React from 'react';
import {Link} from 'react-router-dom';
import './home.css'


class Home extends React.Component {
    constructor(props){
        super(props);

        this.state = {

        };
    };

    render(){
        return(
            <>

<div style={{textAlign:'center'}}>
        
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4"> ssss</h1>
            <h2 className="lead"> sssss </h2>
          </div>
        </div>
      </div>
 
<div className="container">
            <img src={require('../assets/fbifaces.jpg')} className="img-fluid" alt=""/>
            <div className="overlay">

                <div onClick className="background">
                    <Link className="text" to='/record'> Record  </Link>
                </div>
            </div>
        </div>

   
   </>
        );
    };
};

export default Home;