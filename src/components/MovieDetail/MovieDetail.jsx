import React, { useState } from 'react'
import './moviedetail.css';
import { useNavigate } from 'react-router-dom';
import Videoplayer from '../Videoplayer/Videoplayer';


function MovieDetail({movie, banner}) {

  const navigate = useNavigate();

   

  
  console.log(movie);

   const handlePlayButtonClick = () => {
     const encodedVideoPath = encodeURIComponent(movie.movieVideo);
     navigate(`/watch/${encodedVideoPath}`);
   }
   
  
return(
  <div className='movie-detail'>
    <video className='background-video' autoPlay muted loop>
      <source src={movie.trailerVideo} type='video/mp4'/>
      Your browser does not support the video tag
    </video>
    <div className="movie-detail-overlay">
      <div className="movie-banner">
        <div className="movie-banner-content">
            <h1 className='movie-title'>{movie.title}</h1> 
            <p className="movie-description">{movie.description}</p>
            <div className="button-container">
                <button className="play-button" onClick={handlePlayButtonClick}>Play</button>
                <button className="watch-later-button">Watch Later</button>
            </div>
        </div>
        <div className="movie-info">
          <h2>Details</h2>
          <p><strong>Release Date: </strong>{movie.releaseyear}</p>
          <p><strong>Genre: </strong>{movie.genres ? movie.genres.join(', ') : '-'}</p> 
          <p><strong>Cast: </strong>{movie.cast ? movie.cast.join(', ') : '-'}</p> 
          <p><strong>Duration: </strong>{movie.duration}</p>
          <p><strong>Certifications: </strong>{movie.certifications ? movie.certifications.join(', ') : '-'}</p>
        </div>
      </div>
    </div>
  </div>
   
    )
}

export default MovieDetail
