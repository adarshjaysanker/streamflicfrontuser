import React, { useContext } from 'react';
import {useNavigate} from 'react-router-dom'
import './welcome.css'
import { UserContext } from '../../Usecontext/UserContext';

function Welcome() {

    const {user} = useContext(UserContext)
    const navigate = useNavigate();

    const getGreeting = () => {
        const hours = new Date().getHours();
        if(hours < 12) return 'Good Morning';
        if(hours < 18) return 'Good Afternoon';
        if(hours < 22) return 'Good Evening';
        return 'Good Night';
    }

    const handleExploreClick = () => {
        navigate('/');
    }

    if(!user){
        return <div>Loading......</div>
    }

  return (
    <div className='welcome-page'>
      <div className="welcome-container">
        <h1>{`${getGreeting()} ${user.fullname.split(' ')[0]}`}</h1>
        <h2>Welcome to Streamflics</h2>
        <button className="explore-button" onClick={handleExploreClick}>Explore Movies</button>
      </div>
    </div>
  )
}

export default Welcome
