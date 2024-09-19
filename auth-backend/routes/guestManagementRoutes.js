const express = require('express');
const router = express.Router();
const guestManagementController = require('../controllers/guestManagementController');

// Guest Management Routes
router.post('/guest-management', guestManagementController.createGuestManagement);
router.get('/guest-management', guestManagementController.getAllGuestManagement);
router.get('/guest-management/:id', guestManagementController.getGuestManagementById);
router.put('/guest-management/:id', guestManagementController.updateGuestManagement);
router.delete('/guest-management/:id', guestManagementController.deleteGuestManagement);

module.exports = router;