const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.send('OK')
    console.log("res.send", res.send);
})


module.exports = router;