const express  =  require('express');

const app = express();

const PORT =  process.env.PORT || 5000;

const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection',socket=>{
    // socket.emit('news',{hello:'world'});
    socket.on(`submitMessage`,({from,message})=>{
        console.log(from+" "+message);
        socket.broadcast.emit('getMessage',{
            from:from,
            message:message
        })
    })
})

if(process.env.NODE_ENV==='production'){
    app.use(express.static(__dirname+"/public"));
    app.get('/.*/',(req,res)=>{
        res.sendFile(__dirname+"/public/index.html");
    })
}

server.listen(PORT,()=>console.log(`Server is listening to port ${PORT}`));

