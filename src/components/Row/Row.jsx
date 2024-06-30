import React, { memo } from 'react';
import './row.css'
import Card from '../Card/Card';

const Row = memo(({title, movie}) =>{

    console.log(movie, title);

  return (
    <div className='row'>
      <h2 className='row-title'>{title}</h2>
      <div className="row-cards">
        {movie.map((m) => (
            <Card id={m._id} title={m.title} banner={m.titleBanner} />
        ))}
      </div>
    </div>
  )
})

export default Row
