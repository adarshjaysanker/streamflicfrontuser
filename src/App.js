import './App.css';


import {BrowserRouter as Router, Routes, Route} from'react-router-dom'
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Videoplayer from './components/Videoplayer/Videoplayer';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';



function App() {

  return (
     <Router>
      <div className="App">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/movie/:id' element={<MovieDetails/>}/>
            <Route path='/watch/:movie' element={<Videoplayer/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
          </Routes>
      </div>
    </Router>
    
    
  );
}

export default App;
