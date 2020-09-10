const express = require('express');
const dotenv = require('dotenv');


dotenv.config();

const app = express();

app.get('/', function(req, res) {
    const query = req.query
    console.log("req", req);
    res.send('Hello World')

})

app.get('/user/:id', function(req, res) {
    const id = req.params.id

    const post = {
        id,
        title: 'Hello World',
        description: 'lorem4lorem4lorem4lorem4lorem4'
    }

    res.json(post)
})



const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})