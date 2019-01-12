import Board from './lib/board';
import Pad from './lib/pad';

window.addEventListener('DOMContentLoaded', () => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext();
    audioCtx.suspend(); // AudioContext resume once user presses a button

    const pad = new Pad('', audioCtx);

    const board = new Board(audioCtx);

    const playPause = document.querySelector('button');

    playPause.addEventListener('click', function () {

            if (playPause.getAttribute('data-playing') === 'false') {
                console.log("YES");
                
                playPause.setAttribute('data-playing', true);
                audioCtx.resume();
            } else {
                console.log(playPause.getAttribute('data-playing'));
                
                playPause.setAttribute('data-playing', false);
                audioCtx.suspend();
            }

            pad.play(audioCtx, pad.audioBuffer);

    }); 
    
    // pad.play(audioCtx, pad.audioBuffer);
})