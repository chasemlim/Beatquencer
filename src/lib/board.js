import Pad from './pad';
import PlayButton from './playpause';

const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

const pad = new Pad('', audioCtx);



// console.log(pad);

// pad.play(audioCtx, pad.audioBuffer);