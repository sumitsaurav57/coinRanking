import Navbar from "./navbar";
import Input from "./input";
import "./App.css";
import { useState } from "react";
import img2 from "./images/3.svg";
import Section from "./Section";
import { Routes, Route } from "react-router-dom";
import CoinDetail from "./CoinDetail";
function App() {
  return (
    <div className="App relative overflow-x-hidden ">
      <header className="App-header fixed z-10 top-0 w-screen overflow-x-hidden h-[10vh]  ">
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Section />} exact />
        <Route path="/exercise/:id" element={<CoinDetail />} />
      </Routes>
    </div>
  );
}
export default App;
