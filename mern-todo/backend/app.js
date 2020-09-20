const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const dotenv = require('dotenv');

const Health = require('./src/controller/health')
const Todo = require('./src/controller/todo')

dotenv.config();

const app = express();

mongoose.connect('mongodb+srv://koo6357:koo6357@cluster0.g50h2.mongodb.net/todo?retryWrites=true&w=majority')
    .then(res => {
        console.log("sucess connect");
    })
    .catch(err => {
        console.log("err", err);
    })


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/health', Health);
app.use('/todo', Todo);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Sever on ${PORT}`);
})