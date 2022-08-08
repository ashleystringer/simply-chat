const { Server } = require('socket.io');
const ErrorResponse = require('../utilities/errorResponse');

class Socket{
    constructor(server){
        this.httpServer = server;
        this.error = null;
    }
    connect(){
        if(!this.io){
            this.error = new ErrorResponse("Error has occurred", 500);
        }
        const socketOpt = (socket) =>{
            socket.emit('test', 'hello');
        };
        this.io.on('connection', socketOpt);
    }
    closeConnection(){
        
    }
    createServer(options){
        if(!this.server){
            this.error = new ErrorResponse("Http server doesn't exist", 500);
        }
        this.io = new Server(this.server, options);
    }
}

module.exports = Socket;