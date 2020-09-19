const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose')

const Health = require('./controller/health')
const Todo = require('./controller/todo')

dotenv.config();

mongoose.connect('mongodb+srv://koo6357:koo6357@cluster0.g50h2.mongodb.net/todo?retryWrites=true&w=majority')
    .then(res => {
        console.log("sucess connect");
    })
    .catch(err => {
        console.log("err", err);
    })

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/health', Health);
app.use('/todo', Todo);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Sever on ${PORT}`);
})