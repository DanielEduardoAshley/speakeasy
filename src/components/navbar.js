import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to='/info'> SpeakEasy </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to='/'> Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/info">Record</Link>
          </li>
          {/* will use below if implementing login feature */}
          {/* <li class="nav-item">
            <a class="nav-link" href="#">Log In</a> 
          </li> */}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar;