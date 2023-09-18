const Ajv = require("ajv");

module.exports.firmwareValidate = function firmwareValidate(params) {

    const ajv = new Ajv()
    const firmwareSchema = {
        type: "object",
        properties: {
            status: { type: "string", "maxLength": 20 },
        },
        required: ["status"],
        additionalProperties: false,
    }

    const valid = ajv.validate(firmwareSchema, params);

    if (!valid) {
        console.log(ajv.errors);
        return false;
    }
    return true;
};