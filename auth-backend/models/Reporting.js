const mongoose=require('mongoose');
const reportingSchema = new mongoose.Schema({
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
    customerFeedbackSurvey: [
      {
        question: String,
        response: String
      }
    ],
    financialReport: [
      {
        task: String,
        utilizedBudget: Number
      }
    ],
    participantsAnalytics: {
      numberOfParticipants: Number
    }
  });
  
  const Reporting = mongoose.model('Reporting', reportingSchema);
  module.exports = Reporting;