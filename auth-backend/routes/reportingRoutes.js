const express = require('express');
const router = express.Router();
const reportingController = require('../controllers/reportingController');

// Reporting Routes
router.post('/reporting', reportingController.createReporting);
router.get('/reporting', reportingController.getAllReporting);
router.get('/reporting/:id', reportingController.getReportingById);
router.put('/reporting/:id', reportingController.updateReporting);
router.delete('/reporting/:id', reportingController.deleteReporting);

module.exports = router;