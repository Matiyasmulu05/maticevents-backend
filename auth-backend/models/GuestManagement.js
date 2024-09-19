const mongoose=require('mongoose');
const guestManagementSchema = new mongoose.Schema({
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
    guestInvitations: [
      {
        name: String,
        address: String,
        invitationLetter: String
      }
    ],
    rsvp: [
      {
        guestName: String,
        rsvpStatus: String
      }
    ],
    seatingArrangement: [
      {
        guestName: String,
        seatNumber: String
      }
    ]
  });
  
  const GuestManagement = mongoose.model('GuestManagement', guestManagementSchema);
  module.exports = GuestManagement;