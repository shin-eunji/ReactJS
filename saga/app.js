const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();


app.get('/', (req, res) => {
    res.send("Hell World")
})





const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`server is runnig on port ${PORT}`);
})
