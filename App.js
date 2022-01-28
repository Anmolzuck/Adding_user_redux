import React from "react";
import { Routes, Route } from "react-router-dom";
import SignupUser from "./pages/SignupUser";
import LoginUser from "./pages/LoginUser";
import LogedIN from "./pages/LogedIN";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LogedIN />}></Route>
      <Route exact path="/addUser" element={<SignupUser />}></Route>
      <Route exact path="/loginUser" element={<LoginUser />}></Route>
    </Routes>
  );
}

export default App;
