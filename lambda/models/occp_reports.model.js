const mongoose = require("mongoose");

const requestSchema = mongoose.Schema({
    type: { type: String, required: true },
    messageId: { type: String, required: true },
    action: { type: String, required: true },
    payload: { type: String, required: true }
})

const responseSchema = mongoose.Schema({
    type: { type: String, required: true },
    messageId: { type: String, required: true },
    payload: { type: String, required: true }
})

const occpReportsSchema = mongoose.Schema({
    tenantId: { type: String, required: true },
    chargerId: { type: String, required: true },
    action: { type: String, required: true },
    messageId: { type: String, required: true },
    origin: { type: String, requried: true },
    request: { type: String, required: true },
    requestTime: { type: String, required: true },
    response: { type: String },
    responseTime: { type: Date },
}, {
    timestamps: true
});

module.exports = mongoose.model("occp_reports", occpReportsSchema);

