const mongoose = require("mongoose");

const struct_authorization = new mongoose.Schema({
    struct_id: {
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

const Struct_authorization_model = mongoose.model(
    "struct_authorization",
    struct_authorization
);
module.exports = Struct_authorization_model;
