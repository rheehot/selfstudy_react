import "./App.css";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function RouterExTwo() {
  const params = useParams();
  const navigate = useNavigate();

  console.log(params.name);

  const obj = {
    one: "track",
  };

  // navigate의 두 번째 인자로 객체 안에 state를 실어서 보내면,
  // 해당 라우터에서는 useLocation으로 해당 값을 state로 받아올 수 있다.
  const onClickBtn = () => {
    navigate("/", { state: obj });
  };
  return (
    <div>
      <h1>고양이!</h1>
      <button onClick={onClickBtn}>메인 페이지 가기</button>
    </div>
  );
}

export default RouterExTwo;
