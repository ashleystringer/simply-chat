const express = require('express');
const asyncHandler = require('../middleware/async');
const router = express.Router();
const User = require('../models/User');
const ErrorResponse = require('../utilities/errorResponse');
const { protect } = require('../middleware/auth');
const { v4: uuidv4 } = require('uuid');

router.post('/login', asyncHandler(async (req, res, next) => {
    const { username, password } = req.body;

    console.log('Test for route login');

    // Validate email and password
    if(!username || !password){
        return next(new ErrorResponse('Please provide an email and password', 400));
    }

    const user = await User.findOne({username}).select('+password');

    if(!user){
        return next(new ErrorResponse('Invalid credentials', 401));
    }

    const doesPasswordMatch = await user.matchPassword(password);

    if(!doesPasswordMatch){
        return next(new ErrorResponse('Invalid credentials', 401));
    }

    console.log(user);

    sendUserToken(user, 200, res);

}));

router.post('/register', asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    const user_id = uuidv4();

    console.log(typeof user_id);

    console.log('Test for route register');

    await User.create({username, password, email, user_id});
    res.status(200).json({msg: 'Successful'});
}));

router.get('/user', asyncHandler(async (req, res) =>{

}));

function sendUserToken(user, statusCode, res){
    const token = user.getSignedJwtToken();

    const options = {
        httpOnly: true,
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000)
    };

    res.status(statusCode)
    .cookie('token', token, options)
    .json({
        success: true,
        token
    });
}

module.exports = router;