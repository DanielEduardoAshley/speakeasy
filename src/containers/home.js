import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'


class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    };

    render() {
        return (
            <div style={{ backgroundColor: 'black' }}>

                <div style={{ textAlign: 'center' }}>

                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4"> Facial Recognition </h1>
                            <h1 className="display-5"> Practice your public speaking </h1>
                            <input className="search" type="text" placeholder="Search" aria-label="Search"></input>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <img style={{ width: '300%', height: '300%' }} src={require('../assets/facial4.jpg')} className="img-fluid" alt="" />
                    <div className="overlay">
                        <div className="background">
                            <Link className="text" to='/record'> Record  </Link>
                        </div>
                    </div>
                </div>
                <div>
                    

                </div>

            </div>
        );
    };
};

export default Home;