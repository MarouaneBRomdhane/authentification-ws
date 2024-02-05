import React from "react";
import "./BackgroundStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Caisse1 from "./Components/Caisse1";
import Login from "./Components/Login";
import "./Components/ComponentStyle.css";
import { Route, Routes } from "react-router-dom";
import Register from "./Components/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Home" element={<Caisse1 />} />
      </Routes>
    </div>
  );
}

export default App;
