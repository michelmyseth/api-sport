const mongoose = require("mongoose");

const structSchema = new mongoose.Schema({
    struct_name: {
        type: String,
        require: true,
    },
    is_active: {
        type: Boolean,
        default: false,
    },
    user_id: {
        type: String,
    },
});

const Structmodel = mongoose.model("structure", structSchema);
module.exports = Structmodel;
