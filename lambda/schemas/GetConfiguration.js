exports.schema = {
    "$id": "urn:OCPP:1.6:2019:12:GetConfigurationRequest",
    "title": "GetConfigurationRequest",
    "type": "object",
    "properties": {
        "key": {
            "type": "array",
            "items": {
                "type": "string",
                "maxLength": 50
            }
        }
    },
    "additionalProperties": false
}