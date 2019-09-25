const mongoose = require("mongoose");
const UrlSchema = new mongoose.Schema({
    ownerCode: {
        type: String,
        required: true
    },
    originUrl: {
        type: String,
        validate: {
            validator: function(value) {
                return /(^http:\/\/)|(^https:\/\/)/.test(value);
            },
            msg: "Invalid link"
        }
    },
    shortenedUrlId: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

const Url = mongoose.model("Url", UrlSchema);

module.exports = Url;