const { AuthorizeResponse } = require("./AuthorizeResponse");
const { HeartbeatResponse } = require("./HeartbeatResponse");
const { BootNotificationResponse } = require("./BootNotificationResponse");
const { DataTransferResponse } = require("./DataTransferResponse");
const { DiagnosticsStatusNotificationResponse } = require("./DiagnosticsStatusNotificationResponse");
const { FirmwareStatusNotificationResponse } = require("./FirmwareStatusNotificationResponse");
const { MeterValuesResponse } = require("./MeterValuesResponse");
const { StartTransactionResponse } = require("./StartTransactionResponse");
const { StatusNotificationResponse } = require("./StatusNotificationResponse");
const { StopTransactionResponse } = require("./StopTransactionResponse");
const { validateSchema } = require("../helper");

exports.handleResponse = function handleResponse(actionName, reqParams) {
    let response;
    switch (actionName) {
        case "Heartbeat":
            response = HeartbeatResponse();
            break;

        case "Authorize":
            response = AuthorizeResponse(reqParams);
            break;

        case "BootNotification":
            response = BootNotificationResponse(reqParams);
            break;

        case "DataTransfer":
            response = DataTransferResponse(reqParams);
            break;

        case "DiagnosticsNotification":
            response = DiagnosticsStatusNotificationResponse(reqParams);
            break;

        case "FirmwareNotification":
            response = FirmwareStatusNotificationResponse(reqParams);
            break;

        case "MeterValues":
            response = MeterValuesResponse(reqParams);
            break;

        case "StartTransaction":
            response = StartTransactionResponse(reqParams);
            break;

        case "StatusNotification":
            response = StatusNotificationResponse(reqParams);
            break;

        case "StopTransaction":
            response = StopTransactionResponse(reqParams);
            break;
    }

    const isValid = validateSchema(actionName + "Response", response)
    if (!isValid) {
        throw new Error("Invalid Response")
    }

    return response;
}