const Ajv = require("ajv")
const fs = require("fs");
const { validateSchema } = require("../helper");

exports.handleValidate = async function handleValidate(actionName, reqParams) {
    return validateSchema(actionName, reqParams)
}