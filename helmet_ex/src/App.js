import logo from "./logo.svg";
import "./App.css";
import { Helmet } from "react-helmet";
import { createPortal } from "react-dom";
import React from "react";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>안녕하세요</title>
        <meta property="og:title" content="page one"></meta>
      </Helmet>
      <ReactPortal>
        <p>안녕하세요!!</p>
      </ReactPortal>
    </div>
  );
}

export default App;

export const ReactPortal = ({ children }) => {
  return createPortal(children, document.getElementById("portal"));
};
