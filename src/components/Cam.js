import React from 'react';
import Webcam from 'react-webcam';
import {Link} from 'react-router-dom';
// import { setFlagsFromString } from 'v8';

class Cam extends React.Component {

  state = {
    screenShots: [],
    enabled: null,
  }

  // setRef = webcam => {
  //   this.webcam = webcam;
  // };

  capture = () => {
    const { screenShots } = this.state
    const imageSrc = this.webcam.getScreenshot();
    screenShots.push(imageSrc)
    console.log(screenShots)
    this.setState({ screenShots })
  };

  handleStop = (e) => {
    const video = this.webcam.stream.getVideoTracks()[0];
    video.stop();
  };

  handleStart = (webcam) => {
    // const video = this.webcam.stream.getVideoTracks()[0];
    this.webcam = webcam;
  };

  render() {
  
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };

    return (
      <div className="card mb-3" style={{ padding: '20px' }}>
        <div className="embed-responsive embed-responsive-21by9">
          <Webcam
            style={{ marginLeft: '5px' }}
            audio={false}
            height={350}
            ref={e => this.webcam = e}
            screenshotFormat="image/jpeg"
            width={350}
            videoConstraints={videoConstraints}
          />
        </div>
        <div className="card-body">
          <button type="button" className="btn btn-primary" onClick={this.capture} style={{ float: 'right' }}>Capture photo</button>
          <h5 className="card-title">Your Presentation</h5>
          <p className="card-text">This is your space to practice. Start recording by pressing the "start" button (below), then "stop" when you are done.
              While recording, you may press the "Capture Photo" button (on the right) to make a snapshot of your face to analyze at that particular moment.
                                                Press "Send Report" (bottom-right) to get your analysis.</p>
          <button onClick={this.handleStart} type="button" className="btn btn-success" style={{ borderRadius: '95%' }}>Start</button><button onClick={this.handleStop} type="button" className="btn btn-danger" style={{ borderRadius: '2%' }}>Stop</button>
        </div>
        <div className="mb-3" >
          <Link to='/results'><button type="button" className="btn btn-warning" style={{ float: 'right' }}>Get Your Report!</button></Link>
        </div>
      </div>
    )    
  }
}

export default Cam;