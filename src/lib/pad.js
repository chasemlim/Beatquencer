const audioCtx = new AudioContext();

class Pad {

    constructor(soundType) {
        this.soundType = soundType;

        this.addEventListener('click', () => {
            if (this.getAttribute('aria-checked') === false) {
                this.setAttribute('aria-checked', 'true');
            } else {
                this.setAttribute('aria-checked', 'false');
            }
        })
    }



}