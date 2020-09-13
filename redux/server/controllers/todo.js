const express = require('express');
const router = express.Router();
const Todo = require('../models/todo')




router.get('/', async (req, res) => {
    const todos = await Todo.find({});

    res.json(todos)
})

router.get('/:id', async (req, res) => {

    const id = req.params.id;
    const todo = await Todo.find({
        _id: id
    });

    res.json(todo)
})

router.post('/', async(req, res) => {
    const {title, description, isCompleted} = req.body;

    console.log("req.body", req.body);

    const todo = new Todo({
        title,
        description,
        isCompleted
    })


    const result = await todo.save();

    res.json(result)
});


router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const {
        title,
        description,
        isCompleted
    } = req.body;

    const data = {
        title,
        description,
        isCompleted
    }


    const result = await Todo.updateOne({
        _id: id,
    }, data)


    res.json(result)

})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const result = await Todo.deleteOne({
        _id: id
    })

    res.json(result)
})

router.delete('/all', async (req, res) => {
    const id = req.params.id;
    const result = await Todo.deleteMany({ })

    res.json(result)
})





module.exports = router;