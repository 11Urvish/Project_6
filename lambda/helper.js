const { CONST_CLIENT } = require('./constants');
const occp_reportsModel = require('./models/occp_reports.model');

const AJV = require('ajv').default;
const addFormats = require('ajv-formats').default;

const validateSchema = (schemaName, body) => {
    const ajv = new AJV();
    addFormats(ajv);

    const { schema } = require(`./schemas/${schemaName}.js`)

    const valid = ajv.validate(schema, body);

    if (!valid) {
        console.log("Validation Error")
        console.error(ajv.errors);
        return false;
    }

    console.log("Validation Success")
    return true;
}

const generateOcppResponse = (client, status, token, response, logId) => {
    return {
        client: client,
        status: status,
        token: token,
        response: response
    }
}

const addLog = async (option, object) => {
    // option : { 0 : "New Log", 1 : "Update Log"}
    try {
        if (option == 0) {
            const { client, action, token, messageString, origin } = object

            const occp_reports = new occp_reportsModel({
                tenantId: client.split("_")[0],
                chargerId: client.split("_")[1],
                action: action,
                messageId: token,
                origin: origin,
                request: messageString,
                requestTime: new Date()
            })

            await occp_reports.save()
                .then(res => {
                    console.log(res)
                    console.log("Report Saved!")
                })
                .catch(err => {
                    console.log(err)
                    console.log("Report Not Saved!")
                })
        }
        else if (option == 1) {
            const { client, action, token, messageString } = object

            const occp_reports = await occp_reportsModel.findOne({ messageId: token })

            if (!occp_reports) {
                throw new Error("Some Error Occured")
            }

            occp_reports.response = messageString
            occp_reports.responseTime = new Date()

            await occp_reports.save()
                .then(res => {
                    console.log(res)
                    console.log("Report Updated!")
                })
                .catch(err => {
                    console.log(err)
                    console.log("Report Not Updated!")
                })
        }
    } catch (error) {

    }
}

module.exports.validateSchema = validateSchema
module.exports.addLog = addLog
module.exports.generateOcppResponse = generateOcppResponse