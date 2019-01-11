const playPause = document.querySelector('playpause');

playPause.addEventListener('click', () => {

    if (playPause.hasAttribute('data-playing')) {
        console.log("YES");
        
    }
})

export default PlayButton;