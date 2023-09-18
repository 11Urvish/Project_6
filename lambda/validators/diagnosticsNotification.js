const Ajv = require("ajv");

module.exports.diagnosticsValidate = function diagnosticsValidate(params) {

    const ajv = new Ajv()
    const diagnosticsSchema = {
        type: "object",
        properties: {
            status: { type: "string" },
        },
        required: ["status"],
        additionalProperties: false,
    }
    const valid = ajv.validate(diagnosticsSchema, params);

    if (!valid) {
        console.log(ajv.errors);
        return false;
    }
    return true;
}