const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({title: 'lfjafkladjfklajfklsjf'})
})


router.get('/', (req, res) => {
 res.json({title: 'fadfdafafadafsf', isComleted: false})

})

module.exports = router;