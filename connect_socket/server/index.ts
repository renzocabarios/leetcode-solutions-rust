import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log(socket.id);

  socket.on("message", (message) => {
    console.log(message);
    io.emit("message", { message });
  });
});
httpServer.listen(3000, () => {
  console.log(`${3000} port started`);
});
