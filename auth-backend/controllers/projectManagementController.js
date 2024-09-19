const express = require('express');
const router = express.Router();
const ProjectManagement = require('../models/ProjectManagement');

// Create new Project Management record
exports.createProjectManagement = async (req, res) => {
  const { eventId, projectTimeline, financialPlanning, humanResourcePlanning, vendorSelection } = req.body;
  try {
    const newProjectManagement = new ProjectManagement({
      eventId,
      projectTimeline,
      financialPlanning,
      humanResourcePlanning,
      vendorSelection
    });
    await newProjectManagement.save();
    res.status(201).json(newProjectManagement);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Read all Project Management records
exports.getAllProjectManagement = async (req, res) => {
  try {
    const projectManagements = await ProjectManagement.find();
    res.status(200).json(projectManagements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Read a single Project Management record by ID
exports.getProjectManagementById = async (req, res) => {
  try {
    const projectManagement = await ProjectManagement.findById(req.params.id);
    if (!projectManagement) return res.status(404).json({ message: 'Record not found' });
    res.status(200).json(projectManagement);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Project Management record
exports.updateProjectManagement = async (req, res) => {
  try {
    const updatedProjectManagement = await ProjectManagement.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProjectManagement) return res.status(404).json({ message: 'Record not found' });
    res.status(200).json(updatedProjectManagement);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a Project Management record
exports.deleteProjectManagement = async (req, res) => {
  try {
    const deletedProjectManagement = await ProjectManagement.findByIdAndDelete(req.params.id);
    if (!deletedProjectManagement) return res.status(404).json({ message: 'Record not found' });
    res.status(200).json({ message: 'Record deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};