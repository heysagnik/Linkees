import React, {useRef, useState} from 'react'
import { BiSkipPrevious, BiSkipNext, BiPause, BiPlay } from 'react-icons/bi';

//testing
import { songs } from '../assets/items';

export default function MusicPlayer() {
  // type Show = typeof Boolean;
  const [show, setShow] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)
  const totalSongs = songs.length
  let songIdx = 0
  const [song, setSong] = useState({info: songs[songIdx], audioSrc: new Audio(songs[songIdx].audio)})

  const prevSong = () => {
    if(songIdx < 0) {
      songIdx = 0
    } else {
      songIdx = songIdx - 1
    }
    setSong({info: songs[songIdx], audioSrc: new Audio(songs[songIdx].audio)})
  }

  const nextSong = () => {
    if(songIdx > totalSongs - 1) {
      songIdx = 0
    } else {
      songIdx = songIdx + 1
    }
    setSong({info: songs[songIdx], audioSrc: new Audio(songs[songIdx].audio)})
  }

  const playSong = () => {
    setIsPlaying(false)
    song.audioSrc.play()
  }

  const pauseSong = () => {
    setIsPlaying(true)
    song.audioSrc.pause()
  }

  return (
    <div>
    {show && (<div className='music-container'>
      <div className='music-wrapper'>
        <div className='music-info'>
            <h4 id='title'>{song.info.title}</h4>
            <div className='progress-container'>
                <div className='progress'>

                </div>
            </div>
        </div>
        <div className='img-container'>
            <img src={song.info.image} alt='music-cover' id='cover'/>
        </div>
        <div className='navigation'>
          <button id="prev" className='btn-prev action-btn' onClick={prevSong}>
            <BiSkipPrevious fontSize='3rem' />
          </button>
          {isPlaying === true ? (<button id="play" className='btn-play action-btn-big' onClick={playSong}>
            <BiPlay fontSize='4rem' />
          </button>) :  <button id="pause" className='btn-play action-btn-big' onClick={pauseSong}>
            <BiPause fontSize='4rem' />
          </button>
          }
          <button id="next" className='btn-next action-btn' onClick={nextSong} >
            <BiSkipNext fontSize='3rem' />
          </button>
        </div>
      </div>
    </div>)}
    </div>
  )
}
