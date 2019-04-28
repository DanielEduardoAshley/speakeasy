import React from "react";
import * as firebase from 'firebase';
import axios from 'axios';
import Webcam from "react-webcam";
import Dictophone from '../audio/audio';
import ApiContext from '../contexts/apiContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const MicRecorder = require('mic-recorder-to-mp3');



// New instance


const skybiometry = require('skybiometry');
// const client = new skybiometry.Client('ku4qbnvd7f4vbg7cp7qpoagvgn', '403ke03ck53s4ai0cn2971jgar');




// Initialize Firebase
const config = {
  apiKey: "AIzaSyAKbMI9zVmkiaTXa56N3FaexqSnAAdw3v0",
  authDomain: "ecommercefrontend.firebaseapp.com",
  databaseURL: "https://ecommercefrontend.firebaseio.com",
  projectId: "ecommercefrontend",
  storageBucket: "ecommercefrontend.appspot.com",
  messagingSenderId: "892388913938"
};
firebase.initializeApp(config);





class Cam extends React.Component {

  state = {
    thisimage: null,
    thissrc: null,
    recording: false,
    interval: 0,
    apiData: [],
    startTime: 0
  }

  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = async () => {
    let snapTime = Date.now() - this.state.startTime
    console.log(snapTime)
    const imageSrc = this.webcam.getScreenshot();
    const image = new Image(100, 200)
    image.src = imageSrc;
    console.log(imageSrc.slice(23))
    this.setState({
      thisimage: image,
      thissrc: imageSrc
    }, () => {
      console.dir(this.state.thisimage)
    })


    const root = firebase.storage().ref()
    const newImage = root.child('img.jpg');



    try {
      const snapshot = await newImage.putString(imageSrc.slice(23), 'base64');
      // console.log(snapshot)
      const url = await snapshot.ref.getDownloadURL();
      console.log(url)
      axios.get(`http://api.skybiometry.com/fc/faces/detect.json?api_key=ku4qbnvd7f4vbg7cp7qpoagvgn&api_secret=403ke03ck53s4ai0cn2971jgar	&urls=${url}&attributes=all`)
        .then((response) => {
          if (!response.data.photos[0].tags[0]) {
            console.log(response.data.photos[0].tags[0])
          }
          else {

            console.log(response.data.photos[0].tags[0].attributes)
            const attributes = response.data.photos[0].tags[0].attributes
            const obj = {}
            obj.snapTime = snapTime / 1000
            obj.attributes = attributes
            this.setState({
              apiData: (this.state.apiData || []).concat(obj)
            }, () => {
              console.log(this.state)
            })
          }
        })



    }
    catch (err) {
      console.log(err);
    }


  };




  record = () => {
    const startTime = Date.now()
    this.setState({
      startTime
    }, () => {
      console.log(this.state)
    })
    const recording = !this.state.recording
    let apiCall = null
    if (recording) {
      this.setState({
        recording, interval: setInterval(() => {
          console.log('hi')


          this.capture()




          const snapTime = Date.now()
          this.setState({ recording })
        }, 15000)
      })


    } else {
      console.log('localStorage', this.state.apiData)
      const Data = JSON.stringify(this.state.apiData)
      console.log(typeof Data)
      localStorage.setItem('reportData', Data)
      clearInterval(this.state.interval)
      this.setState({ recording })
    }


    // clearInterval(apiCall)



  }



  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };
    return (<div className='container' style={{textAlign:'center'}}>

      <div>
        <div className='row'>
        <div className='col col-10'>
        <Webcam
            style={{ padding: 10, width: '100%' }}
            audio={false}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        </div>
          <div className='col col-2'>
          {this.state.thisimage && <img src={this.state.thissrc} alt='This' style={{maxWidth:'100%'}} />}
          </div>
        </div>
        <div className='row'>
          <div className='col col-5' >{!this.state.recording ? <button onClick={this.record} style={{width:'60%'}} className="btn btn-success">Record</button> : <button onClick={this.record} style={{width:'60%'}} className="btn btn-danger">Stop Recording</button>}</div>
          <div className='col col-5' ><button onClick={this.capture} className="btn btn-info" style={{width:'60%'}}>Capture photo</button></div>
          <div className='col col-2'></div>
        </div>

      </div>

     

      <Dictophone />
    </div>)
  }
}

export default Cam;