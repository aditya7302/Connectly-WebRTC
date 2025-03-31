import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import JoinRoomPage from "./JoinRoomPage/JoinRoomPage";
import RoomPage from "./RoomPage/RoomPage";
import IntroductionPage from "./IntroductionPage/IntroductionPage";
import { connectWithSocketIOServer } from "./utils/wss";

import "./App.css";

function App() {
  useEffect(() => {
    connectWithSocketIOServer();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/join-room" element={<JoinRoomPage />} />
        <Route path="/room" element={<RoomPage />} />
        <Route path="/" element={<IntroductionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
