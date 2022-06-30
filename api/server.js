const express = require('express'); 
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({path: './config/config.env'});

// Connect to database
connectDB();


// Body parser
app.use(express.json());

//Enable CORS
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

const auth = require('./routes/auth');

app.use('/auth', auth);

app.use(errorHandler);

app.listen(5000, ()=>{
    console.log('Listening on Port 5000');
});