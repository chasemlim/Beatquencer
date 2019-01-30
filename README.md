# Beatquencer

[https://chasemlim.github.io/Beatquencer/](https://chasemlim.github.io/Beatquencer/)

Beatquencer is an involved visual and audio experience where the user can create their own looping beat using square pads that represent different time subdivisions. Beatquencer was built using JavaScript, JQuery, Web Audio API, and CSS3/Sass.

![Beatquencer](https://i.imgur.com/lurRXEl.png)

## Background and Overview

As a musician and music producer, I sought to combine two of my greatest passions, music and programming, and this concept suited me perfectly.

Sampling has been a huge contributor to modern music culture, especially in genres such as Hip-Hop & Electronic, diversifying the ways producers approached creating music.

Beatquencer will provide the user with a scaled down experience of what it is like to sample, using various drum samples and loops to create an original looping beat. Users can click on square pads arranged in a grid to trigger various samples at different times, and they can hear the product of their actions by clicking play and watching the grid light up.

## Technologies Used

- JavaScript(ES5/ES6)
- JQuery
- Web Audio API
- CSS3/Sass
- Webpack

## Features & Implementation

### Beat Pad

![PadAnimation](https://i.imgur.com/EMZrDf0.gif)

By clicking on the individual squares, users trigger the drum samples associated with that square, and queue them up for playback.

Below is an example of how I used JavaScript to turn the squares on the screen into functional elements. I used a tiny bit of JQuery in order to associate a `Pad` object and all of the related methods to the DOM element, making it easier in the long run to call methods and set parameters. An EventListener was then attached to the pad in order to enqueue the sample for playback, change attribute values, and actually play the sample on click.

```
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
```

### Tempo Gauge

![Tempo](https://i.imgur.com/xxsxu5F.png)

The tempo at which the beat runs is controlled by the tempo range, and has an lower and upper bound of 30 BPM and 240 BPM, respectively.

### Sample Beats

There are three additional sample beats for users to try out and build off of, allowing them to see Beatquencer's capabilities.
