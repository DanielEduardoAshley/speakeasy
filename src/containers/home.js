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
            <div style={{ backgroundImage: '' }}>

                <div style={{ textAlign: 'center' }}>

                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4"> Facial Recognition </h1>
                            <h1 className="display-5"> Practice your public speaking </h1>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <img style={{ width: '300%', height: '300%' }} src={require('../assets/facial4.jpg')} className="img-fluid" alt="" />
                    <div className="overlay">
                        <div onClick className="background">
                            <Link className="text" style={{ textDecoration: 'none' }} to='/record'> Record  </Link>
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>

                <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Data Report</h5>
        <p class="card-text">Are you smiling? What's your confidence level? Check your report and get better at public speaking.</p>
        <Link to="./results" class="btn btn-primary">Date Report</Link>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title"> About SpeakEasy </h5>
        <p class="card-text">With our facial recognition technology, prep yourself for events, presentations or public speaking. </p>
        <Link to="./info" class="btn btn-primary"> INFO </Link>
      </div>
    </div>
  </div>
</div>


            </div>
        );
    };
};

export default Home;