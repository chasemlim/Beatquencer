// const board = require('./lib/board'); 

import Pad from './lib/pad';

console.log("something");


window.addEventListener('DOMContentLoaded', () => {
    console.log("loaded");
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext();

    const pad = new Pad('', audioCtx);
    window.pad = pad;

    console.log(pad);

    pad.play(audioCtx, pad.audioBuffer);
})