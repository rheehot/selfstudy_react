import React from "react";

export const Cat = () => {
  const [num, setNum] = React.useState(1);
  return (
    <div>
      <h1>고양이 페이지!</h1>
      <p>고양이가 {num} 마리 있어요!</p>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        고양이 추가하기
      </button>
    </div>
  );
};
