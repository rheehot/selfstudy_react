import "./App.css";
import Signup from "./pages/Signup";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const SuccessLogin = () => {
  const logoutBtn = () => {
    const auth = getAuth();
    signOut(auth);
  };

  return (
    <>
      <h1>환영합니다! :)</h1>
      <button onClick={logoutBtn}>로그아웃</button>
    </>
  );
};

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const auth = getAuth();
  console.log(auth.currentUser);

  const loginChecked = async (user) => {
    user ? setIsLogin(true) : setIsLogin(false);
  };

  useEffect(() => {
    /* 
    1. 로그인을 관리하는 state를 만든다.
    2. onAuthStateChanged메소드를 사용한다.
    3. getAuth를 객체를 첫 번째 요소로, 두 번째 요소로는 로그인 state를 바꿔주는 setState가 설정된 콜백 함수를 넣어준다.
       onAuthStateChanged메소드는 두 번째 요소에 로그인과 관련된 파라미터를 하나 넘겨준다. 그래서 콜백함수는 그 파라미터를 보고
       로그인 여부를 검사할 수 있다.
    */
    onAuthStateChanged(auth, loginChecked);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        {isLogin ? (
          <Route path="/login" element={<SuccessLogin />} />
        ) : (
          <Route path="/login" element={<Login />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
