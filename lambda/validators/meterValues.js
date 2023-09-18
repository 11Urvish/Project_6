const Ajv = require("ajv");

module.exports.meterValidate = function meterValidate(params) {

    const ajv = new Ajv()
    const meterSchema = {
        type: "object",
        properties: {

            connectorId: { type: "string", "maxLength": 20 },
            transactionId: { type: "integer" },
            meterValue: { type: "string", "maxLength": 20 },

        },
        required: ["connectorId", "meterValue"],
        additionalProperties: false,
    }

    console.log(meterSchema);
    const valid = ajv.validate(meterSchema, params);

    if (!valid) {
        console.log(ajv.errors);
        return false;
    }
    return true;
};
