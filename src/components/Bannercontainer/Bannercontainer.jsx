import React from 'react';
import './bannercontainer.css'
import { useNavigate } from 'react-router-dom';

function Bannercontainer({randomMovie}) {

  const navigate = useNavigate();

  if(!randomMovie){
    return <div>Loading .....</div>
  }

  const backgroundImageStyle = {
    backgroundImage: `url(${randomMovie.infoBanner})`
  }

  const handlePlayClick = () => {
    const encodedMoviePath = encodeURIComponent(randomMovie.movieVideo);
    navigate(`/watch/${encodedMoviePath}`)
  }

  const handleInfoClick = () => {
    navigate(`movie/${randomMovie._id}`);
  }

  return (
    <div className='banner-container' style={backgroundImageStyle}>
      <div className="banner-content">
        <h1 className='banner-title'>{randomMovie.title}</h1>
        <p className="banner-description">{randomMovie.description}</p>
        <div className="banner-buttons">
            <button className="banner-button info" onClick={handleInfoClick}>Info</button>
            <button className="banner-button play" onClick={handlePlayClick}>Play</button>
        </div>
      </div>
    </div>
  )
}

export default Bannercontainer
