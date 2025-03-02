import React, { useState } from "react";
import "./WhatsAppUI.css";

const WhatsAppUI = () => {
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
    <div className="whatsapp-ui">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <img src="https://via.placeholder.com/50" alt="Profile" className="profile-pic" />
          <h2>WhatsApp Clone</h2>
        </div>
        <div className="chat-list">
          <div className="chat">
            <img src="https://via.placeholder.com/40" alt="User" />
            <div className="chat-info">
              <h3>John Doe</h3>
              <p>Hey, how are you?</p>
            </div>
          </div>
          <div className="chat">
            <img src="https://via.placeholder.com/40" alt="User" />
            <div className="chat-info">
              <h3>Jane Smith</h3>
              <p>See you soon!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Window */}
      <div className="chat-window">
        <div className="chat-header">Chat with John Doe</div>
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender === "me" ? "sent" : "received"}`}>
              <p>{msg.text}</p>
            </div>
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
    </div>
  );
};

export default WhatsAppUI;



.whatsapp-ui {
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #e5ddd5;
}

/* Sidebar */
.sidebar {
  width: 30%;
  background-color: #f0f0f0;
  padding: 15px;
  border-right: 1px solid #ccc;
}

.sidebar-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}

.profile-pic {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.chat-list {
  margin-top: 20px;
}

.chat {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
}

.chat img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.chat-info h3 {
  margin: 0;
  font-size: 16px;
}

.chat-info p {
  margin: 0;
  color: gray;
  font-size: 14px;
}

/* Chat Window */
.chat-window {
  width: 70%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
}

.chat-header {
  background-color: #075e54;
  color: white;
  padding: 15px;
  font-size: 18px;
}

.messages {
  flex: 1;
  padding: 15px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.message {
  padding: 10px 15px;
  border-radius: 20px;
  margin: 5px;
  max-width: 70%;
  font-size: 16px;
}

.sent {
  background-color: #dcf8c6;
  align-self: flex-end;
}

.received {
  background-color: #fff;
  align-self: flex-start;
}

/* Input Area */
.input-area {
  display: flex;
  padding: 10px;
  background: white;
  border-top: 1px solid #ccc;
}

.input-area input {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 20px;
  outline: none;
}

.input-area button {
  background-color: #075e54;
  color: white;
  padding: 10px 15px;
  border: none;
  margin-left: 5px;
  cursor: pointer;
  border-radius: 20px;
}
