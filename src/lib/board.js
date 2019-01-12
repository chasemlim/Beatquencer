import Pad from './pad';
import PlayButton from './playpause';

export default class Board {

    constructor(audioCtx) {
        this.audioCtx = audioCtx;
    }

    // const pad = new Pad('', audioCtx);

    initializePlayButton() {
        const playButton = new PlayButton(this.audioCtx);
    }


}

// const AudioContext = window.AudioContext || window.webkitAudioContext;
// const audioCtx = new AudioContext();



// console.log(pad);

// pad.play(audioCtx, pad.audioBuffer);