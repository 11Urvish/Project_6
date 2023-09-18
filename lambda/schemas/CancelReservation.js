exports.schema = {
    "$id": "urn:OCPP:1.6:2019:12:CancelReservationRequest",
    "title": "CancelReservationRequest",
    "type": "object",
    "properties": {
        "reservationId": {
            "type": "integer"
        }
    },
    "additionalProperties": false,
    "required": [
        "reservationId"
    ]
}