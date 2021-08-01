const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        trim: true,
        minLength: 4,
        maxLength: 255
    },
    completed: {
        type: Boolean,
        required: false,
        default: false
    }
})

module.exports = mongoose.model('Todo', TodoSchema)