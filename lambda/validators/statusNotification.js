const Ajv = require("ajv");

module.exports.statusValidate = function statusValidate(params) {
    const ajv = new Ajv()
    const statusSchema = {
        type: "object",
        properties: {

            connectorId: { type: "integer" },
            errorCode: { type: "string", "maxLength": 30 },
            info: { type: "string", "maxLength": 50 },
            status: { type: "string", "maxLength": 20 },
            timestamp: { type: "string", "maxLength": 20 },
            vendorId: { type: "string", "maxLength": 20 },
            vendorErrorCode: { type: "string", "maxLength": 50 },

        },
        required: ["connectorId",
            "errorCode",
            "status"],
        additionalProperties: false,
    }

    const valid = ajv.validate(statusSchema, params);

    if (!valid) {
        console.log(ajv.errors);
        return false;
    }
    return true;
};