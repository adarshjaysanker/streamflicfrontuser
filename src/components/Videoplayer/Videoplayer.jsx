import React from 'react';
import ReactPlayer from 'react-player';
import './videoplayer.css'
import { useParams } from 'react-router-dom';


function Videoplayer() {

  const {movie} = useParams();
  const decodedVideoPath = decodeURIComponent(movie);
  const videoUrl = decodedVideoPath;

  console.log('videoURL:',videoUrl);
  
  return (
    <div className='video-player-container'>
       <ReactPlayer url={videoUrl} controls playing className='react-player'/>
    </div>
  )
}

export default Videoplayer
