import Pad from './pad';
import PlayButton from './playpause';

export default class Board {

    constructor(audioCtx) {
        this.audioCtx = audioCtx;
    }

    initializePlayButton() {
        const playButton = new PlayButton(this.audioCtx);
    }


}