import React from 'react';
import axios from 'axios'
import Vue from 'vue'
import AudioVisual from 'vue-audio-visual'

Vue.use(AudioVisual)


class Record extends React.Component {
    constructor(props) {
        super(props);

    }
    
    render() {
        return (
            <>
                <h1> Press Record </h1>
            

            </>
        );
    };
};

export default Record;