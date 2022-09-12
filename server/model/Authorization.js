const mongoose = require("mongoose");

const authorization = new mongoose.Schema({
    partner_id: {
        type: String,
    },
    is_active: {
        type: Boolean,
        default: false,
    },
    authorization_id: {
        type: String,
    },
});

const authorization_model = mongoose.model("authorization", authorization);
module.exports = authorization_model;
