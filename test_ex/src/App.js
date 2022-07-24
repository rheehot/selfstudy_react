import logo from "./logo.svg";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import { Cat } from "./Cat";
import { Dog } from "./Dog";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/cat" element={<Cat />}></Route>
        <Route path="/" element={<Dog />}></Route>
      </Routes>
    </div>
  );
}

export default App;
