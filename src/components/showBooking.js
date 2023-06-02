import {React,useState} from 'react';

const ShowBooking = ({ show }) => {
  const selectedShow = JSON.parse(sessionStorage.getItem('selectedShow'));
  const [ticketCount, setTicketCount] = useState('');
  const [name, setName] = useState('');

  // Handler function to update the ticket count
  const handleTicketCountChange = (event) => {
    setTicketCount(event.target.value);
  };

  // Handler function to update the name
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem('selectedShow');
  };

  return (
    <div className='booking-form'>
      <h2>Booking Form</h2>
      <h2>{selectedShow.name}</h2>
      <img src={selectedShow.image.medium} alt='loading...' />
      <p>Language: {selectedShow.language}</p>

      
      <form onSubmit={handleSubmit}>
        <label>
            Network:
            <input type="text" value={selectedShow?.network.name} readOnly />
            <input type="text" value={selectedShow?.network.country.name} readOnly />
            <input type="text" value={selectedShow?.network.country.timezone} readOnly />
        </label>
        <label>
            No of Tickets:
            <input
                type="text"
                placeholder="No of Ticket"
                value={ticketCount}
                onChange={handleTicketCountChange}
            />
        </label>

        <label>
            Name:
            <input
                type="text"
                placeholder="Enter your Name"
                value={name}
                onChange={handleNameChange}
            />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ShowBooking;