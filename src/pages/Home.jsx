import React, { useState } from 'react'
import Bannercontainer from '../components/Bannercontainer/Bannercontainer'
import Rowcontainer from '../components/Rowcontainer/Rowcontainer'
import Header from '../components/Header/Header'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function Home() {

  const navigate = useNavigate();

  const [randomMovie, setRandomMovie] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  const fetchHome = async() => {
    try{
      const token = localStorage.getItem('authToken');
      if(!token){
        navigate('/login');
        return;
      }
      const res = await fetch('http://localhost:5000/gethome',{
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        },
      });
      if(res.ok){
        const data = await res.json();
        console.log(data.message);
      }else{
        navigate('/login');
      }
    }catch(error){
      console.error(error);
      navigate('/login');
    }
  };

  const fetchRandomMovie = async() => {
    try{
      const token = localStorage.getItem('authToken');
      if(!token){
        navigate('/login');
        return;
      }
      const res = await fetch('http://localhost:5000/getrandommovie',{
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        },
      });
      if(res.ok){
        const data = await res.json();
        setRandomMovie(data.movie);
        console.log(data.movie);
      }
    }catch(error){
      console.error(error);
    }
  }

  useEffect(() => {
    fetchHome();
    fetchRandomMovie();
    const intervalid = setInterval(() => {
      fetchRandomMovie();
    }, 3600000);
    return () => clearInterval(intervalid);
  }, [navigate])

  return (
    <div>
      <Header logout={handleLogout}/>
      <Bannercontainer randomMovie={randomMovie}/>
      <Rowcontainer/>
    </div>
  )
}

export default Home
