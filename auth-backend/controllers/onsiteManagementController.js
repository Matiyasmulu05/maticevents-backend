const OnsiteManagement = require('../models/OnsiteManagement');

// Create new Onsite Management record
exports.createOnsiteManagement = async (req, res) => {
  const { eventId, brandingPlacement, humanResourceManagement, itemsChecklist, audioVisualPlacement, guestReception } = req.body;
  try {
    const newOnsiteManagement = new OnsiteManagement({
      eventId,
      brandingPlacement,
      humanResourceManagement,
      itemsChecklist,
      audioVisualPlacement,
      guestReception
    });
    await newOnsiteManagement.save();
    res.status(201).json(newOnsiteManagement);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Read all Onsite Management records
exports.getAllOnsiteManagement = async (req, res) => {
  try {
    const onsiteManagements = await OnsiteManagement.find();
    res.status(200).json(onsiteManagements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Read a single Onsite Management record by ID
exports.getOnsiteManagementById = async (req, res) => {
  try {
    const onsiteManagement = await OnsiteManagement.findById(req.params.id);
    if (!onsiteManagement) return res.status(404).json({ message: 'Record not found' });
    res.status(200).json(onsiteManagement);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Onsite Management record
exports.updateOnsiteManagement = async (req, res) => {
  try {
    const updatedOnsiteManagement = await OnsiteManagement.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedOnsiteManagement) return res.status(404).json({ message: 'Record not found' });
    res.status(200).json(updatedOnsiteManagement);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an Onsite Management record
exports.deleteOnsiteManagement = async (req, res) => {
  try {
    const deletedOnsiteManagement = await OnsiteManagement.findByIdAndDelete(req.params.id);
    if (!deletedOnsiteManagement) return res.status(404).json({ message: 'Record not found' });
    res.status(200).json({ message: 'Record deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};