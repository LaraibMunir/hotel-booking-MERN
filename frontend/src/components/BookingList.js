import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('/api/bookings')
      .then(response => setBookings(response.data))
      .catch(error => console.error('Error fetching bookings:', error));
  }, []);

  const handleApproval = (id) => {
    axios.put(`/api/bookings/approve/${id}`)
      .then(() => setBookings(bookings.map(booking => booking._id === id ? { ...booking, status: 'Approved' } : booking)))
      .catch(error => console.error('Error approving booking:', error));
  };

  const handleRejection = (id) => {
    axios.put(`/api/bookings/reject/${id}`)
      .then(() => setBookings(bookings.map(booking => booking._id === id ? { ...booking, status: 'Rejected' } : booking)))
      .catch(error => console.error('Error rejecting booking:', error));
  };

  return (
    <div>
      <h2>Booking List</h2>
      <ul>
        {bookings.map(booking => (
          <li key={booking._id}>
            Room {booking.roomNumber} - {booking.guestName} ({booking.status})
            <button onClick={() => handleApproval(booking._id)}>Approve</button>
            <button onClick={() => handleRejection(booking._id)}>Reject</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingList;
