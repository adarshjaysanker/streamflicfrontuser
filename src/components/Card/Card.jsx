import React, { memo } from 'react';
import './card.css'
import { useNavigate } from 'react-router-dom';

const Card = memo(({id, title, banner}) =>{

  const navigate = useNavigate();

  const handlecClick = () => {
    navigate(`/movie/${id}`);
  }

  console.log(id);

  return (
    <div className='card' onClick={handlecClick}>
      <img src={banner} alt="Fight Club" className='card-image' loading='lazy'/>
      <p className='card-title'>{title}</p>
    </div>
  )
});

export default Card
