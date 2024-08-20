const express = require('express');
const { getBookings, approveBooking, rejectBooking } = require('../controllers/bookingController');

const router = express.Router();

router.get('/', getBookings);
router.put('/approve/:id', approveBooking);
router.put('/reject/:id', rejectBooking);

module.exports = router;
