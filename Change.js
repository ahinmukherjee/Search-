import React, { useState } from "react";
import Message from "./Message";
import "./ChatWindow.css";

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { text: "Hello!", sender: "me" },
    { text: "Hey, how are you?", sender: "other" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "me" }]);
      setInput("");
    }
  };

  return (
    <div className="chat-window">
      <div className="chat-header">Chat with John Doe</div>
      <div className="messages">
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} sender={msg.sender} />
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
