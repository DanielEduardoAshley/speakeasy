import React from 'react';
import Webcam  from 'react-webcam';

class Cam extends React.Component {

  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    console.log(imageSrc)
  };

  render() {
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };
    return (
      <>
      <div className="card mb-3" style={{padding: '20px'}}>
        <div className="embed-responsive embed-responsive-21by9">
          <Webcam
            style={{ marginLeft: '5px' }}
            audio={false}
            height={350}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={350}
            videoConstraints={videoConstraints}
          />
        </div>
        <div className="card-body">
        <button type="button" className="btn btn-primary" onClick={this.capture} style={{float: 'right'}}>Capture photo</button>
          <h5 className="card-title">Your Presentation</h5>
          <p className="card-text">This is your space to practice. Start recording by pressing the "start" button (below), then "stop" when you are done. 
              While recording, you may press the "Capture Photo" button (on the right) to make a snapshot of your face to analyze at that particular moment. 
              Press "Send Report" (bottom-right) to get your analysis.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          <button type="button" className="btn btn-success" style={{borderRadius: '90%'}}>Start</button><button type="button" className="btn btn-danger">Stop</button>
        </div>
        <div className="mb-3" >
          <button type="button" className="btn btn-warning" style={{float: 'right'}}>Get Your Report!</button>
        </div>
      </div>
      </>
    )
  }
}

export default Cam;