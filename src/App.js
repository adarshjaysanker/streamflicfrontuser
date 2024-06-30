import './App.css';
import Header from './components/Header/Header';

import {BrowserRouter as Router, Routes, Route} from'react-router-dom'
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Videoplayer from './components/Videoplayer/Videoplayer';



function App() {

  return (
     <Router>
      <div className="App">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/movie/:id' element={<MovieDetails/>}/>
            <Route path='/watch/:movie' element={<Videoplayer/>}/>
          </Routes>
      </div>
    </Router>
    
    
  );
}

export default App;
