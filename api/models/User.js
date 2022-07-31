const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true, "Username already exists"],
        required: [true, "Please add a username"]
    },
    email: {
        type: String,
        unique: [true, "Email already exists"],
        required: [true, "Please add an email"]
    },
    password: {
        type: String,
        required: [true, "Please add a password"],
        minlength: [6, 'Password must be at least six characters']
    }, 
    user_id:{
        type: String,
        required: true
    },
    userdata_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserData"
    }
});

UserSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.getSignedJwtToken = function(){
    return jwt.sign({ id: this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    });
}

UserSchema.methods.matchPassword = async function(enteredPassword){
    console.log('matchPassword');
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);