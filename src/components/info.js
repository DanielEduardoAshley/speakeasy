import React from 'react';
import { Link } from 'react-router-dom';


class Info extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                <h1> How does facial recognition work? </h1>
                <div className="container">
                    <img style={{ width: '300%', height: '300%' }} src={require('../assets/Howitworks.jpg')} className="img-fluid" alt="" />
                </div>
                <p>
                    Facial recognition is a way of recognizing a human face through technology.
                    Our facial recognition system uses biometrics to map facial features from a photograph or video.
                    It compares the information with a database of known faces to find a match.
                    Facial recognition can help verify personal identity.
               </p>

               <p>
               The facial recognition market is expected to grow to $7.7 billion in 2022 from $4 billion in 2017. That’s because facial recognition has all kinds of commercial applications. 
               It can be used for everything from surveillance to marketing.
               where it gets complicated. If privacy is important to you, you probably want some control over how your personal information — your data — is used. And here’s the thing: your “faceprint” is data.
               </p>

               <p>
               How facial recognition works You might be good at recognizing faces. 
               You probably find it a cinch to identify the face of a family member, friend, or acquaintance. 
               You’re familiar with their facial features — their eyes, nose, mouth — and how they come together.
               </p>

               <p>
               That’s how a facial recognition system works, but on a grand, algorithmic scale. 
               Where you see a face, recognition technology sees data. That data can be stored and accessed. For instance, half of all American adults have their images stored in one or more facial-recognition databases that law enforcement agencies can search, according to a Georgetown University study.
               So how does facial recognition work? Technologies vary, but here are the basic steps:
<ul>
<li>
Step 1. A picture of your face is captured from a photo or video. Your face might appear alone or in a crowd. Your image may show you looking straight ahead or nearly in profile.
</li>  
<li>
Step 2. Facial recognition software reads the geometry of your face. Key factors include the distance between your eyes and the distance from forehead to chin. The software identifies facial landmarks — one system identifies 68 of them — that are key to distinguishing your face. The result: your facial signature.
</li>
<li>
Step 3. Your facial signature — a mathematical formula — is compared to a database of known faces. And consider this: at least 117 million Americans have images of their faces in one or more police databases. According to a May 2018 report, the FBI has had access to 412 million facial images for searches.
</li>

<li>
Step 4. A determination is made. Your faceprint may match that of an image in a facial recognition system database.
</li>
</ul>
               </p>
            </>

        );
    }
}

export default Info;