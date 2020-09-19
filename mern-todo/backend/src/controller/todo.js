const express = require('express');
const Todo = require('../models/todo')

const router = express.Router();


router.get('/', async (req, res) => {
    const todos = await Todo.find({});

    res.json(todos)
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;

    const todo = await Todo.findOne({_id: id});

    res.json(todo)
})

router.post('/', async (req, res) => {

    const {title, description} = req.body;

    const todo = Todo({title, description});
    const result = await todo.save();

    res.json(result)

})

router.put('/:id', async (req, res) => {

    const id = req.params.id
    const {title, description} = req.body;

    const result = await Todo.updateOne({_id: id}, {title, description});

    res.json(result)

})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    const todo = await Todo.deleteOne({_id: id});

    res.json(todo)
})









module.exports = router;