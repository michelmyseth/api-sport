const mongoose = require("mongoose");

const partner_authorization = new mongoose.Schema({
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

const Partner_authorization_model = mongoose.model(
    "partner_authorization",
    partner_authorization
);
module.exports = Partner_authorization_model;
