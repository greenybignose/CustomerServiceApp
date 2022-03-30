const http = require('http') // its a default package of node.js
const express = require('express')
const app = express()
const server = http.createServer(http) // as in normal express does this internally but as we are using socket.io it need ths parameter so we are defining it 
const socketio = require('socket.io')
const io = socketio(server)
const path = require('path')// default package to make path of directory 
app.use(express.static(path.join(__dirname,'../public')))
// app.use is used to set middleware 
// express.static() it is internal function of express js which is used to serve static js,html files or folder you can learn more about it on express js site 

let count = 0 ; // count global variable 

io.on('connection',()=>{
console.log('connected')
socket.emit('updatecount',count) // this is used to send a event and count here is parameter we can send as many parameter we want 
// Listening the event and performing logic here 
socket.on('increment',()=>{
count++;
io.emit('updatecount',count)
})
// when a client disconnect this function is called 
socket.on('disconnect',()=>{
console.log('server disconnected')
})
})

server.listen(3000,()=>{
console.log('server started')
})
