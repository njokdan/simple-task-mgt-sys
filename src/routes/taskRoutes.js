const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const auth = require('../middlewares/auth');
const validation = require('../middlewares/validation');

// Routes
router.post('/', auth, validation.createTask, taskController.createTask);
router.get('/', auth, taskController.getTasks);
router.get('/:id', auth, taskController.getTaskById);
router.put('/:id', auth, validation.updateTask, taskController.updateTask);
router.delete('/:id', auth, taskController.deleteTask);

module.exports = router;