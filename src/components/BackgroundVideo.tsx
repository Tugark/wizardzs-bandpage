import backgroundVideo from '../assets/background.mp4'
import React from 'react'
import './BackgroundVideo.css'

const BackgroundVideo = () => {
  return (
    <div className={'video-container-wrapper'}>
      <video playsInline autoPlay muted loop className={'video-container'}>
        <source src={backgroundVideo} type="video/mp4"/>
      </video>
    </div>
  )
}

export default BackgroundVideo