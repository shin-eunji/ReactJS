const express = require('express');
const Todo = require('../models/todo')




const router = express.Router();


router.get('/', async (req, res) => {
    const result = await Todo.find({})
    res.json(result)
})

router.post('/', async (req, res) => {
    const {title, description} = req.body;

    const todo = new Todo({title, description})

    const result = await todo.save()

    res.json(result);
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    const result = await Todo.find({_id: id})
    res.json(result)
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    const result = await Todo.deleteOne({_id: id})
    res.json(result)
})

router.put('/:id', async (req, res) => {
    const id = req.params.id

    const {title, description} = req.body

    const result = await Todo.updateOne({_id: id}, {title, description})

    res.json(result)
})





module.exports = router;