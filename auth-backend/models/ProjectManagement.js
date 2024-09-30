const mongoose=require('mongoose');
const projectManagementSchema = new mongoose.Schema({
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
    task: {
      type: String,
      required: true
    },
    startTime: {
      type: Date,
      required: true
    },
    endTime: {
      type: Date,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    financialTask: {
      type: String,
      required: true
    },
    financialBudget: {
      type: Number,
      required: true
    },
    hrTask: {
      type: String,
      required: true
    },
    hrNumber: {
      type: Number,
      required: true
    },
    vendorTask: {
      type: String,
      required: true
    },
    vendor: {
      type: String,
      required: true
    }
  });
  
  const ProjectManagement = mongoose.model('ProjectManagement', projectManagementSchema);
  module.exports = ProjectManagement;