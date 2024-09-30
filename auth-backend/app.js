const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');
const eventRoutes = require('./routes/eventRoutes');
const projectManagementRoutes = require('./routes/projectManagementRoutes');
const guestManagementRoutes = require('./routes/guestManagementRoutes');
const onsiteManagementRoutes = require('./routes/onsiteManagementRoutes');
const reportingRoutes = require('./routes/reportingRoutes');
require('dotenv').config();

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use('/api', eventRoutes);
app.use('/api', projectManagementRoutes);
app.use('/api', guestManagementRoutes);
app.use('/api', onsiteManagementRoutes);
app.use('/api', reportingRoutes);

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));