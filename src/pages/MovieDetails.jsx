import React, { useEffect, useState } from 'react'
import MovieDetail from '../components/MovieDetail/MovieDetail'
import { useParams } from 'react-router-dom'
import Header from '../components/Header/Header';

function MovieDetails() {

    const {id} = useParams();

    const [movie, setMovie] = useState(null);

    const fetchMovieDetails = async() => {
        try {
            const response = await fetch (`http://localhost:5000/getvideo/${id}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const result = await response.json();
            setMovie(result);
        }catch(error){
            console.error(error);
        }
    }

    useEffect(() => {
        fetchMovieDetails();
    }, []);

    console.log(movie);

    if(!movie){
        return <div>Loading.....</div>
    }

  return (
    <div>
      <Header/>  
      <MovieDetail movie={movie} banner={movie.infoBanner}/>
    </div>
  )
}

export default MovieDetails
