export default class Pad { 

    // Pass in Audio Context from board
    constructor(soundType, audioCtx) {
        this.soundType = soundType;
        this.audioCtx = audioCtx;
        this.audioBuffer;
        this.sound = '';
        this.volume = 0;

        // this.addEventListener('click', () => {
        //     if (this.getAttribute('aria-checked') === false) {
        //         this.setAttribute('aria-checked', 'true');
        //     } else {
        //         this.setAttribute('aria-checked', 'false');
        //     }
        // })

        this.setupSample()
            .then((sample) => {

                // const playButton = document.querySelector('playpause');

                // if (!playButton.classList.contains('init')) {
                //     playButton.addEventListener('click', e => {
                        
                //     })
                // }

            })

        // this.sound.connect(audioCtx.destination);
    }

    determineSound() {
        switch (this.soundType) {
            case 'hihat':
                return '../src/assets/audio/hihat.wav';
            case 'tom1':
                return '../src/assets/audio/tom1.wav';
            case 'tom2':
                return '../src/assets/audio/tom2.wav';
            case 'tom3':
                return '../src/assets/audio/tom3.wav';
            case 'tom4':
                return '../src/assets/audio/tom4.wav';
            case 'snare1':
                return '../src/assets/audio/snare1.wav';
            case 'snare2':
                return '../src/assets/audio/snare1.wav';
            case 'clap':
                return '../src/assets/audio/clap.wav';
            case 'kick':
                return '../src/assets/audio/kick.wav';
            case 'sub':
                return '../src/assets/audio/subbass.wav';
            default:
                return '../src/assets/audio/drums.wav';
        }
    }

    async getFile(audioCtx, filepath) { // this works now
        const res = await fetch(filepath);

        const arrayBuffer = await res.arrayBuffer();
        const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
        this.audioBuffer = audioBuffer;    
        return audioBuffer;
    }

    async setupSample() {
        const filePath = this.determineSound();
        
        const sample = await this.getFile(this.audioCtx, filePath);
        return sample;
    }


    play(audioCtx, audioBuffer) {
        const sampleSource = audioCtx.createBufferSource();
        sampleSource.buffer = audioBuffer; // AudioBuffer comes from this.audioBuffer
        sampleSource.connect(audioCtx.destination);
        sampleSource.start();
        return sampleSource;
    }
}