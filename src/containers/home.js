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
          <div className ='background'>
              {/* <img style={{ width: '300%', height: '300%' }} src={require('../assets/facial4.jpg')} className="img-fluid" alt="" /> */}

             <div>
                <div style={{ textAlign: 'center' }}>

                    <div className="jumbotron jumbotron-fluid" id="jumbo">
                        <div className="container">
                            <h1 className="display-4" id= "text"> Facial Recognition </h1>
                            <h1 className="display-5" id= "text"> Practice your public speaking </h1>
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

                <div className="row">
  <div className="col-sm-6">
    <div className="card"  id= "card">
      <div className="card-body">
        <h5 className="card-title" id= "text">Data Report</h5>
        <img  style={{ width: '300%', height: '300%' }} src={require('../assets/images33.png')} className="img-fluid" alt="" />
        <p className="card-text" id= "text">Are you smiling? What's your confidence level? Check your report on public speaking.</p>
        <Link to="./results" className="btn btn-primary">Date Report</Link>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card"  id= "card">
      <div className="card-body">
        <h5 className="card-title" id= "text"> About SpeakEasy </h5>
        <img  style={{ width: '300%', height: '300%' }} src={require('../assets/image25.jpeg')} className="img-fluid" alt="" />
        <p className="card-text" id= "text">With our facial recognition technology, be ready for events, presentations or public speaking. </p>
        <Link to="./info" className="btn btn-primary"> INFO </Link>
      </div>
    </div>
  </div>

</div>
</div>
</div>

</div>
        );
    };
};

export default Home;