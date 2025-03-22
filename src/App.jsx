import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Movie from './pages/Movie';
import Search from './pages/Search';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/movieslib" element={<Home />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="search" element={<Search />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
