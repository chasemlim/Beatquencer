import Board from './lib/board';
import Pad from './lib/pad';
import './assets/stylesheets/index.scss';

window.addEventListener('DOMContentLoaded', () => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext();
    audioCtx.suspend(); // AudioContext resume once user presses a button

    const board = new Board(audioCtx);

    let playing = true;

    const playPause = document.querySelector('button');

    playPause.addEventListener('click', function () { // creates play button

        if (playPause.getAttribute('data-playing') === 'false') {

            playPause.setAttribute('data-playing', true);
            playing = true;
            audioCtx.resume();
        } else {

            playPause.setAttribute('data-playing', false);
            playing = false;
            audioCtx.suspend();
        }
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

    const liList = document.querySelectorAll('li');

    let playLoop = Array.apply(null, Array(10)).map(() => { return Array.apply(null, Array(16)).map(() => { return 0 }) });

    liList.forEach((pad) => {
        switch (pad.id) {
            case 'hihat':
                let $hhPad = $(`ul[id="hh"] > li[number="${pad.getAttribute('number')}"]`);
                $hhPad.data('pad', hihatPad);

                let hhList = document.querySelector('#hh');
                let hhPad = hhList.querySelector(`[number="${pad.getAttribute('number')}"]`);
                
                hhPad.addEventListener('click', () => {
                    if (!hhPad.classList.contains("on")) {
                        hhPad.classList.add("on");

                        playLoop[0][parseInt(pad.getAttribute('number')) - 1] = 1;
                        $hhPad.data("pad").play();
                    } else {
                        hhPad.classList.remove("on");
                        playLoop[0][parseInt(pad.getAttribute('number')) - 1] = 0;
                    }
                })
                
            case 'tom1':
                let $t1Pad = $(`ul[id="t1"] > li[number="${pad.getAttribute('number')}"]`);
                $t1Pad.data('pad', tom1Pad);
                return $t1Pad;
            case 'tom2':
                let $t2Pad = $(`ul[id="t2"] > li[number="${pad.getAttribute('number')}"]`);
                $t2Pad.data('pad', tom2Pad);
                return $t2Pad;
            case 'tom3':
                let $t3Pad = $(`ul[id="t3"] > li[number="${pad.getAttribute('number')}"]`);
                $t3Pad.data('pad', tom3Pad);
                return $t3Pad;
            case 'tom4':
                let $t4Pad = $(`ul[id="t4"] > li[number="${pad.getAttribute('number')}"]`);
                $t4Pad.data('pad', tom4Pad);
                return $t4Pad;
            case 'snare1':
                let $s1Pad = $(`ul[id="s1"] > li[number="${pad.getAttribute('number')}"]`);
                $s1Pad.data('pad', snare1Pad);
                return $s1Pad;
            case 'snare2':
                let $s2Pad = $(`ul[id="s2"] > li[number="${pad.getAttribute('number')}"]`);
                $s2Pad.data('pad', snare2Pad);
                return $s2Pad;
            case 'clap':
                let $clPad = $(`ul[id="cl"] > li[number="${pad.getAttribute('number')}"]`);
                $clPad.data('pad', clapPad);
                return $clPad;
            case 'kick':
                let $kiPad = $(`ul[id="ki"] > li[number="${pad.getAttribute('number')}"]`);
                $kiPad.data('pad', kickPad);
                return $kiPad;
            case 'sub':
                let $sbPad = $(`ul[id="sb"] > li[number="${pad.getAttribute('number')}"]`);
                $sbPad.data('pad', subPad);
                return $sbPad;
            default:
                return nil;
        }
    })
    
    
    const playSample = (pad) => {
        pad.play();
    }



})