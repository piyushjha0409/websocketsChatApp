"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let allSockets = [];
wss.on("connection", (socket) => {
    //this is the message handler
    socket.on("message", (data) => {
        var _a;
        console.log("recieved: %s", data);
        const parsedMessage = JSON.parse(data);
        if (parsedMessage.type === "Join") {
            try {
                allSockets.push({
                    socket,
                    room: parsedMessage.payload.roomId,
                });
                console.log(allSockets, "allSockets");
            }
            catch (err) {
                console.log(err);
            }
        }
        if (parsedMessage.type === "Chat") {
            let currentUserRoom = null;
            //iterate over all the sockets array
            currentUserRoom = (_a = allSockets.find((u) => u.socket === socket)) === null || _a === void 0 ? void 0 : _a.room;
            //to find the other users with same room so that we can deliver them the message
            allSockets.forEach((user) => {
                if (user.room === currentUserRoom) {
                    user.socket.send(parsedMessage.payload.message);
                }
            });
        }
    });
});
