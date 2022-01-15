import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from './pages/home/home'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
export default App;