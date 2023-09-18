const Ajv = require("ajv");

exports.authorizeValidate = function authorizeValidate(params) {
    console.log("authorizeValidate 1 params", params);
    const ajv = new Ajv();
    const authorizeSchema = {
        type: "object",
        properties: {
            idTag: { type: "string" },
        },
        required: ["idTag"],
        additionalProperties: false,
    }
    console.log(authorizeSchema);
    const valid = ajv.validate(authorizeSchema, params);
    console.log("authorizeValidate 1 valid", valid);
    if (!valid) {
        console.error(ajv.errors);
        return false;
    }
    return true;
}



