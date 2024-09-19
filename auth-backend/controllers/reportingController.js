const Reporting = require('../models/Reporting');

// Create new Reporting record
exports.createReporting = async (req, res) => {
  const { eventId, customerFeedbackSurvey, financialReport, participantsAnalytics } = req.body;
  try {
    const newReporting = new Reporting({
      eventId,
      customerFeedbackSurvey,
      financialReport,
      participantsAnalytics,
    });
    await newReporting.save();
    res.status(201).json(newReporting);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Read all Reporting records
exports.getAllReporting = async (req, res) => {
  try {
    const reportings = await Reporting.find();
    res.status(200).json(reportings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Read a single Reporting record by ID
exports.getReportingById = async (req, res) => {
  try {
    const reporting = await Reporting.findById(req.params.id);
    if (!reporting) return res.status(404).json({ message: 'Record not found' });
    res.status(200).json(reporting);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Reporting record
exports.updateReporting = async (req, res) => {
  try {
    const updatedReporting = await Reporting.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedReporting) return res.status(404).json({ message: 'Record not found' });
    res.status(200).json(updatedReporting);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a Reporting record
exports.deleteReporting = async (req, res) => {
  try {
    const deletedReporting = await Reporting.findByIdAndDelete(req.params.id);
    if (!deletedReporting) return res.status(404).json({ message: 'Record not found' });
    res.status(200).json({ message: 'Record deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};