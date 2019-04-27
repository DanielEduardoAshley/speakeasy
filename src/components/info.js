import React from 'react';
import {Link} from 'react-router-dom';


class Info extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
        return(
            <>
        <h1> About Us </h1>
        <div className="container">
        <img style={{width:'300%', height:'300%'}} src={require('../assets/Howitworks.jpg')} className="img-fluid" alt=""/>
        </div>

        <div>

        </div>
        </>

        );
    }
}

export default Info;