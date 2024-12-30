import { useEffect, useRef, useState } from "react";

const ChatComponent = () => {
  const [chats, setChats] = useState(["Hi there"]);
  const [message, setMessage] = useState("");

  //make a useRef for the websocket
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    ws.current = new WebSocket("ws://localhost:8080");
    ws.current.onmessage = (event) => {
      setChats((m) => [...m, event.data]);
    };

    //joining room logic
    ws.current.onopen = () => {
      ws.current?.send(
        JSON.stringify({
          type: "Join",
          payload: {
            roomId: "123",
          },
        })
      );
    };

    //This is a clieanup so that if it runs multiple times it will closr the previous socket
    return () => {
      ws.current?.close();
    };
  }, []);

  const sendMessage = (message: string) => {
    if (!message.trim()) return;
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current?.send(
        JSON.stringify({
          type: "Chat",
          payload: {
            message: message,
          },
        })
      );
      setMessage("");
    }
  };

  return (
    <div className="flex-col h-screen bg-black justify-between p-4">
      <div className="h-[90vh] text-white space-y-2 overflow-y-auto">
        {chats.map((chat, index) => (
          <div className="">
            <div
              className="bg-indigo-800 text-white font-bold rounded-md p-4 inline-block self-start"
              key={index}
            >
              {chat}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <div className="flex justify-between w-1/2">
          <div className="flex w-full">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="h-auto w-full border-none rounded-md p-2"
              placeholder="Type your message..."
            />
          </div>
          <div className="ml-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
              onClick={() => {
                sendMessage(message);
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
