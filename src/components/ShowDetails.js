import React from 'react';
import { Link } from 'react-router-dom';


const ShowDetails = ({ show,id}) => {
  
  if (!show) {
    return <div>Loading...</div>; 
  }
  if (show.id !== id) {
    return <div>No matching show found.</div>;
  }

  const handleBookTicket = () => {
    sessionStorage.setItem('selectedShow', JSON.stringify(show));
    window.open('/booking', '_blank');
  };

  const summaryString=show.summary;
  const summaryElement = React.createElement("div", {
  dangerouslySetInnerHTML: { __html: summaryString }
  });

  return (
      <div className='show-details' key = {show.id}>
        <h2>{show.name}</h2>
        <img src={show.image.medium} alt='loading...' />
        {summaryElement}
        <p>Type: {show.type}</p>
        <p>Language: {show.language}</p>
        <p>Runtime: {show.runtime}</p>
        <p>Status: {show.status}</p>
        <p>Genres: {show.genres}</p>
        <p>Rating : {show.rating.average}</p>
        <h4><a href={show.url}>For Original content</a></h4>
        <button onClick={handleBookTicket}>Book Ticket</button>
        <Link to="/">Go Back</Link>
      </div>
  );
};

export default ShowDetails;
