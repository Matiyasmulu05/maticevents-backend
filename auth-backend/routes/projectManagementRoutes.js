const express = require('express');
const router = express.Router();
const projectManagementController = require('../controllers/projectManagementController');

// Project Management Routes
router.post('/project-management', projectManagementController.createProjectManagement);
router.get('/project-management', projectManagementController.getAllProjectManagement);
router.get('/project-management/:id', projectManagementController.getProjectManagementById);
router.put('/project-management/:id', projectManagementController.updateProjectManagement);
router.delete('/project-management/:id', projectManagementController.deleteProjectManagement);

module.exports = router;