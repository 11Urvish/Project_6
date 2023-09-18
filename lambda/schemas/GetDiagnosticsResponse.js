exports.schema = {
    "$id": "urn:OCPP:1.6:2019:12:GetDiagnosticsResponse",
    "title": "GetDiagnosticsResponse",
    "type": "object",
    "properties": {
        "fileName": {
            "type": "string",
            "maxLength": 255
        }
    },
    "additionalProperties": false
}