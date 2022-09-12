const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
    },
    password: {
        required: true,
        type: String,
    },
    role: {
        type: String,
    },
    is_active: {
        type: Boolean,
        default: false,
    },
    createAt: {
        type: Date,
        immutable: true,
        default: Date.now(),
    },
    updateAt: {
        type: Date,
        default: Date.now(),
    },
});

const Usermodel = mongoose.model("users", userSchema);
module.exports = Usermodel;
