const MicRecorder = require('mic-recorder-to-mp3');

// New instance
const recorder = new MicRecorder({
 bitRate: 128
});

// Start recording. Browser will request permission to use your microphone.
recorder.start().then(() => {
 // something else
}).catch((e) => {
 console.error(e);
});

// Once you are done singing your best song, stop and get the mp3.
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

}).catch((e) => {
 alert('We could not retrieve your message');
 console.log(e);
});


const DeepAffects = require('deep-affects');
const defaultClient = DeepAffects.ApiClient.instance;

// Configure API key authorization: UserSecurity
const UserSecurity = defaultClient.authentications['UserSecurity'];
UserSecurity.apiKey = 'pqrV6XToNGOKoWbgo24huwSC9Xd8hX90';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
UserSecurity.apiKeyPrefix = 'Token';

const apiInstance = new DeepAffects.EmotionApi();

const body = DeepAffects.Audio.fromFile("/Users/syed/Desktop/audio/New-Recording-4.mp3"); // {Audio} Audio object

const callback = function(error, data, response) {
 if (error) {
   console.error(error);
 } else {
   console.log('API called successfully. Returned data: ' + JSON.stringify(data));
 }
};
apiInstance.syncRecogniseEmotion(body, callback);