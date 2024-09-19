const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  description: { type: String, required: true },
  when: { type: Date, required: true },
  where: { type: String, required: true },
  budget: { type: Number, required: true },
  setupType: { type: String, required: true },
  brandingType: { type: String, required: true }
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;