class CustomApiError extends Error{
    constructor(message){
        super(message);
    }
}

class BadRequest extends CustomApiError{
    constructor(message){
        super(message);
        this.statusCode = 400;
    }
}

class NotFound extends CustomApiError{
    constructor(message){
        super(message);
        this.statusCode = 404;
    }
}

module.exports = {
    CustomApiError,
    BadRequest,
    NotFound
}