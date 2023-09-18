const AWS = require("aws-sdk");
const db = require("./db");
const occpReportsModel = require("./models/occp_reports.model");

const { badRequestResponse } = require("./responses/badRequest");
const { handleResponse } = require("./responses/index");
const { validateSchema, generateOcppResponse, addLog } = require("./helper");
const { CONST_SERVER, CONST_CLIENT } = require("./constants");

exports.handler = async (event, context, callback) => {
    try {
        // Connect to database
        db.connect();

        // Receive message from SNS Topic
        const snsMessage = event.Records[0].Sns.Message;
        console.log(snsMessage);

        const requestTime = new Date();

        // Extract parameters from SNS Message
        const { type, client, token, action, params } = JSON.parse(snsMessage);
        const reqParams = JSON.parse(params)

        // Log response in Database
        if (type == 3) {

            console.log(params)

            const responseArray = [type, token, params]

            const object = {
                client: client,
                action: action,
                token: token,
                origin: CONST_SERVER,
                messageString: "[" + responseArray.toString() + "]",
            }

            addLog(1, object)
        }

        let result = {};
        let status = 0

        try {
            const isValid = validateSchema(action, reqParams)
            if (!isValid) {
                throw new Error("Invalid Parameters")
            } else {
                result = handleResponse(action, reqParams);

                status = 3
            }
        } catch (error) {
            console.log(error.message)

            status = 4
            result = badRequestResponse();
        }

        const requestArray = [2, token, action, params]
        const responseData = generateOcppResponse(client, status, token, result)

        const object = {
            client: client,
            action: action,
            token: token,
            messageString: requestArray.toString(),
            origin: COSNT_SERVER
        }

        addLog(0, object)

        // Publish message on SNS Topic
        const sns = new AWS.SNS();
        const response = {
            Message: JSON.stringify(responseData),
            TopicArn: "arn:aws:sns:ap-south-1:923004627818:messageSent"
        };

        await sns.publish(response, function (err, data) {
            if (err) {
                console.log('error publishing to SNS', err.stack);
            } else {
                console.log('message published to SNS', data);
            }
        });
    } catch (error) {
        console.log(error)
    }
    callback(null);
};
