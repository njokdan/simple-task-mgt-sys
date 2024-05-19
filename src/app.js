const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');
const authRoutes = require('./routes/authRoutes');
const auth = require('./middlewares/auth');
const initializeSocket = require('./utils/socketUtils');

const app = express();

// Middleware
app.use(express.json());

const server = require('http').createServer(app);
const socketMiddleware = initializeSocket(server);

// Register Socket.IO middleware
app.use(socketMiddleware);

// Routes for tasks and auth
app.use('/api/tasks', auth, taskRoutes);
app.use('/api/auth', authRoutes);


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});

 server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});



module.exports = app;