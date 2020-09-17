const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));







const PORT = process.env.PORT;

app.listen(PORT,() => {
    console.log(`Sever on ${PORT}`);
})