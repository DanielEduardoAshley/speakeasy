import React from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";
import axios from 'axios';


const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
};

const Dictaphone = ({
  transcript,
  resetTranscript,
  browserSupportsSpeechRecognition
}) => {
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

const analyzeText=(transcript)=>{
    console.log(typeof transcript)
    // axios.post('https://cors-anywhere.herokuapp.com/https://api.aylien.com/api/v1/sentiment', {text:transcript}, {'X-AYLIEN-TextAPI-Application-Key': '55aeedc983a81edbffe4564b1ac54a05','X-AYLIEN-TextAPI-Application-ID': 'ca57c167'  })
  axios({
      url:'https://cors-anywhere.herokuapp.com/https://api.aylien.com/api/v1/sentiment',
      method: 'post',
      headers : { 
          'content-type': 'application/x-www-form-urlencoded',
          'X-AYLIEN-TextAPI-Application-Key': '55aeedc983a81edbffe4564b1ac54a05',
          'X-AYLIEN-TextAPI-Application-ID': 'ca57c167' 
      },
      data: `text=${transcript.split(' ').join('+')}`
  })
  .then((response)=>{
      console.log(response)
  })
  .catch(err=>{
      console.log(err)
  })
// var headers = {
//     'X-AYLIEN-TextAPI-Application-Key': '55aeedc983a81edbffe4564b1ac54a05',
//     'X-AYLIEN-TextAPI-Application-ID': 'ca57c167'
// };


// var dataString = 'mode=tweet&text=John+is+a+very+good+football+player';

// var options = {
//     url: 'https://cors-anywhere.herokuapp.com/https://api.aylien.com/api/v1/sentiment',
//     method: 'POST',
//     headers: headers,
//     body: transcript
// };

// function callback(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         console.log(body);
//     }
// }

// request(options, callback);

}

  return (
    <div>
      <button onClick={resetTranscript}>Reset</button>
      <button onClick={e=>analyzeText(transcript)}>Analyze Text</button>
      <span style={{fontSize: '20px'}}>{transcript}</span>
    </div>
  );
};

Dictaphone.propTypes = propTypes;

export default SpeechRecognition(Dictaphone);


