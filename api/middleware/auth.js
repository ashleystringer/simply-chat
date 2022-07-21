const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utilities/errorResponse'); 
const jwt = require('jsonwebtoken');

/*
Create middleware that checks bearer token to determine if access to route is allowed
*/
exports.protect = asyncHandler(async (req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        // Set token from Bearer token in header
        token = req.headers.authorization.split(' ')[1];
    }

    // Make sure token exists 
    if(!token){
        return next(new ErrorResponse('Not authorized to access this route', 401));
    }

    try{
        //Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        
        //req.user = await User.findById(decoded.id);

        next();
    }catch(err){
        return next(new ErrorResponse('Not authorized to access this route', 401));
    }

});