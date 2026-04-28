const mongoose = require('mongoose');
const BookingSchema = new mongoose.Schema({
    serviceName: String,
    customerName: String,
    address: String,
    price: Number,
    status: { type: String, default: 'Pending' },
    date: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Booking', BookingSchema);
