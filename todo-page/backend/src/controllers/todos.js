const express = require('express');
const Todo = require('../models/todos')

const router = express.Router();

router.get('/', async (req, res) => {
    const todos = await Todo.find()
    res.json(todos)
})


module.exports = router;