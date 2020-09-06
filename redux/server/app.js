
const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors())

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


app.listen(8080, function() {
    console.log("server is running on port 8080");
})