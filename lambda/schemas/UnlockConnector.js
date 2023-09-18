exports.schema = {
    "$id": "urn:OCPP:1.6:2019:12:UnlockConnectorRequest",
    "title": "UnlockConnectorRequest",
    "type": "object",
    "properties": {
        "connectorId": {
            "type": "integer"
        }
    },
    "additionalProperties": false,
    "required": [
        "connectorId"
    ]
}