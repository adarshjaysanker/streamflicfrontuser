import React from 'react'
import Bannercontainer from '../components/Bannercontainer/Bannercontainer'
import Rowcontainer from '../components/Rowcontainer/Rowcontainer'
import Header from '../components/Header/Header'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function Home() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  useEffect(() => {
    const fetchHome = async() => {
      try{
        const token = localStorage.getItem('authToken');
        if(!token){
          navigate('/login');
        }
        const res = await fetch('https://api.streamflics.xyz/gethome',{
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          },
        });
        if(res.ok){
          const data = await res.json();
          console.log(data.message);
        }
      }catch(error){
        console.error(error);
        navigate('/login');
      }
    }
    fetchHome();
  }, [navigate])

  return (
    <div>
      <Header logout={handleLogout}/>
      <Bannercontainer/>
      <Rowcontainer/>
    </div>
  )
}

export default Home
