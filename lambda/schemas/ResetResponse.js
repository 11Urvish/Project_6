exports.schema = {
    "$id": "urn:OCPP:1.6:2019:12:ResetResponse",
    "title": "ResetResponse",
    "type": "object",
    "properties": {
        "status": {
            "type": "string",
            "additionalProperties": false,
            "enum": [
                "Accepted",
                "Rejected"
            ]
        }
    },
    "additionalProperties": false,
    "required": [
        "status"
    ]
}