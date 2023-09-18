exports.schema = {
    "$id": "urn:OCPP:1.6:2019:12:SetChargingProfileRequest",
    "title": "SetChargingProfileRequest",
    "type": "object",
    "properties": {
        "connectorId": {
            "type": "integer"
        },
        "csChargingProfiles": {
            "type": "object",
            "properties": {
                "chargingProfileId": {
                    "type": "integer"
                },
                "transactionId": {
                    "type": "integer"
                },
                "stackLevel": {
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
                "chargingProfileKind": {
                    "type": "string",
                    "additionalProperties": false,
                    "enum": [
                        "Absolute",
                        "Recurring",
                        "Relative"
                    ]
                },
                "recurrencyKind": {
                    "type": "string",
                    "additionalProperties": false,
                    "enum": [
                        "Daily",
                        "Weekly"
                    ]
                },
                "validFrom": {
                    "type": "string",
                    "format": "date-time"
                },
                "validTo": {
                    "type": "string",
                    "format": "date-time"
                },
                "chargingSchedule": {
                    "type": "object",
                    "properties": {
                        "duration": {
                            "type": "integer"
                        },
                        "startSchedule": {
                            "type": "string",
                            "format": "date-time"
                        },
                        "chargingRateUnit": {
                            "type": "string",
                            "additionalProperties": false,
                            "enum": [
                                "A",
                                "W"
                            ]
                        },
                        "chargingSchedulePeriod": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "startPeriod": {
                                        "type": "integer"
                                    },
                                    "limit": {
                                        "type": "number",
                                        "multipleOf": 0.1
                                    },
                                    "numberPhases": {
                                        "type": "integer"
                                    }
                                },
                                "additionalProperties": false,
                                "required": [
                                    "startPeriod",
                                    "limit"
                                ]
                            }
                        },
                        "minChargingRate": {
                            "type": "number",
                            "multipleOf": 0.1
                        }
                    },
                    "additionalProperties": false,
                    "required": [
                        "chargingRateUnit",
                        "chargingSchedulePeriod"
                    ]
                }
            },
            "additionalProperties": false,
            "required": [
                "chargingProfileId",
                "stackLevel",
                "chargingProfilePurpose",
                "chargingProfileKind",
                "chargingSchedule"
            ]
        }
    },
    "additionalProperties": false,
    "required": [
        "connectorId",
        "csChargingProfiles"
    ]
}