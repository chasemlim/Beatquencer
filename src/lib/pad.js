export class Pad {

    // Pass in Audio Context from board
    constructor(soundType, audioCtx) {
        this.soundType = soundType;
        this.audioCtx = audioCtx;
        this.audioBuffer = nil;
        this.sound = '';
        this.volume = 0;

        this.addEventListener('click', () => {
            if (this.getAttribute('aria-checked') === false) {
                this.setAttribute('aria-checked', 'true');
            } else {
                this.setAttribute('aria-checked', 'false');
            }
        })

        setupSample()
            .then((sample) => {

                // const playButton = document.querySelector('playpause');

                // if (!playButton.classList.contains('init')) {
                //     playButton.addEventListener('click', e => {
                        
                //     })
                // }

            })

        this.sound.connect(audioCtx.destination);
    }

    async getFile(audioCtx, filepath) {
        const res = await fetch(filepath);
        const arrayBuffer = await Response.arrayBuffer();
        const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
        this.audioBuffer = audioBuffer;
        return audioBuffer;
    }

    async setupSample() {
        const filePath = determineSound();
        const sample = await getFile(this.audioCtx, filePath);
        return sample;
    }


    play(audioCtx, audioBuffer) {
        const sampleSource = audioCtx.createBufferSource();
        sampleSource.buffer = audioBuffer;
        sampleSource.connect(audioCtx.destination);
        sampleSource.start();
        return sampleSource;
    }

    determineSound() {
        switch (this.soundType) {
            case 'hihat':
                // this.sound = 
            case 'tom1':

            case 'tom2':

            case 'tom3':

            case 'tom4':

            case 'snare':

            case 'clap':

            case 'kick':

            case 'sub':

            default:
                return '../assets/audio/drums.wav';
        }
    }
}