const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    title: 'string',
    description: 'string',
    isComplated: {
        default: false,
        type: Boolean
    }
});

module.exports = mongoose.model('todo', schema);