import Board from './lib/board';
import Pad from './lib/pad';
import './assets/stylesheets/index.scss';

window.addEventListener('DOMContentLoaded', () => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext();
    // const gainNode = audioCtx.createGain();
    // gainNode.connect(audioCtx.destination);
    // const source = audioCtx.createMediaStreamSource(stream);
    audioCtx.suspend(); // AudioContext resume once user presses a button

    const board = new Board(audioCtx);

    let playing = true;

    const hihatPad = new Pad('hihat', audioCtx);
    const tom1Pad = new Pad('tom1', audioCtx);
    const tom2Pad = new Pad('tom2', audioCtx);
    const tom3Pad = new Pad('tom3', audioCtx);
    const tom4Pad = new Pad('tom4', audioCtx);
    const snare1Pad = new Pad('snare1', audioCtx);
    const snare2Pad = new Pad('snare2', audioCtx);
    const clapPad = new Pad('clap', audioCtx);
    const kickPad = new Pad('kick', audioCtx);

    const liList = document.querySelectorAll('li');

    let playLoop = Array.apply(null, Array(9)).map(() => { return Array.apply(null, Array(16)).map(() => { return 0 }) });

    // Adding event listeners to all drum pads and initialize board
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
            default:
                
        }
    })
    
    // Initialize mute button and event listener
    // const mute = document.querySelector('.mute-button');

    // mute.addEventListener('click', () => {
    //     if (mute.id == "") {
    //         gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    //         mute.id = "muted";
    //     } else {
    //         gainNode.gain.setValueAtTime(1, audioCtx.currentTime);
    //         mute.id = "";
    //     }
    // });
    

    const playSample = (pad) => {
        pad.play();
    }

    let tempo = 128;
    const tempoControl = document.querySelector("#tempo");
    const bpmValue = document.querySelector('#bpm-value');

    tempoControl.addEventListener('input', () => {
        tempo = Number(tempoControl.value);
        bpmValue.innerText = tempo;
    }, false)


    let currentPad = 0;
    let nextPadTiming = 0.0;

    const nextPad = () => {
        const secondsPerBeat = 60.0 / (tempo * 4);
        
        nextPadTiming += secondsPerBeat;
        
        currentPad++;
        if (currentPad == 16) currentPad = 0;
    }

    const padQueue = [];

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

        let prevPads;

        if (currentPad === 0) {
            prevPads = document.querySelectorAll(`ul > li[number="16"]`);
        } else {
            prevPads = document.querySelectorAll(`ul > li[number="${currentPad}"]`);
        }
        
        let lightUpPads = document.querySelectorAll(`ul > li[number="${currentPad + 1}"]`);

        prevPads.forEach(pad => {
            pad.classList.remove('beat-active');
        })

        lightUpPads.forEach(pad => {
            pad.classList.add('beat-active');
        });

        if (playLoop[0][currentPad] === 1) playSample($hhPad.data('pad'));
        if (playLoop[1][currentPad] === 1) playSample($t1Pad.data('pad'));
        if (playLoop[2][currentPad] === 1) playSample($t2Pad.data('pad'));
        if (playLoop[3][currentPad] === 1) playSample($t3Pad.data('pad'));
        if (playLoop[4][currentPad] === 1) playSample($t4Pad.data('pad'));
        if (playLoop[5][currentPad] === 1) playSample($s1Pad.data('pad'));
        if (playLoop[6][currentPad] === 1) playSample($s2Pad.data('pad'));
        if (playLoop[7][currentPad] === 1) playSample($clPad.data('pad'));
        if (playLoop[8][currentPad] === 1) playSample($kiPad.data('pad'));
    }

    let timerID;
    const lookahead = 25.0;
    const scheduleAheadTime = 0.1

    const scheduler = () => {
        while (nextPadTiming < audioCtx.currentTime + scheduleAheadTime) {
            schedulePad(currentPad, nextPadTiming);
            nextPad();
        }
        timerID = window.setTimeout(scheduler, lookahead);
    }


    const playPause = document.querySelector('.play-pause-button');

    const switchIcon = (button) => {
        if (button.classList.contains('fa-play')) {
            button.classList.remove('fa-play');
            button.classList.add('fa-pause');
        } else {
            button.classList.remove('fa-pause');
            button.classList.add('fa-play');
        }
    }

    playPause.addEventListener('click', function () { // creates play button

        if (playPause.getAttribute('data-playing') === 'false') {

            switchIcon(playPause);
            playPause.setAttribute('data-playing', true);
            playing = true;
            audioCtx.resume();

            currentPad = 0;
            nextPadTiming = audioCtx.currentTime;

            scheduler();
        } else {
            window.clearTimeout(timerID);

            switchIcon(playPause);
            playPause.setAttribute('data-playing', false);
            playing = false;
        }
    });

    const lightShow = () => {

        let ulIds = [
            'hh',
            't1',
            't2',
            't3',
            't4',
            's1',
            's2',
            'cl',
            'ki'
        ];
        
        let lightCols = (i = 0) => {

            let timerId = setTimeout(() => {
                let horizontal = document.querySelectorAll(`ul > li[number="${i + 1}"]`);
                let previous = document.querySelectorAll(`ul > li[number="${i - 15}"]`);

                if (i < 32) {
                    horizontal.forEach((pad) => {
                        pad.setAttribute('data-active', 'on');
                    })

                    previous.forEach((pad) => {
                        pad.setAttribute('data-active', 'off');
                    })

                    i++;

                    lightCols(i);
                } else {
                    clearTimeout(timerId);
                }
            }, 28);    
        };

        let lightRows = (i = 0) => {

            let timerId = setTimeout(() => {
                let vertical = document.querySelectorAll(`ul[id='${ulIds[i]}']`);
                let previous = document.querySelectorAll(`ul[id='${ulIds[i - 9]}']`);
                
                if (i < 18) {
                    if (vertical.length !== 0) {
                        Array.from(vertical[0].children).forEach((pad) => {
                            pad.setAttribute('data-active', 'on');
                        })
                    }

                    if (previous.length !== 0) {
                        Array.from(previous[0].children).forEach((pad) => {
                            pad.setAttribute('data-active', 'off');
                        })
                    }


                    i++;

                    lightRows(i);
                } else {
                    clearTimeout(timerId);
                }
            }, 35);
        };

        let diagonal1 = (ulIdx = 0, colIdx = 1) => {

            let timerId = setTimeout(() => {
                let vertical = document.querySelectorAll(`ul[id='${ulIds[ulIdx]}']`);

                if (ulIdx < 9) {
                    let padarr = Array.from(vertical[0].children);

                    for (let i = 0; i <= colIdx; i++) {
                        padarr[i].setAttribute('data-active', 'on');
                    }

                    ulIdx++;

                    if ((ulIdx % 2) === 1) {
                        colIdx++;
                    } else {
                        colIdx = colIdx + 2;
                    }

                    diagonal1(ulIdx, colIdx);
                } else {
                    clearTimeout(timerId);
                }
            }, 40);
        }

        let diagonal2 = (ulIdx = 8, colIdx = 13) => {

            let timerId = setTimeout(() => {
                let vertical = document.querySelectorAll(`ul[id='${ulIds[ulIdx]}']`);

                if (ulIdx >= 0) {
                    let padarr = Array.from(vertical[0].children);

                    for (let i = 15; i > colIdx; i--) {
                        padarr[i].setAttribute('data-active', 'on');
                    }

                    ulIdx--;

                    if ((ulIdx % 2) === 0) {
                        colIdx--;
                    } else {
                        colIdx = colIdx - 2;
                    }

                    diagonal2(ulIdx, colIdx);
                } else {
                    clearTimeout(timerId);
                }
            }, 40);

        }

        let diagonal1Clear = (ulIdx = 8, colIdx = 13) => {

            let timerId = setTimeout(() => {
                let vertical = document.querySelectorAll(`ul[id='${ulIds[ulIdx]}']`);

                if (ulIdx >= 0) {
                    let padarr = Array.from(vertical[0].children);

                    for (let i = 0; i <= colIdx; i++) {
                        padarr[i].setAttribute('data-active', 'off');
                    }

                    ulIdx--;

                    if ((ulIdx % 2) === 0) {
                        colIdx = colIdx - 2;
                    } else {
                        colIdx--;
                    }

                    diagonal1Clear(ulIdx, colIdx);
                } else {
                    clearTimeout(timerId);
                }
            }, 40);
        };

        let diagonal2Clear = (ulIdx = 0, colIdx = 2) => {

            let timerId = setTimeout(() => {
                let vertical = document.querySelectorAll(`ul[id='${ulIds[ulIdx]}']`);

                if (ulIdx < 9) {
                    let padarr = Array.from(vertical[0].children);

                    for (let i = colIdx; i < 16; i++) {
                        padarr[i].setAttribute('data-active', 'off');
                    }

                    ulIdx++;

                    if ((ulIdx % 2) === 0) {
                        colIdx = colIdx + 2;
                    } else {
                        colIdx++;
                    }

                    diagonal2Clear(ulIdx, colIdx);
                } else {
                    clearTimeout(timerId);
                }
            }, 40);
        }

        setTimeout(() => lightCols(), 1100);
        setTimeout(() => lightRows(), 2190);
        setTimeout(() => diagonal1(), 2680);
        setTimeout(() => diagonal2(), 3040);
        setTimeout(() => {
            diagonal1Clear(); 
            diagonal2Clear();
        }, 3500);
    }

    lightShow();

    const initializeBoard = (sampleLoop = [
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
            [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
        ]
        ) => {

        let ulIds = [
            'hh',
            't1',
            't2',
            't3',
            't4',
            's1',
            's2',
            'cl',
            'ki'
        ];

        playLoop = sampleLoop;

        for (let i = 0; i < ulIds.length; i++) {
            let vertical = document.querySelectorAll(`ul[id='${ulIds[i]}']`);
            let padarr = Array.from(vertical[0].children);

            for (let j = 0; j < 16; j++) {
                if (sampleLoop[i][j] === 1) {
                    padarr[j].setAttribute('data-active', 'on');
                }
            }
        }
    }

    setTimeout(() => initializeBoard(), 4200);


    const clearBoard = () => {
        document.querySelectorAll('.pad').forEach((pad) => {
            if (pad.getAttribute('data-active', 'on')) {
                pad.setAttribute('data-active', 'off');
            }
        })
    }


    const sample1 = document.querySelector('.beat1');
    const sample2 = document.querySelector('.beat2');
    const sample3 = document.querySelector('.beat3');
    
    sample1.addEventListener('click', () => {
        clearBoard();
        initializeBoard([
            [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        ]);
    });

    sample2.addEventListener('click', () => {
        clearBoard();
        initializeBoard([
            [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        ]);
    });
    
    sample3.addEventListener('click', () => {
        clearBoard();
        initializeBoard([
            [0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        ]);
    })


    const clearButton = document.querySelector('.clear-button');

    clearButton.addEventListener('click', () => {
        clearBoard();
        playLoop = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ];
    })
});
