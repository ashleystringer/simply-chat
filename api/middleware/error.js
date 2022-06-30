const ErrorResponse = require('../utilities/errorResponse');

const errorHandler = (err, req, res, next) => {

    console.log('error handling'); 

    let error = {...err};

    error.message = err.message;
    
    console.log(err);

    // Mongoose duplicate key
    if(err.code === 11000){
        const message = 'Duplicate value field entered';
        error = new ErrorResponse(message, 400);
    }

    // Mongoose bad Object ID
    if(err.name === 'CastError'){
        const message = 'Resource not found';
        error = new ErrorResponse(message, 404);
    }

    // Mongoose validation error
    if(err.name === 'ValidationError'){
        const message = Object.values(err.errors)
        .map(val => val.message);
        error = new ErrorResponse(message, 400);
    }

    console.log(`err.message: ${err.message}`);
    console.log(`error.message: ${error.message}`);

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server error'
    });
};

module.exports = errorHandler;