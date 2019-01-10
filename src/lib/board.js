import Pad from './pad';

const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

const pad = new Pad('', audioCtx);