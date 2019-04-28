// import * as firebase from 'firebase';
// import axios from 'axios';
// import Webcam from "react-webcam";





// const getUrl =async () => {
//     const setRef = webcam => {
//         webcam = webcam;
//       };
//     const imageSrc = this.webcam.getScreenshot();
//     const image = new Image(100,200)
//     image.src = imageSrc;
//     console.log(imageSrc.slice(23))
//     this.setState({
//         thisimage : image,
//         thissrc : imageSrc
//     }, ()=>{
//         console.dir(this.state.thisimage)
//     })

    
//     const root = firebase.storage().ref()
//     const newImage = root.child('img.jpg');


   
    
//       const snapshot = await newImage.putString(imageSrc.slice(23), 'base64');
//       console.log(snapshot)
//       const url = await snapshot.ref.getDownloadURL();
//       console.log(url)
//      return axios.get(`http://api.skybiometry.com/fc/faces/detect.json?api_key=ku4qbnvd7f4vbg7cp7qpoagvgn&api_secret=403ke03ck53s4ai0cn2971jgar	&urls=${url}&attributes=all`)
      
   

//   };

//   export default getUrl