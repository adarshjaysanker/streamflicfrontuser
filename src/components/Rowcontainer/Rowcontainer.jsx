import React, { useEffect, useState } from 'react';
import './rowcontainer.css'
import Row from '../Row/Row';

function Rowcontainer() {

    const [movies, setMovies] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    const fetchAllMovies = async() => {
        try{
            const response = await fetch('https://api.streamflics.xyz/getallvideos',{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if(!response.ok){
              throw new Error('Network response was not okay')
            }
            const result = await response.json();
            console.log(result, 'result');
            setMovies(result)
        }catch(error){
          setError(error)
          console.log(error);
        }finally{
          setLoading(false)
        }
    }

    useEffect(() => {
        fetchAllMovies();
    }, []);

    console.log(movies);

    if(loading){
      return <div>Loading .... </div>
    }

    if(error){
      return <div>Error: {error.message}</div>
    }

  return (
    <div className='row-container'>
      {movies && Object.keys(movies).map((movie, index) => (
        <Row key={index} title={movie} movie={movies[movie]}/>
      ))}
    </div>
  )
}

export default Rowcontainer
