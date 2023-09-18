const Ajv = require("ajv");

module.exports.dataValidate = function dataValidate(params) {

    const ajv = new Ajv()
    const dataSchema = {
        type: "object",
        properties: {

            vendorId: { type: "string" },
            messageId: { type: "string" },
            data: { type: "string" },

        },
        required: ["vendorId"],
        additionalProperties: false,
    }

    const valid = ajv.validate(dataSchema, params);

    if (!valid) {
        console.log(ajv.errors);
        return false;
    }
    return true;
};