import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, ITodo, todoList } from "../atoms";

const Todo = ({ text, category, id }: ITodo) => {
  /* const handleClick = (newCategory: ITodo["category"]) => {
    console.log("I wanna ", newCategory);
  }; */
  // todoList는 ITodo이 모여서 배열을 만든 interface
  const setTodos = useSetRecoilState(todoList);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setTodos((prev) => {
      // findIndex 잘 알아두자!
      const index = prev.findIndex((el) => el.id === id);
      // 카테고리를 수정한 새로운 todo
      const currTodo = { text, category: name as any, id };
      return [...prev.slice(0, index), currTodo, ...prev.slice(index + 1)];
    });
    // setTodos를 하는데 이렇게 하는 이유는 immutability를 추구하면서
    // mutate를 하려고 하다 보니 새로운 배열을 만들어야 하기 때문에
    // 이렇게 하는 것이다.
  };
  const handleDelete = () => {
    return setTodos((prev) => {
      return prev.filter((el) => {
        if (el.id !== id) {
          localStorage.removeItem(String(el.id));
        }
        return el.id !== id;
      });
    });
  };

  return (
    <>
      <li>
        <span>{text}</span>
        {category !== Categories.TO_DO && (
          <button onClick={handleClick} name={Categories.TO_DO}>
            Todo
          </button>
        )}
        {category !== Categories.DOING && (
          <button onClick={handleClick} name={Categories.DOING}>
            Doing
          </button>
        )}
        {category !== Categories.DONE && (
          <button onClick={handleClick} name={Categories.DONE}>
            Done
          </button>
        )}
        <button onClick={handleDelete}>Delete</button>
      </li>
    </>
  );
};

export default Todo;
