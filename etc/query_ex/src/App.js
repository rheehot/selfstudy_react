import "./App.css";
import React, { useRef } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const getSleepList = () => {
  return axios.get("http://localhost:5001/sleep_times");
};

const addSleepData = (data) => {
  return axios.post("http://localhost:5001/sleep_times", data);
};

function App() {
  const day_input = useRef("");
  const sleep_time_input = useRef("");
  // queryClient에 invalidQueries라는 함수가 있는데, 이 함수를 이용하면 쿼리를 무효화 시켜준다.
  const queryClient = useQueryClient();
  // 4버전에서는 쿼리 key 부분에 []대괄호로 한 번 더 감싸줘야 한다.
  const request_query = useQuery(["sleep_list"], getSleepList, {
    onSuccess: (data) => {
      console.log("성공했어!", data);
    },
    onError: (err) => {
      console.log("실패했습니다!", err);
    },
  });
  const { mutate: addDataMutate } = useMutation(addSleepData, {
    onSuccess: (data) => {
      // 수면 데이터 목록을 다시 불러오면 ok! 이렇게 해야지 새롭게 업데이트된 데이터를 서버에서 불러 올 수 있다.
      queryClient.invalidateQueries(["sleep_list"]);
    },
  });

  if (request_query.isLoading) {
    return null;
  }

  const onClickHandler = () => {
    const data = {
      day: day_input.current.value,
      sleep_time: sleep_time_input.current.value,
    };
    addDataMutate(data);
  };

  return (
    <>
      <div className="App">
        {request_query.data.data.map((el) => {
          return (
            <>
              <div key={el.id}>
                <p>{el.day}</p>
                <p>{el.sleep_time}</p>
              </div>
            </>
          );
        })}
        <input ref={day_input} placeholder="수면 요일" />
        <input ref={sleep_time_input} placeholder="수면 시간" />
        <button onClick={onClickHandler}>데이터 추가하기</button>
      </div>
    </>
  );
}

export default App;
