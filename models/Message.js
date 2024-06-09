const mongoose = require("mongoose");

const msgSchema = new mongoose.Schema({
    text: {
        type: String,
        require: true
    },
    user: {
        type: String,
        require: true
    },
    added: {
        type: Date,
        require: true,
    }
})

const Message = mongoose.model('Message', msgSchema);

module.exports = Message;