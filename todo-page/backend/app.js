const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const Health = require('./src/controllers/health');
const Todos = require('./src/controllers/todos');

dotenv.config();
const app = express();
mongoose.connect('mongodb+srv://shineunji:wl1692@cluster0.a6n2n.mongodb.net/todo-page?retryWrites=true&w=majority')
    .then((res) => {
        console.log("success connect");
    })
    .catch(err => {
        console.log("err", err);
    })


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/health', Health)
app.use('/todos', Todos)




const PORT = process.env.PORT;

app.listen(PORT,() => {
    console.log(`Sever on ${PORT}`);
})