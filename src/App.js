import {React, useEffect, useState }from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';
import ShowBookings from './components/showBooking'

const App = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setShows(data)});
  }, []);


  return (
    <Router>
      <div className='pages'>
        <nav className='Home'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Routes> {/* Wrap routes with <Routes> */}
          <Route path="/" element={<ShowList />} /> 
          {shows.map(show => (
            < >
              {console.log(show)}
              <Route key={show.show.id} path={`/show/${show.show.id}`} element={<ShowDetails show={show.show} id={show.show.id}/>} />
            </>
          ))}
            <Route path="/booking/" element={<ShowBookings />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
