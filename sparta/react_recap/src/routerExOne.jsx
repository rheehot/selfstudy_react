import "./App.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "./redux/cat";
import { useLocation } from "react-router-dom";

function RouterExOne() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="App">
      <p>첫번째 페이지</p>
    </div>
  );
}

export default RouterExOne;
