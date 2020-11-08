const app = () => {

    const song = document.querySelector('.song')
    const play = document.querySelector('.play')
    const outline = document.querySelector('moving-outline circle')
    const video = document.querySelector('.vid-container video')

    // Sound
    const sounds = document.querySelectorAll('.sound-picker button')
    // TimeDisplay
    const timeDisplay = document.querySelector('.time-display')
    const timeSelect = document.querySelectorAll('.time-select button')
    // Get the border length

    // duration
    let fakeDuration = 600

    // Pck different sound and video
    sounds.forEach(option => {
        option.addEventListener('click', function(){
            song.src = this.getAttribute('data-sound')
            video.src = this.getAttribute('data-video')
            play.src = './svg/play.svg'
        })
    })

    // Play Sound
    play.addEventListener('click', () => {
        checkPlaying(song)    
    })

    // Fucntion for playing and pasuing the song and vid
    const checkPlaying = song => {
        if (song.paused){
            song.play()
            video.play()
            play.src = './svg/pause.svg'
        } else {
            song.pause()
            video.pause()
            play.src = "./svg/play.svg"
        }
    } 

    // Select sound
    timeSelect.forEach(option => {
        option.addEventListener('click', function(){
            fakeDuration = this.getAttribute('data-time')
            timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}`
        })
    })

    // Backend of animation **32:45**
    song.ontimeupdate = () => {
        let currentTime = song.currentTime
        let elapsed = fakeDuration - currentTime
        let seconds = Math.floor(elapsed % 60)
        let minutes = Math.floor(elapsed / 60)

    // Animate the Text
    timeDisplay.textContent = `${minutes}:${seconds}`
    
        
    if (currentTime >= fakeDuration){
        song.pause()
        song.currentTime = 0  
        play.src = './svg/play.svg'
        video.pause();
    }

    }
    
}

app();