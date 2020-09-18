const express = require('express');
const Todo = require('../models/todo')




const router = express.Router();


router.get('/', async (req, res) => {
    const todos = await Todo.find({})
    res.json(todos)
})

router.post('/', async (req, res) => {
    const { title, body } = req.body;

    const todo = new Todo({title, body})
    const result = await todo.save()

    res.json(result)
})








module.exports = router;