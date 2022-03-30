<html>
<script src='/socket.io/socket.io.js' > </script> // this loads socket io lib in javascript you can use cdn link from socket.io instead of this if not having integrated html in node.js
<body>
<button id="inc">Increment</button>
<script>
const socket = io () ;
// Listening updatecount event from server  
socket.on('updatecount',(data)=>{
console.log(count)
})
// adding click event on button 
document.querySelector('#inc').addEventListner('click',()=>{
socket.emit('increment')// Sending increment event to server 
})
<script>
</body>
<html>

