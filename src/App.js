import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from './pages/home/home'

function App() {
  return (
    <div className="App">
      <h1>Welcome to Full Stack Learning Routes!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
export default App;