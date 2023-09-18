exports.schema = {
    "$id": "urn:OCPP:1.6:2019:12:ClearChargingProfileRequest",
    "title": "ClearChargingProfileRequest",
    "type": "object",
    "properties": {
        "id": {
            "type": "integer"
        },
        "connectorId": {
            "type": "integer"
        },
        "chargingProfilePurpose": {
            "type": "string",
            "additionalProperties": false,
            "enum": [
                "ChargePointMaxProfile",
                "TxDefaultProfile",
                "TxProfile"
            ]
        },
        "stackLevel": {
            "type": "integer"
        }
    },
    "additionalProperties": false
}
