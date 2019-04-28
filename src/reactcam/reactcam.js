import React from "react";
import * as firebase from 'firebase';
import axios from 'axios';
import Webcam from "react-webcam";
import getUrl from "../services/getUrl";
import Dictophone from '../audio/audio'
// const DeepAffects = require('deep-affects');

const MicRecorder = require('mic-recorder-to-mp3');
// const defaultClient = DeepAffects.ApiClient.instance;
// const UserSecurity = defaultClient.authentications['UserSecurity'];
// UserSecurity.apiKey = 'h6plWgFrmhO4GRgbZrGcJviqgzFVLrTR';
// // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
// UserSecurity.apiKeyPrefix = 'Token';

// const apiInstance = new DeepAffects.EmotionApi();


// New instance
const recorder = new MicRecorder({
 bitRate: 128
});

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
  recorder.start().then(() => {
    // something else
   }).catch((e) => {
    console.error(e);
   });
   
  const recording = !this.state.recording
  let apiCall = null
  if ( recording ) {
      this.setState({recording,interval:setInterval(()=>{
        console.log('hi')
        

        // this.capture()
        
recorder
.stop()
.getMp3().then(([buffer, blob]) => {
 // do what ever you want with buffer and blob
 // Example: Create a mp3 file and play
 const file = new File(buffer, 'me-at-thevoice.mp3', {
   type: blob.type,
   lastModified: Date.now()
 });

 const player = new Audio(URL.createObjectURL(file));
 player.play();
return file
})
// .then((file)=>{

// const body = DeepAffects.Audio.fromFile(file); // {Audio} Audio object

// const callback = function(error, data, response) {
//  if (error) {
//    console.error(error);
//  } else {
//    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
//  }
// };
// apiInstance.syncRecogniseEmotion(body, callback);
// })
// .catch((e) => {
//  alert('We could not retrieve your message');
//  console.log(e);
// });
       

        
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
  
  <Dictophone />
  </>)
  }
}

export default Cam;