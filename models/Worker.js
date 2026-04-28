const mongoose = require('mongoose');
const WorkerSchema = new mongoose.Schema({
    name: String,
    specialization: String,
    lat: Number,
    lng: Number,
    isAvailable: { type: Boolean, default: true }
});
module.exports = mongoose.model('Worker', WorkerSchema);
