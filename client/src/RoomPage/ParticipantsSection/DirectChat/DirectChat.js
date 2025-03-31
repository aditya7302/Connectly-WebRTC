import React, { useState, useEffect } from "react";
import DirectChatHeader from "./DirectChatHeader";
import MessagesContainer from "./MessagesContainer";
import NewMessage from "./NewMessage";
import ConversationNotChosen from "./ConversationNotChosen";
import { connect } from "react-redux";

const getDirectChatHistory = (directChatHistory, socketId = null) => {
  if (!socketId || !directChatHistory) {
    return [];
  }
  const history = directChatHistory.find((h) => h.socketId === socketId);
  return history ? history.chatHistory : [];
};

const DirectChat = ({ activeConversation, directChatHistory }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(
      getDirectChatHistory(
        directChatHistory,
        activeConversation ? activeConversation.socketId : null
      )
    );
  }, [activeConversation, directChatHistory]);

  return (
    <div className="direct_chat_container">
      <DirectChatHeader activeConversation={activeConversation} />
      <MessagesContainer messages={messages} />
      <NewMessage />
      {!activeConversation && <ConversationNotChosen />}
    </div>
  );
};

const mapStoreToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStoreToProps)(DirectChat);
