const Task = require('../models/task');

// Create a new task
exports.createTask = async (req, res) => {
  //console.log(req);
  try {
    const { title, description, user } = req.body;
    const task = new Task({
      title,
      description,
      user
    });
    const newTask = await task.save();
    console.log('req.io in createTask:', req.io);
    // ...
    if (req.io) {
      req.io.emit('taskCreated', newTask);
    } else {
      console.log('req.io is undefined');
    }
    // ...
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all tasks for the authenticated user
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.userId });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single task by ID
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      user: req.user.userId,
    });
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a task by ID
exports.updateTask = async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    const task = await Task.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user.userId,
      },
      { title, description, completed },
      { new: true }
    );
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    console.log('req.io in updateTask:', req.io);
    // ...
    if (req.io) {
      req.io.emit('taskUpdated', task);
    } else {
      console.log('req.io is undefined');
    }
    // ...
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a task by ID
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      user: req.user.userId,
    });
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    console.log('req.io in deleteTask:', req.io);
    // ...
    if (req.io) {
      req.io.emit('taskDeleted', task);
    } else {
      console.log('req.io is undefined');
    }
    // ...
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};