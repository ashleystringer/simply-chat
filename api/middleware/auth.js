const asyncHandler = require('../middleware/async');
const errorResponse = require('../utilities/errorResponse'); 

/*
Create middleware that checks bearer token to determine if access to route is allowed
*/
exports.protect = asyncHandler(async (req, res, next) => {
    let token;
});