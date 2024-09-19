const express = require('express');
const router = express.Router();
const onsiteManagementController = require('../controllers/onsiteManagementController');

// Onsite Management Routes
router.post('/onsite-management', onsiteManagementController.createOnsiteManagement);
router.get('/onsite-management', onsiteManagementController.getAllOnsiteManagement);
router.get('/onsite-management/:id', onsiteManagementController.getOnsiteManagementById);
router.put('/onsite-management/:id', onsiteManagementController.updateOnsiteManagement);
router.delete('/onsite-management/:id', onsiteManagementController.deleteOnsiteManagement);

module.exports = router;