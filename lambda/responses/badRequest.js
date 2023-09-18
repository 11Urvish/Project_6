const { RESPONSE_STATUS } = require("../config");

exports.badRequestResponse = function badRequestResponse() {
    return {
        status: RESPONSE_STATUS.FAILURE,
        data : {
            "error" : "Invalid Parameters Passed"
        }
    };
}