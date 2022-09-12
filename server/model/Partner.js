const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema({
    partner_name: {
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

const Partnermodel = mongoose.model("partner", partnerSchema);
module.exports = Partnermodel;
