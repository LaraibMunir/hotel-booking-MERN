const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  roomNumber: { type: Number, required: true },
  guestName: { type: String, required: true },
  guestEmail: { type: String, required: true },
  status: { type: String, default: 'Pending' }, // 'Approved', 'Rejected'
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
});

module.exports = mongoose.model('Booking', bookingSchema);
