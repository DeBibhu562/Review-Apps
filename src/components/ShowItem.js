import React from 'react';
import {  useNavigate } from 'react-router-dom';

const ShowItem = ({ show }) => {
  const navigate = useNavigate();

  const handleViewSummary = () => {
    const summaryUrl = `/show/${show.id}`; // Construct the URL using show.id
    navigate(summaryUrl); // Navigate to the summary screen
  };
  const summaryString=show.summary;
  const summaryElement = React.createElement("div", {
    dangerouslySetInnerHTML: { __html: summaryString }
  });
  return (
    <div className='Item' >
      <h3 className='Item-title'>{show.name}</h3>
      <img src={show.image.medium} alt='loading...' />
      <h5 className='Item-summery'>{summaryElement}</h5>
      <button className='Item-btn' onClick={handleViewSummary}>View Summary</button>
    </div>
  );
};

export default ShowItem;
