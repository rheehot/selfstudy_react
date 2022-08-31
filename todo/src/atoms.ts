import { atom, selector } from "recoil";
export interface ITodo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

export const isDarkAtom = atom({
  key: "isDark",
  default: false,
});

export const todoList = atom<ITodo[]>({
  key: "toDo",
  default: [],
});

/* 
    selector를 이용해서 todo들을 category에 따라서 분류해보도록 하자. 이게 selector의 파워이다.
    selector를 이용하면 state를 가져다가 다른 state를 만들 수 있다. 우리가 원하는 대로 state를 변형할 수 있다.
    우리로 치면, TO_DO state, DOING state, DONE state 각각 state를 만들긴 싫은것이다.
    하나의 atom에서 그 output을 더 잘 써먹는 방법인 것이다.
*/
export const todoSelector = selector({
  key: "todoSelector",
  /* 
  selector은 get function이 필요한데, 그 함수는 인자로 객체를 받는데, 그 객체에는 get Fucntion이 들어가 있다.
  이것은 selector가 기존 atom을 가져다가 output을 변형할 수 있다는 것인데, 그렇기 때문에 뭘 변형할 지 받아올 get Function이 있어야 한다.
  즉 그게 get function이 있어야 하는 이유이다. 이게 있어야지 atom을 받을 수 있다.
  이게 좋은 점은 이제 이 selector가 atom을 보고 있다는 것이다. atom이 변하면 selector도 변한다는 것이다.

  주의해야 할 건 state 자체를 바꾸는 것이 아니라 그 output을 바꾸고 있다는 것이다.
  state는 동일하다 우리가 하는 건 toDo들을 잘 조직해서 원하는 방식으로 체계화를 하는 것이다.

  정리 ::: selector는 key, get메소드가 있다. get은 options라는 인자를 받으면서 호출되는데 options은 객체다. 
  그리고 그 객체에는 get function이 들어있다.
  get function을 이용하면 selector의 내부로 atom을 가지고 올 수 있다.
   */
  get({ get }) {
    const toDos = get(todoList);
    return [
      toDos.filter((toDo) => toDo.category === "TO_DO"),
      toDos.filter((toDo) => toDo.category === "DOING"),
      toDos.filter((toDo) => toDo.category === "DONE"),
    ];
  },
});
