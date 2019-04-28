import React from "react";
import * as firebase from 'firebase';
import axios from 'axios';
import Webcam from "react-webcam";
import getUrl from "../services/getUrl";


const skybiometry = require('skybiometry');
const client = new skybiometry.Client('ku4qbnvd7f4vbg7cp7qpoagvgn', '403ke03ck53s4ai0cn2971jgar');
const base64Img = require('base64-img');
var base64ToImage = require('base64-to-image');



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

    state={
        thisimage: null,
        thissrc:null,
        recording: false,
        interval:0,
        apiData: [],
    }

    setRef = webcam => {
        this.webcam = webcam;
      };
     
      capture =async () => {
        const imageSrc = this.webcam.getScreenshot();
        const image = new Image(100,200)
        image.src = imageSrc;
        console.log(imageSrc.slice(23))
        this.setState({
            thisimage : image,
            thissrc : imageSrc
        }, ()=>{
            console.dir(this.state.thisimage)
        })
  
        
        const root = firebase.storage().ref()
        const newImage = root.child('img.jpg');
    
    
       
        try {
          const snapshot = await newImage.putString(imageSrc.slice(23), 'base64');
          console.log(snapshot)
          const url = await snapshot.ref.getDownloadURL();
          console.log(url)
          axios.get(`http://api.skybiometry.com/fc/faces/detect.json?api_key=ku4qbnvd7f4vbg7cp7qpoagvgn&api_secret=403ke03ck53s4ai0cn2971jgar	&urls=${url}&attributes=all`)
          .then((response)=>{
            console.log(response)
          })
        }
        catch(err) {
          console.log(err);
        }

        
      };


    

record=()=>{
  const recording = !this.state.recording
  let apiCall = null
  if ( recording ) {
      this.setState({recording,interval:setInterval(()=>{
        console.log('hi')
        

        this.capture()
        
        this.setState({recording})
        }, 15000)
      })
   
    
} else {
    clearInterval(this.state.interval)
    this.setState({recording})
    console.log(apiCall)
  }
  
 
      // clearInterval(apiCall)
    
 
  
}



  render() {
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };
    return (<><div>
      {!this.state.recording?<button onClick={this.record}>Record</button>:<button onClick={this.record}>Stop Recording</button>}
    <Webcam
      style={{marginLeft:'100px'}}
      audio={false}
      height={350}
      ref={this.setRef}
      screenshotFormat="image/jpeg"
      width={350}
      videoConstraints={videoConstraints}
    />
    <button onClick={this.capture}>Capture photo</button>
  </div>
  
  <input type="file" name="myfile" onChange={e=>this.handleFileInput(e)} onClick={this.getFirebasetoken} />
  {this.state.thisimage && <img src={this.state.thissrc} alt='This'/>}
  
  
  </>)
  }
}

export default Cam;