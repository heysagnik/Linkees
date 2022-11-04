import React, {useState} from 'react'
import { BiSkipPrevious, BiSkipNext, BiPause, BiPlay } from 'react-icons/bi';
import { songs } from '../assets/items';

export default function MusicPlayer(props: any) {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isPlayAnime, setIsPlayAnime] = useState(false)
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
    setIsPlayAnime(!isPlayAnime);
    song.audioSrc.play()
  }

  const pauseSong = () => {
    setIsPlaying(true)
    setIsPlayAnime(!isPlayAnime);
    song.audioSrc.pause()
  }

  return (
      <div>
        {props.view && (<div className={`music-container fade-in-bottom ${isPlayAnime ? `play` : ""}`}>
          <div className='music-wrapper'>
            <div className='music-info'>
                <h4 id='title'>{song.info.title}</h4>
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
