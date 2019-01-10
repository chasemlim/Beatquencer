const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

class Pad {

    constructor(soundType) {
        this.soundType = soundType;
        this.sound = nil;

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
                return nil;
        }

        this.addEventListener('click', () => {
            if (this.getAttribute('aria-checked') === false) {
                this.setAttribute('aria-checked', 'true');
            } else {
                this.setAttribute('aria-checked', 'false');
            }
        })
    }

    

}