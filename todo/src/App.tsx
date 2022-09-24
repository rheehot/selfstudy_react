import React from "react";
import { useRecoilState } from "recoil";
import { hourSelector, minuteState } from "./atoms";

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);
  // 이벤트, 리액트의 폼에서, HTML 인풋 엘리먼트에서 => 리액트 폼 안의 HTML인풋 엘리먼트에서 이벤트가 발생합니다.
  const handleMinuteChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };

  const handleHourChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  };

  return (
    <>
      <input
        value={minutes}
        onChange={handleMinuteChange}
        type="number"
        placeholder="Minutes"
      />
      <input
        value={hours}
        onChange={handleHourChange}
        type="number"
        placeholder="Hours"
      />
    </>
  );
}

export default App;
