import Board from './lib/board';
import Pad from './lib/pad';

window.addEventListener('DOMContentLoaded', () => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext();
    audioCtx.suspend(); // AudioContext resume once user presses a button

    const pad = new Pad('', audioCtx);
    window.pad = pad;

    const board = new Board(audioCtx);

    document.querySelector('button').addEventListener('click', function () {
        audioCtx.resume().then(() => {
            // console.log('Playback resumed successfully');
            pad.play(audioCtx, pad.audioBuffer);
        });
    }); 
    
    // pad.play(audioCtx, pad.audioBuffer);
})