import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

//assuming the type of the message User would get
interface JoinRoom {
  type: "Join";
  payload: {
    roomId: string;
  };
}

interface ChatMessage {
  type: "Chat";
  payload: {
    message: string;
  };

}

interface User {
  socket: WebSocket;
  room: string | null;
}

let allSockets: User[] = [];

wss.on("connection", (socket: WebSocket) => {
  //this is the message handler
  socket.on("message", (data: string) => {
    console.log("recieved: %s", data);
    const parsedMessage = JSON.parse(data);

    if (parsedMessage.type === "Join") {
      try {
        allSockets.push({
          socket,
          room: parsedMessage.payload.roomId,
        });

        console.log(allSockets, "allSockets");
      } catch (err) {
        console.log(err);
      }
    }

    if (parsedMessage.type === "Chat") {
      let currentUserRoom = null;
      //iterate over all the sockets array
      currentUserRoom = allSockets.find((u) => u.socket === socket)?.room;

      //to find the other users with same room so that we can deliver them the message

      allSockets.forEach((user) => {
        if (user.room === currentUserRoom) {
          user.socket.send(parsedMessage.payload.message);
        }
      });
    }
  });
});
