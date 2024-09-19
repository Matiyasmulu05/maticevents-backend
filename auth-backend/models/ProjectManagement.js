const mongoose=require('mongoose');
const projectManagementSchema = new mongoose.Schema({
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
    projectTimeline: [
      {
        task: String,
        startTime: Date,
        endTime: Date,
        status: String
      }
    ],
    financialPlanning: [
      {
        task: String,
        budget: Number
      }
    ],
    humanResourcePlanning: [
      {
        task: String,
        numberOfAssignedIndividuals: Number
      }
    ],
    vendorSelection: [
      {
        task: String,
        assignedVendor: String
      }
    ]
  });
  
  const ProjectManagement = mongoose.model('ProjectManagement', projectManagementSchema);
  module.exports = ProjectManagement;