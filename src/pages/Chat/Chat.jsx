import React from "react";
import ChatBox from "../../components/ChatBox";
import Info from "../../components/Info";
import Input from "../../components/Input";
import Navbar from "../../components/Navbar";
// import Container from "../../components/HomeComponents/HomeContainer";
import "./Chat.css";
import Container from "../../components/HomeComponents/HomeContainer/Container";

function Chat() {
  return (
    <Container>
      <div className='chat'>
        <div className='chat_main'>
          <Navbar />
          <Info />
          <ChatBox />
          <Input />
        </div>
      </div>
    </Container>
  );
}

export default Chat;
