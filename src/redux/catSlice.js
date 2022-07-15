import { createSlice } from "@reduxjs/toolkit";

// 여기 안에 action type, action function, reducer, initial state가 다 들어간다.
// 이렇게 다 들어가 있는 것이 slice이다. 아래는 slice의 형태
const catReducer = createSlice({
  // reducers의 액션함수명과 합쳐져서 type을 생성 => cat/changeName
  name: "cat",
  // reducer의 state의 초깃값 설정
  initialState: {
    age: 26,
    name: "Perl",
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
      state.age = 1;
    },
  },
});

/* 
reducer's' 안에 action function이 있다.
action type과 action객체만 넘겨준 기존의 리덕스와는 다르게,
여기서는 그 액션으로 뭘 해야 하는지까지 넣어주어야 한다.

툴킷은 immer라는 불변성 유지 패키지를 이미 가지고 있다.
state.name = action.payload; 이런 식으로 그냥 적으면 immer가 자동으로 불변성을 유지해준다.
불변성 유지를 하려고 새 객체를 만들고 스프레드 문법을 쓰고 하지 않아도 된다.

immer가 불변성을 유지하는 방법은 자바스크립트의 proxy라는 객체가 있는데, 이 객체를 사용해서 불변성 유지를 한다.
Proxy 객체는 기본적인 동작(속성 접근, 할당, 순회, 열거, 함수 호출 등)의 새로운 행동을 정의할 때 사용한다. immer는 불변성 유지를 할 때 이걸 쓴다.

export를 할 때는 아래처럼 이렇게 해주어야 한다.
액션함수changeName는 그냥 export 해주고 default는 reducer를 해준다.
즉, createSlice를 하면 catSlice변수 안에 actions와 reducer가 들어있는데
reducer는 말 그대로 리듀서이고, actions에는 액션생성 함수가 들어간다.

결과적으로는 name+reducers안의 액션생성함수가 action type을 만들고
initialState에는 초깃값이 들어가고
createSlice를 통해 생성된 객체 안에, reducer가 있고
그리고 같은 객체의 actions 안에 액션 생성함수가 있는
하나 안에 모든게 들어있는 Slice가 있다.
*/
export const { changeName } = catReducer.actions;
export default catReducer.reducer;
