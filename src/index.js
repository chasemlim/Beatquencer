import Board from './lib/board';
import Pad from './lib/pad';
import './assets/stylesheets/index.scss';

window.addEventListener('DOMContentLoaded', () => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext();
    audioCtx.suspend(); // AudioContext resume once user presses a button

    const pad = new Pad('', audioCtx);

    const board = new Board(audioCtx);

    const playPause = document.querySelector('button');

    playPause.addEventListener('click', function () { // creates play button

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
    
    const hihatPad = new Pad('hihat', audioCtx);
    const tom1Pad = new Pad('tom1', audioCtx);
    const tom2Pad = new Pad('tom2', audioCtx);
    const tom3Pad = new Pad('tom3', audioCtx);
    const tom4Pad = new Pad('tom4', audioCtx);
    const snare1Pad = new Pad('snare1', audioCtx);
    const snare2Pad = new Pad('snare2', audioCtx);
    const clapPad = new Pad('clap', audioCtx);
    const kickPad = new Pad('kick', audioCtx);
    const subPad = new Pad('sub', audioCtx);

    let playLoop = Array.apply(null, Array(10)).map(() => { return Array.apply(null, Array(16)).map(() => { return 0 }) });

    const playSample = (pad) => {
        pad.play();
    }

    const liList = document.querySelectorAll('li');

    liList.forEach((pad) => {
        switch (pad.id) {
            case 'hihat':
                let hhList = document.querySelector('#hh');
                // let hhPad = hhList.querySelector(`${pad.getAttribute('number')}`);
                // hhPad.setAttribute('pad', hihatPad);
                // return hhPad;
                let $hhPad = $(`ul[id="hh"] > li[number="${pad.getAttribute('number')}"]`);
                $hhPad.data('pad', hihatPad);
                console.log($hhPad.data('pad'));
                
                // pad.setAttribute('pad', hihatPad);
                // return pad;
            case 'tom1':

            case 'tom2':

            case 'tom3':

            case 'tom4':

            case 'snare1':

            case 'snare2':

            case 'clap':

            case 'kick':

            case 'sub':

            default:
                break;
        }
    })
    

})