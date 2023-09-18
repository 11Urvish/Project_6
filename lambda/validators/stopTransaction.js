const Ajv = require("ajv");

module.exports.stopValidate = function stopValidate(params) {
    const ajv = new Ajv()
    const stopSchema = {
        type: "object",
        properties: {

            idTag: { type: "string", "maxLength": 20 },
            meterStop: { type: "integer" },
            timestamp: { type: "string", "maxLength": 30 },
            transactionId: { type: "integer" },
            reason: { type: "string", "maxLength": 30 },
            transactionData: { type: "string", "maxLength": 50 },


        },
        required: ["transactionId",
            "timestamp",
            "meterStop"],
        additionalProperties: false,
    }
    const valid = ajv.validate(stopSchema, params);

    if (!valid) {
        console.log(ajv.errors);
        return false;
    }
    return true;
};