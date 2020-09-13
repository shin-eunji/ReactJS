const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')

const dotenv= require('dotenv')


const Todo = require('../server/controllers/todo')
const User = require('../server/controllers/user')


dotenv.config()

const app = express()


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))




mongoose.connect('mongodb+srv://koo6357:koo6357@cluster0.g50h2.mongodb.net/koo?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("success");
}).catch((err) => {
    console.log("err", err);
})

app.use('/todo', Todo);
app.use('/user', User);



const PORT = process.env.PORT;
console.log("PORT", PORT);


app.listen(PORT, function() {
    console.log(`server is running on port ${PORT}`);
})