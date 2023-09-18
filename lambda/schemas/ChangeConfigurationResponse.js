exports.schema = {
    "$id": "urn:OCPP:1.6:2019:12:ChangeConfigurationResponse",
    "title": "ChangeConfigurationResponse",
    "type": "object",
    "properties": {
        "status": {
            "type": "string",
            "additionalProperties": false,
            "enum": [
                "Accepted",
                "Rejected",
                "RebootRequired",
                "NotSupported"
            ]
        }
    },
    "additionalProperties": false,
    "required": [
        "status"
    ]
}