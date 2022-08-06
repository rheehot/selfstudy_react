// 액션 타입
const CHANGE_NAME = "cat/CHANGE_NAME";

// 초깃값 설정
const initState = { name: "Perl", age: 5 };

// 액션 생성 함수
export const changeName = (name) => {
  return { type: CHANGE_NAME, name };
};

// 리듀서
export default function reducer(state = initState, action = {}) {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.name };
    default:
      return state;
  }
}
