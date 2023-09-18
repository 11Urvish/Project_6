const Ajv = require("ajv");

module.exports.startValidate = function startValidate(params) {

    const ajv = new Ajv()
    const startSchema = {
        type: "object",
        properties: {

            connectorId: { type: "integer" },
            idTag: { type: "string", "maxLength": 20 },
            meterStart: { type: "integer" },
            reservationId: { type: "integer" },
            timestamp: { type: "string", "maxLength": 50 },

        },
        required: ["connectorId",
            "idTag",
            "meterStart",
            "timestamp"],
        additionalProperties: false,
    }

    const valid = ajv.validate(startSchema, params);

    if (!valid) {
        console.log(ajv.errors);
        return false;
    }
    return true;
};