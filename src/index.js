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
        switch (pad.getAttribute('padType')) {
            case 'hihat':
                let $hhPad = $(`ul[id="hh"] > li[number="${pad.getAttribute('number')}"]`);
                $hhPad.data('pad', hihatPad);

                let hhList = document.querySelector('#hh');
                let hhPad = hhList.querySelector(`[number="${pad.getAttribute('number')}"]`);
                
                hhPad.setAttribute('data-active', 'off');

                hhPad.addEventListener('click', () => {
                    if (hhPad.getAttribute('data-active') === 'off') {
                        hhPad.setAttribute('data-active', 'on');
                        playLoop[0][parseInt(pad.getAttribute('number')) - 1] = 1;

                        $hhPad.data("pad").play();
                    } else {
                        hhPad.setAttribute('data-active', 'off');                   
                        playLoop[0][parseInt(pad.getAttribute('number')) - 1] = 0;
                    }
                })
                break;
            case 'tom1':
                let $t1Pad = $(`ul[id="t1"] > li[number="${pad.getAttribute('number')}"]`);
                $t1Pad.data('pad', tom1Pad);

                let t1List = document.querySelector('#t1');
                let t1Pad = t1List.querySelector(`[number="${pad.getAttribute('number')}"]`);            

                t1Pad.setAttribute('data-active', 'off');

                t1Pad.addEventListener('click', () => {
                    if (t1Pad.getAttribute('data-active') === 'off') {
                        t1Pad.setAttribute('data-active', 'on');
                        playLoop[1][parseInt(pad.getAttribute('number')) - 1] = 1;

                        $t1Pad.data("pad").play();
                    } else {
                        t1Pad.setAttribute('data-active', 'off');
                        playLoop[1][parseInt(pad.getAttribute('number')) - 1] = 0;
                    }
                })
                break;
            case 'tom2':
                let $t2Pad = $(`ul[id="t2"] > li[number="${pad.getAttribute('number')}"]`);
                $t2Pad.data('pad', tom2Pad);


                let t2List = document.querySelector('#t2');
                let t2Pad = t2List.querySelector(`[number="${pad.getAttribute('number')}"]`);
                
                t2Pad.setAttribute('data-active', 'off');

                t2Pad.addEventListener('click', () => {
                    if (t2Pad.getAttribute('data-active') === 'off') {
                        t2Pad.setAttribute('data-active', 'on');
                        playLoop[2][parseInt(pad.getAttribute('number')) - 1] = 1;

                        $t2Pad.data("pad").play();
                    } else {
                        t2Pad.setAttribute('data-active', 'off');
                        playLoop[2][parseInt(pad.getAttribute('number')) - 1] = 0;
                    }
                })
                break;
            case 'tom3':
                let $t3Pad = $(`ul[id="t3"] > li[number="${pad.getAttribute('number')}"]`);
                $t3Pad.data('pad', tom3Pad);
                
                let t3List = document.querySelector('#t3');
                let t3Pad = t3List.querySelector(`[number="${pad.getAttribute('number')}"]`);

                t3Pad.setAttribute('data-active', 'off');

                t3Pad.addEventListener('click', () => {
                    if (t3Pad.getAttribute('data-active') === 'off') {
                        t3Pad.setAttribute('data-active', 'on');
                        playLoop[3][parseInt(pad.getAttribute('number')) - 1] = 1;

                        $t3Pad.data("pad").play();
                    } else {
                        t3Pad.setAttribute('data-active', 'off');
                        playLoop[3][parseInt(pad.getAttribute('number')) - 1] = 0;
                    }
                })
                break;
            case 'tom4':
                let $t4Pad = $(`ul[id="t4"] > li[number="${pad.getAttribute('number')}"]`);
                $t4Pad.data('pad', tom4Pad);
                
                let t4List = document.querySelector('#t4');
                let t4Pad = t4List.querySelector(`[number="${pad.getAttribute('number')}"]`);

                t4Pad.setAttribute('data-active', 'off');

                t4Pad.addEventListener('click', () => {
                    if (t4Pad.getAttribute('data-active') === 'off') {
                        t4Pad.setAttribute('data-active', 'on');
                        playLoop[4][parseInt(pad.getAttribute('number')) - 1] = 1;

                        $t4Pad.data("pad").play();
                    } else {
                        t4Pad.setAttribute('data-active', 'off');
                        playLoop[4][parseInt(pad.getAttribute('number')) - 1] = 0;
                    }
                })
                break;
            case 'snare1':
                let $s1Pad = $(`ul[id="s1"] > li[number="${pad.getAttribute('number')}"]`);
                $s1Pad.data('pad', snare1Pad);
                
                let s1List = document.querySelector('#s1');
                let s1Pad = s1List.querySelector(`[number="${pad.getAttribute('number')}"]`);

                s1Pad.setAttribute('data-active', 'off');

                s1Pad.addEventListener('click', () => {
                    if (s1Pad.getAttribute('data-active') === 'off') {
                        s1Pad.setAttribute('data-active', 'on');
                        playLoop[5][parseInt(pad.getAttribute('number')) - 1] = 1;

                        $s1Pad.data("pad").play();
                    } else {
                        s1Pad.setAttribute('data-active', 'off');
                        playLoop[5][parseInt(pad.getAttribute('number')) - 1] = 0;
                    }
                })
                break;
            case 'snare2':
                let $s2Pad = $(`ul[id="s2"] > li[number="${pad.getAttribute('number')}"]`);
                $s2Pad.data('pad', snare2Pad);
                
                let s2List = document.querySelector('#s2');
                let s2Pad = s2List.querySelector(`[number="${pad.getAttribute('number')}"]`);

                s2Pad.setAttribute('data-active', 'off');

                s2Pad.addEventListener('click', () => {
                    if (s2Pad.getAttribute('data-active') === 'off') {
                        s2Pad.setAttribute('data-active', 'on');
                        playLoop[6][parseInt(pad.getAttribute('number')) - 1] = 1;

                        $s2Pad.data("pad").play();
                    } else {
                        s2Pad.setAttribute('data-active', 'off');
                        playLoop[6][parseInt(pad.getAttribute('number')) - 1] = 0;
                    }
                })
                break;
            case 'clap':
                let $clPad = $(`ul[id="cl"] > li[number="${pad.getAttribute('number')}"]`);
                $clPad.data('pad', clapPad);
                
                let clList = document.querySelector('#cl');
                let clPad = clList.querySelector(`[number="${pad.getAttribute('number')}"]`);

                clPad.setAttribute('data-active', 'off');

                clPad.addEventListener('click', () => {
                    if (clPad.getAttribute('data-active') === 'off') {
                        clPad.setAttribute('data-active', 'on');
                        playLoop[7][parseInt(pad.getAttribute('number')) - 1] = 1;

                        $clPad.data("pad").play();
                    } else {
                        clPad.setAttribute('data-active', 'off');
                        playLoop[7][parseInt(pad.getAttribute('number')) - 1] = 0;
                    }
                })
                break;
            case 'kick':
                let $kiPad = $(`ul[id="ki"] > li[number="${pad.getAttribute('number')}"]`);
                $kiPad.data('pad', kickPad);
                
                let kiList = document.querySelector('#ki');
                let kiPad = kiList.querySelector(`[number="${pad.getAttribute('number')}"]`);

                kiPad.setAttribute('data-active', 'off');

                kiPad.addEventListener('click', () => {
                    if (kiPad.getAttribute('data-active') === 'off') {
                        kiPad.setAttribute('data-active', 'on');
                        playLoop[8][parseInt(pad.getAttribute('number')) - 1] = 1;

                        $kiPad.data("pad").play();
                    } else {
                        kiPad.setAttribute('data-active', 'off');
                        playLoop[8][parseInt(pad.getAttribute('number')) - 1] = 0;
                    }
                })
                break;
            case 'sub':
                let $sbPad = $(`ul[id="sb"] > li[number="${pad.getAttribute('number')}"]`);
                $sbPad.data('pad', subPad);
                
                let sbList = document.querySelector('#sb');
                let sbPad = sbList.querySelector(`[number="${pad.getAttribute('number')}"]`);

                sbPad.setAttribute('data-active', 'off');

                sbPad.addEventListener('click', () => {
                    if (sbPad.getAttribute('data-active') === 'off') {
                        sbPad.setAttribute('data-active', 'on');
                        playLoop[9][parseInt(pad.getAttribute('number')) - 1] = 1;

                        $sbPad.data("pad").play();
                    } else {
                        sbPad.setAttribute('data-active', 'off');
                        playLoop[9][parseInt(pad.getAttribute('number')) - 1] = 0;
                    }
                })
                break;
            default:
                
        }
    })
    
    
    const playSample = (pad) => {
        pad.play();
    }

    let tempo = 128;
    const tempoControl = document.querySelector("#tempo");
    tempoControl.addEventListener('input', () => {
        tempo = Number(this.value);
    }, false)


    let currentPad = 0;
    let nextPadTiming = 0.0;

    const nextPad = () => {
        const secondsPerBeat = 60.0 / tempo;

        nextPadTiming += secondsPerBeat;

        currentPad++;
        if (currentPad == 16) currentPad = 0;
    }

    const padQueue = [];
    const pads = document.querySelectorAll("ul");
    console.log(pads);
    
    console.log(playLoop);
    
    const schedulePad = (beatNum, time) => {
        padQueue.push({ pad: beatNum, time: time });

        let $hhPad = $(`ul[id="hh"] > li[number="${currentPad + 1}"]`);
        let $t1Pad = $(`ul[id="t1"] > li[number="${currentPad + 1}"]`);
        let $t2Pad = $(`ul[id="t2"] > li[number="${currentPad + 1}"]`);
        let $t3Pad = $(`ul[id="t3"] > li[number="${currentPad + 1}"]`);
        let $t4Pad = $(`ul[id="t4"] > li[number="${currentPad + 1}"]`);
        let $s1Pad = $(`ul[id="s1"] > li[number="${currentPad + 1}"]`);
        let $s2Pad = $(`ul[id="s2"] > li[number="${currentPad + 1}"]`);
        let $clPad = $(`ul[id="cl"] > li[number="${currentPad + 1}"]`);
        let $kiPad = $(`ul[id="ki"] > li[number="${currentPad + 1}"]`);
        let $sbPad = $(`ul[id="sb"] > li[number="${currentPad + 1}"]`);

        if (playLoop[0][currentPad] === 1) playSample($hhPad.data('pad'));
        if (playLoop[1][currentPad] === 1) playSample($t1Pad.data('pad'));
        if (playLoop[2][currentPad] === 1) playSample($t2Pad.data('pad'));
        if (playLoop[3][currentPad] === 1) playSample($t3Pad.data('pad'));
        if (playLoop[4][currentPad] === 1) playSample($t4Pad.data('pad'));
        if (playLoop[5][currentPad] === 1) playSample($s1Pad.data('pad'));
        if (playLoop[6][currentPad] === 1) playSample($s2Pad.data('pad'));
        if (playLoop[7][currentPad] === 1) playSample($clPad.data('pad'));
        if (playLoop[8][currentPad] === 1) playSample($kiPad.data('pad'));
        if (playLoop[9][currentPad] === 1) playSample($sbPad.data('pad'));
    }

    const scheduler = () => {

    }
})