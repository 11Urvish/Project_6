const Ajv = require("ajv");

module.exports.bootValidate =  function bootValidate(params) {
    const ajv = new Ajv()
    const bootSchema = {
        type: "object",
        properties: {

            chargeBoxSerialNumber: { type: "string", "maxLength": 50 },
            chargePointModel: { type: "string", "maxLength": 50 },
            chargePointSerialNumber: { type: "string", "maxLength": 50 },
            chargePointVendor: { type: "string", "maxLength": 50 },
            firmwareVersion: { type: "string", "maxLength": 50 },
            iccid: { type: "string", "maxLength": 50 },
            imsi: { type: "string", "maxLength": 50 },
            meterSerialNumber: { type: "string", "maxLength": 50 },
            meterType: { type: "string", "maxLength": 50 }
        },
        required: ["chargePointVendor",
            "chargePointModel"],
        additionalProperties: false,
    }

    const valid = ajv.validate(bootSchema, params);

    if (!valid) {
        console.log(ajv.errors);
        return false;
    }
    return true;
};