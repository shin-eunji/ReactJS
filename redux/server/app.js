
const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')

const app =express

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    console.log("req.query", req.query);
    const name = req.query.name

    res.json({
        name,
        job: 'front'
    })
})




app.listen(8080, function() {
    console.log("server is running on port 8080");
})