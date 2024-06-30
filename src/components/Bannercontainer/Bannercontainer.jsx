import React from 'react';
import './bannercontainer.css'

function Bannercontainer() {
  return (
    <div className='banner-container'>
      <div className="banner-content">
        <h1 className='banner-title'>Breaking Bad</h1>
        <p className="banner-description">A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.</p>
        <div className="banner-buttons">
            <button className="banner-button info">Info</button>
            <button className="banner-button play">Play</button>
        </div>
      </div>
    </div>
  )
}

export default Bannercontainer
