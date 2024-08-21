import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [stats, setStats] = useState({ totalRooms: 0, occupiedRooms: 0, freeRooms: 0, totalBookings: 0, approvedBookings: 0, pendingBookings: 0, revenue: 0 });

  useEffect(() => {
    // Fetch statistics data from backend (you need to implement this endpoint in your backend)
    axios.get('/api/stats')
      .then(response => setStats(response.data))
      .catch(error => console.error('Error fetching stats:', error));
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total Rooms: {stats.totalRooms}</p>
      <p>Occupied Rooms: {stats.occupiedRooms}</p>
      <p>Free Rooms: {stats.freeRooms}</p>
      <p>Total Bookings: {stats.totalBookings}</p>
      <p>Approved Bookings: {stats.approvedBookings}</p>
      <p>Pending Bookings: {stats.pendingBookings}</p>
      <p>Generated Revenue: ${stats.revenue}</p>
    </div>
  );
};

export default Dashboard;
