import "./App.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "./redux/cat";

function ReviewRedux() {
  const getCatData = useSelector((state) => state.cat);
  const dispatch = useDispatch();

  const onClickBtn = () => {
    dispatch(changeName("사실은 아님"));
    return;
  };

  return (
    <div className="App">
      <p>{getCatData.name}</p>
      <button onClick={onClickBtn}>이름 바꾸기</button>
    </div>
  );
}

export default ReviewRedux;
