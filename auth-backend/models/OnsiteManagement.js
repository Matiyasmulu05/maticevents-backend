const mongoose=require('mongoose');
const onsiteManagementSchema = new mongoose.Schema({
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
    brandingPlacement: [
      {
        qualityColor: String,
        placementStatus: String
      }
    ],
    humanResourceManagement: [
      {
        task: String,
        numberOfAssignedIndividuals: Number
      }
    ],
    itemsChecklist: [
      {
        item: String,
        numberOfItems: Number,
        ordered: Boolean,
        delivered: Boolean
      }
    ],
    audioVisualPlacement: [
      {
        item: String,
        itemPlacement: String
      }
    ],
    guestReception: [
      {
        guestName: String,
        onsiteRegistrationStatus: Boolean
      }
    ]
  });
  
  const OnsiteManagement = mongoose.model('OnsiteManagement', onsiteManagementSchema);
  module.exports = OnsiteManagement;