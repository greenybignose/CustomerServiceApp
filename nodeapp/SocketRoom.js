const joinchat = () => {

const activeUsers = new Set();

let roomId = "";

io.on("connecton", (socket) => {
       socket.on("joinroom", (room) => {
      roomId = room;
     console.log(roomId);   
   socket.join(room);
});

    socket.on("newmessage", (msg) => {
       io.to(roomId).emit("newmessage", msg);
});

     socket.on("disconnect", () => {
         activeUsers.delete(socket.userId);

     io.to(roomId).emit("User disconnected", socket.userId);
});
});
}

module.exports = {joinchat};
