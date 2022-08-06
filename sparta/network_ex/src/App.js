import "./App.css";
import { useEffect } from "react";
import axios from "axios";

// function App() {
//   useEffect(() => {
//     /* let xhr = new XMLHttpRequest();
//     console.log(xhr);
//     xhr.open("GET", "http://localhost:5001/sleep_times");
//     xhr.send(); */
//     // XMLHttpRequest.readyState는 XMLHttpRequest의 상태를 반환해준다. 완벽한 상태가 아니라도 계속 호출을 한다.
//     /*
//     0~4번까지
//     0 : 아무것도 안한 상태. 객체는 만들었지만 open도 하기 전
//     1 : open하고 호출은 안한 상태
//     2 : send를 호출한 상태(보낸 상태)
//     3 : 응답을 기다리는 상태
//     4 : 응답을 받은 상태 => 데이터를 가지고 올 수 있다.
//     */
//     // 바뀔 때마다 콜백함수를 호출해준다.
//     /* xhr.onreadystatechange = () => {
//       if (xhr.readyState === 4) {
//         console.log(xhr.responseText);
//       }
//     }; */
//     // onload는 완벽히 서버의 응답이 끝났을 때 실행이 된다.
//     /*     xhr.onload = () => {
//       console.log(xhr.responseText);
//     }; */
//     // fetch는 promise를 반환해준다.
//     // callback();
//     // axios
//     axiosCallback();
//   });

//   const data = {
//     day: "일",
//     sleep_time: "9:00",
//   };
//   /*   const callback = async () => {
//     const response = await fetch("http://localhost:5001/sleep_times", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json; charset=utf-8",
//       },
//       body: JSON.stringify(data),
//     });
//     console.log(response);
//   }; */

//   // axios는 그냥 axios({})하고 쓰는 방법이 있고, axios.get, axios.post처럼 요청 method를 사용하는 방법이 있다.
//   const axiosCallback = () => {
//     // axios({})를 사용해서 config를 모두 설정하는 방법
//     /*     axios({
//       method: "GET",
//       url: "http://localhost:5001/sleep_times",
//     })
//       .then((res) => console.log("then: ", res))
//       .catch((rej) => console.log("catch: ", rej)); */
//     // axios.get , axios.post 요청 method 사용
//     /*     axios
//       .get("http://localhost:5001/sleep_times")
//       .then((res) => console.log("then: ", res))
//       .catch((rej) => console.log("catch: ", rej)); */
//     axios
//       .post("http://localhost:5001/sleep_times", data)
//       .then((res) => console.log("then: ", res))
//       .catch((rej) => console.log("catch: ", rej));
//   };

//   return (
//     <div className="App">
//       <p>App.js</p>
//     </div>
//   );
// }

// pingpong과제

const App = () => {
  const fetchBtn = async () => {
    fetch("http://localhost:5001/ping", {
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };
  const axiosBtn = async () => {
    const res = await axios.get("http://localhost:5001/ping");
    console.log(res);
  };

  return (
    <>
      <button onClick={fetchBtn}>fetch</button>
      <button onClick={axiosBtn}>axios</button>
    </>
  );
};

export default App;
