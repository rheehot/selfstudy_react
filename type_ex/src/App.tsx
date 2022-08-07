import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  // 원래 event는 any타입이 설정 되어 있는데, 항상 ts를 사용할 땐 any타입을 사용하지 않으려고 노력해야 한다.
  // 그래서 우린 ReactJS 내에 있는 type을 지정해주는데, 바로 React.FormEvent이다.
  // what kind of element can take onChange event
  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    return setUsername(value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("hello", username);
    return setUsername("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={handleInput}
          type="text"
          placeholder="username"
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;
