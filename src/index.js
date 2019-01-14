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
                break;
            case 'tom1':
                let $t1Pad = $(`ul[id="t1"] > li[number="${pad.getAttribute('number')}"]`);
                $t1Pad.data('pad', tom1Pad);

                let t1List = document.querySelector('#t1');
                let t1Pad = t1List.querySelector(`[number="${pad.getAttribute('number')}"]`);            

                t1Pad.addEventListener('click', () => {
                    if (!t1Pad.classList.contains("on")) {
                        t1Pad.classList.add("on");
                        


                        playLoop[1][parseInt(pad.getAttribute('number')) - 1] = 1;
                        $t1Pad.data("pad").play();
                    } else {
                        
                        t1Pad.classList.remove("on");
                        playLoop[1][parseInt(pad.getAttribute('number')) - 1] = 0;
                    }
                })
                break;
            case 'tom2':
                let $t2Pad = $(`ul[id="t2"] > li[number="${pad.getAttribute('number')}"]`);
                $t2Pad.data('pad', tom2Pad);
                
                let t2List = document.querySelector('#t2');
                let t2Pad = t2List.querySelector(`[number="${pad.getAttribute('number')}"]`);

                t2Pad.addEventListener('click', () => {
                    if (!t2Pad.classList.contains("on")) {
                        t2Pad.classList.add("on");

                        playLoop[2][parseInt(pad.getAttribute('number')) - 1] = 1;
                        $t2Pad.data("pad").play();
                    } else {
                        t2Pad.classList.remove("on");
                        playLoop[2][parseInt(pad.getAttribute('number')) - 1] = 0;
                    }
                })
                break;
            case 'tom3':
                let $t3Pad = $(`ul[id="t3"] > li[number="${pad.getAttribute('number')}"]`);
                $t3Pad.data('pad', tom3Pad);
                
                let t3List = document.querySelector('#t3');
                let t3Pad = t3List.querySelector(`[number="${pad.getAttribute('number')}"]`);

                t3Pad.addEventListener('click', () => {
                    if (!t3Pad.classList.contains("on")) {
                        t3Pad.classList.add("on");

                        playLoop[3][parseInt(pad.getAttribute('number')) - 1] = 1;
                        $t3Pad.data("pad").play();
                    } else {
                        t3Pad.classList.remove("on");
                        playLoop[3][parseInt(pad.getAttribute('number')) - 1] = 0;
                    }
                })
                break;
            case 'tom4':
                let $t4Pad = $(`ul[id="t4"] > li[number="${pad.getAttribute('number')}"]`);
                $t4Pad.data('pad', tom4Pad);
                
                let t4List = document.querySelector('#t4');
                let t4Pad = t4List.querySelector(`[number="${pad.getAttribute('number')}"]`);

                t4Pad.addEventListener('click', () => {
                    if (!t4Pad.classList.contains("on")) {
                        t4Pad.classList.add("on");

                        playLoop[4][parseInt(pad.getAttribute('number')) - 1] = 1;
                        $t4Pad.data("pad").play();
                    } else {
                        t4Pad.classList.remove("on");
                        playLoop[4][parseInt(pad.getAttribute('number')) - 1] = 0;
                    }
                })
                break;
            case 'snare1':
                let $s1Pad = $(`ul[id="s1"] > li[number="${pad.getAttribute('number')}"]`);
                $s1Pad.data('pad', snare1Pad);
                
                let s1List = document.querySelector('#s1');
                let s1Pad = s1List.querySelector(`[number="${pad.getAttribute('number')}"]`);

                s1Pad.addEventListener('click', () => {
                    if (!s1Pad.classList.contains("on")) {
                        s1Pad.classList.add("on");

                        playLoop[5][parseInt(pad.getAttribute('number')) - 1] = 1;
                        $s1Pad.data("pad").play();
                    } else {
                        s1Pad.classList.remove("on");
                        playLoop[5][parseInt(pad.getAttribute('number')) - 1] = 0;
                    }
                })
                break;
            case 'snare2':
                let $s2Pad = $(`ul[id="s2"] > li[number="${pad.getAttribute('number')}"]`);
                $s2Pad.data('pad', snare2Pad);
                
                let s2List = document.querySelector('#t2');
                let s2Pad = s2List.querySelector(`[number="${pad.getAttribute('number')}"]`);

                s2Pad.addEventListener('click', () => {
                    if (!s2Pad.classList.contains("on")) {
                        s2Pad.classList.add("on");

                        playLoop[6][parseInt(pad.getAttribute('number')) - 1] = 1;
                        $s2Pad.data("pad").play();
                    } else {
                        s2Pad.classList.remove("on");
                        playLoop[6][parseInt(pad.getAttribute('number')) - 1] = 0;
                    }
                })
                break;
            case 'clap':
                let $clPad = $(`ul[id="cl"] > li[number="${pad.getAttribute('number')}"]`);
                $clPad.data('pad', clapPad);
                
                let clList = document.querySelector('#cl');
                let clPad = clList.querySelector(`[number="${pad.getAttribute('number')}"]`);

                clPad.addEventListener('click', () => {
                    if (!clPad.classList.contains("on")) {
                        clPad.classList.add("on");

                        playLoop[7][parseInt(pad.getAttribute('number')) - 1] = 1;
                        $clPad.data("pad").play();
                    } else {
                        clPad.classList.remove("on");
                        playLoop[7][parseInt(pad.getAttribute('number')) - 1] = 0;
                    }
                })
                break;
            case 'kick':
                let $kiPad = $(`ul[id="ki"] > li[number="${pad.getAttribute('number')}"]`);
                $kiPad.data('pad', kickPad);
                
                let kiList = document.querySelector('#ki');
                let kiPad = kiList.querySelector(`[number="${pad.getAttribute('number')}"]`);

                kiPad.addEventListener('click', () => {
                    if (!kiPad.classList.contains("on")) {
                        kiPad.classList.add("on");

                        playLoop[8][parseInt(pad.getAttribute('number')) - 1] = 1;
                        $kiPad.data("pad").play();
                    } else {
                        kiPad.classList.remove("on");
                        playLoop[8][parseInt(pad.getAttribute('number')) - 1] = 0;
                    }
                })
                break;
            case 'sub':
                let $sbPad = $(`ul[id="sb"] > li[number="${pad.getAttribute('number')}"]`);
                $sbPad.data('pad', subPad);
                
                let sbList = document.querySelector('#sb');
                let sbPad = sbList.querySelector(`[number="${pad.getAttribute('number')}"]`);

                sbPad.addEventListener('click', () => {
                    if (!sbPad.classList.contains("on")) {
                        sbPad.classList.add("on");

                        playLoop[9][parseInt(pad.getAttribute('number')) - 1] = 1;
                        $sbPad.data("pad").play();
                    } else {
                        sbPad.classList.remove("on");
                        playLoop[9][parseInt(pad.getAttribute('number')) - 1] = 0;
                    }
                })
                break;
            default:
                return nil;
        }
    })
    
    
    const playSample = (pad) => {
        pad.play();
    }



})