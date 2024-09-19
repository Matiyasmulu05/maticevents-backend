const Event = require('../models/Event');

// Create an Event
exports.createEvent = async (req, res) => {
  const { name, conceptDevelopment, projectManagement, guestManagement, onsiteManagement, reporting } = req.body;
  
  try {
    const event = new Event({
      name,
      conceptDevelopment,
      projectManagement,
      guestManagement,
      onsiteManagement,
      reporting,
    });

    await event.save();
    res.status(201).json({ msg: 'Event created successfully', event });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

// Get all Events
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

// Get a single Event
exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ msg: 'Event not found' });

    res.json(event);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

// Update an Event
exports.updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!event) return res.status(404).json({ msg: 'Event not found' });

    res.json({ msg: 'Event updated successfully', event });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

// Delete an Event
exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) return res.status(404).json({ msg: 'Event not found' });

    res.json({ msg: 'Event deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};