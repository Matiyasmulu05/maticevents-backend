const GuestManagement = require('../models/GuestManagement');

// Create new Guest Management record
exports.createGuestManagement = async (req, res) => {
  const { eventId, guestInvitations, rsvp, seatingArrangement } = req.body;
  try {
    const newGuestManagement = new GuestManagement({
      eventId,
      guestInvitations,
      rsvp,
      seatingArrangement
    });
    await newGuestManagement.save();
    res.status(201).json(newGuestManagement);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Read all Guest Management records
exports.getAllGuestManagement = async (req, res) => {
  try {
    const guestManagements = await GuestManagement.find();
    res.status(200).json(guestManagements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Read a single Guest Management record by ID
exports.getGuestManagementById = async (req, res) => {
  try {
    const guestManagement = await GuestManagement.findById(req.params.id);
    if (!guestManagement) return res.status(404).json({ message: 'Record not found' });
    res.status(200).json(guestManagement);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Guest Management record
exports.updateGuestManagement = async (req, res) => {
  try {
    const updatedGuestManagement = await GuestManagement.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedGuestManagement) return res.status(404).json({ message: 'Record not found' });
    res.status(200).json(updatedGuestManagement);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a Guest Management record
exports.deleteGuestManagement = async (req, res) => {
  try {
    const deletedGuestManagement = await GuestManagement.findByIdAndDelete(req.params.id);
    if (!deletedGuestManagement) return res.status(404).json({ message: 'Record not found' });
    res.status(200).json({ message: 'Record deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};