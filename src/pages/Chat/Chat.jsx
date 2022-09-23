import React from "react";
import ChatBox from "../../components/ChatBox";
import Info from "../../components/Info";
import Input from "../../components/Input";
import Navbar from "../../components/Navbar";
import "./Chat.css";

function Chat() {
  return (
    <div className="chat">
      <div className="chat_main">
        <Navbar />
        <Info />
        <ChatBox />
        <Input />
      </div>
    </div>
  );
}

export default Chat;
