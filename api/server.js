const express = require('express'); 
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');
const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer(app);

// Load env vars
dotenv.config({path: './config/config.env'});

// Connect to database
connectDB();


// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

//Enable CORS
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));


const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
});

io.on('connection', socket => {
    console.log('On connection');
    socket.emit('test', 'hello');
});


const auth = require('./routes/auth');

app.use('/auth', auth);

app.use(errorHandler);

server.listen(5000, ()=>{
    console.log('Listening on Port 5000');
});