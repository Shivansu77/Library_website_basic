class inputValidationException extends Error {
    constructor(message) {
        super(message);
        this.name = "InputValidationException";
        this.status = 400; // Bad Request
    }
}
module.exports = inputValidationException;