let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http) ;



app.get("/" , (req,res) => {
    res.sendFile(__dirname + "/index.html" )
})



io.on("connection", (socket) => {
    console.log("Client Connected to Application") ;
    socket.on('chat message' , (mes) => {
       
        // console.log(mes.user);
        // console.log(mes.message);
        io.emit('chat message', mes);

    });
})


// server done 
http.listen(9090,()=>{
    console.log('Running on port : 9090') ;
})