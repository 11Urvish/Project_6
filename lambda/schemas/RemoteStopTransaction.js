exports.schema = {
    "$id": "urn:OCPP:1.6:2019:12:RemoteStopTransactionRequest",
    "title": "RemoteStopTransactionRequest",
    "type": "object",
    "properties": {
        "transactionId": {
            "type": "integer"
        }
    },
    "additionalProperties": false,
    "required": [
        "transactionId"
    ]
}