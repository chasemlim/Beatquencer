# Beat Pad (Title WIP)

Beat Pad (title is WIP) is an involved visual and audio experience where the user can create their own looping beat using square pads that represent different time subdivisions.

## Background and Overview

As a musician and music producer, I sought to combine two of my greatest passions, music and programming, and this concept suited me perfectly.

Sampling has been a huge contributor to modern music culture, especially in genres such as Hip-Hop & Electronic, diversifying the ways producers approached creating music.

Beat Pad (title WIP) will provide the user with a scaled down experience of what it is like to sample, using various drum samples and loops to create an original looping beat. Users can click on square pads arranged in a grid to trigger various samples at different times, and they can hear the product of their actions by clicking play and watching the grid light up.

## Functionality

The pads will be able to be clicked up to 4 times, with each click changing the volume (velocity) of the sample, allowing for more nuanced sampling. BPM will be default 120bpm and can be changed as well. There will be individual rows for different samples, including hi-hats, snare, kick, and sub-bass, among others. A play/pause button will be present as well to control playback.

The current rough way I envision being able to play the samples back is having an array for each instrument, with each index representing a different beat sub-division, and when the user clicks on a pad to light it up it inserts a number, and if a number is present when the array is iterated over during playback, the corresponding sample is played. I plan on exploring other solutions for this functionality, but at the moment this is what I plan to pursue.

## MVP Features

- **Basic samples are linked to on-screen button**
  - Set up data structures/arrays to hold sample triggers (theory discussed above in functionality)
  - Source and allocate samples
  - Create audio listeners for each instrument that will play the sample when triggered
  
- **Continuous, looping playback**
  - Playback basic functionality finished
  - Samples can be changed on the fly during playback
  
- **CSS Styling for main page**
  - Give squares detailed coloring and shading based on # of clicks/if currently being played
  - Make design striking and unique (will mostly be in color choice)

- **Toggle to change number of squares - different time subdivisions**
  - Allows a user to create more complex rhythms if desired (ex. switch grid from all 1/4 notes to 1/8, 1/16, etc)
  - Refactor backend arrays to have appropriate # of indices for increased/decreased # of squares

- **Custom BPM**
  - Allows for loops to be played back at different speeds
  - Create upper and lower bound
  
### Bonus

- **Custom samples**
  - Allow users to upload their own samples to use in the grid
  
- **Savable loops**
  - Functionality to save a current iteration of a loop and allow user to download

## Architecture and Technologies

- **Web Audio API**
  - API that handles audio with low latency and supports multiple sources firing simultaneously
  - More robust and flexible than attempting to create multiple HTML5 audio players, provides the project a stable base of audio implementation to build custom functionality off of

## Implementation Timeline

- **Wednesday 1/9/2019**
  - Do the appropriate research and readings on new technologies and previous project examples
  - Select samples from personal sample library to use
  
- **Thursday 1/10/2019**
  - Build out project skeleton and begin audio implementation and backend structure to support it
  
- **Friday 1/11/2019**
  - Finish audio implementation and have it functional by the end of the day
  - Start working on continuous playback
  
- **Saturday/Sunday 1/12-13/2019**
  - Ensure audio playback and sample triggering is bugfree and functional
  - Work on CSS styling for buttons
  
- **Monday 1/14/2019**
  - Finish CSS styling
  - Refactor code to allow for different amounts of squares
  
- **Tuesday 1/15/2019**
  - Implement custom BPM functionality
  - Production README
