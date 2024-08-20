const Booking = require('../models/Booking');
const sendEmail = require('../utils/emailSender');

const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching bookings' });
  }
};

const approveBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, { status: 'Approved' }, { new: true });
    await sendEmail(booking.guestEmail, 'Booking Approved', 'Your booking has been approved.');
    res.json(booking);
  } catch (error) {
    res.status(500).json({ error: 'Error approving booking' });
  }
};

const rejectBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, { status: 'Rejected' }, { new: true });
    await sendEmail(booking.guestEmail, 'Booking Rejected', 'Your booking has been rejected.');
    res.json(booking);
  } catch (error) {
    res.status(500).json({ error: 'Error rejecting booking' });
  }
};

module.exports = { getBookings, approveBooking, rejectBooking };
