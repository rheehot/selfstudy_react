import React from "react";
import { useRecoilState } from "recoil";
import { Categories, ITodo, todoList } from "../atoms";

const Todo = ({ text, category, id }: ITodo) => {
  // todoList는 ITodo이 모여서 배열을 만든 interface
  const [todos, setTodos] = useRecoilState(todoList);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;

    const currTodo = { text, category: name as Categories, id };
    // localstorage 조회
    const localTodos: ITodo[] = JSON.parse(
      localStorage.getItem("todos") as string
    );
    // 수정할 항목 index
    const index = localTodos.findIndex((el) => el.id === id);

    setTodos((prev) => {
      // 카테고리를 수정한 새로운 todo
      return [...prev.slice(0, index), currTodo, ...prev.slice(index + 1)];
    });
    // setTodos를 하는데 이렇게 하는 이유는 immutability를 추구하면서
    // mutate를 하려고 하다 보니 새로운 배열을 만들어야 하기 때문에
    // 이렇게 하는 것이다.

    const modifiedLocal = [
      ...localTodos.slice(0, index),
      currTodo,
      ...localTodos.slice(index + 1),
    ];
    localStorage.setItem("todos", JSON.stringify(modifiedLocal));
  };

  const handleDelete = () => {
    setTodos((prev) => {
      return prev.filter((el) => el.id !== id);
    });
    const localTodos: ITodo[] = JSON.parse(
      localStorage.getItem("todos") as string
    );
    const modifiedLocal = localTodos.filter((el) => el.id !== id);
    return localStorage.setItem("todos", JSON.stringify(modifiedLocal));
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
