const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({title: 'lfjafkladjfklajfklsjf'})
})


app.get('/', (req, res) => {
    const name = req.query.name
    console.log("req.query", req.query);
    res.json({
        name,
        job: 'Front-End'
    })

})

app.get('/user/:id', (req, res) => {
    console.log("req.query", req.params);
    const name = req.query.name
    const userId = req.params.id
    res.json({
        name,
        job: 'Front-End',
        userId
    })

})

module.exports = router;