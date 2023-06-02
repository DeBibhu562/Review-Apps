import ShowItem from './ShowItem';
import React, { useEffect, useState } from 'react';

const ShowList = () => {
    const [shows, setShows] = useState([]);
  
    useEffect(() => {
      fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(response => response.json())
        .then(data => setShows(data));
    }, []);
  
    return (
      <div className='List' >
        {shows.map(show => (
          <div key={show.show.id}>
            <ShowItem show={show.show} />
          </div>
        ))}
      </div>
    );
  };
  
export default ShowList;