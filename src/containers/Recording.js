import React from 'react';


const Recording = (props) => {

  return (
      <div className="card mb-3" style={{padding: '20px'}}>
        <div class="embed-responsive embed-responsive-21by9">
          <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen title='recording'></iframe>
        </div>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          <button type="button" className="btn btn-success">Start</button><button type="button" className="btn btn-danger">Stop</button>
        </div>
        <div className="mb-3">
          <button type="button" class="btn btn-warning">Send Report</button>
        </div>
      </div>
  )
}

export default Recording;