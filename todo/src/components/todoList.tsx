import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, todoList, todoSelector } from "../atoms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

const TodoList = () => {
  const toDos = useRecoilValue(todoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  console.log(toDos);
  return (
    <>
      <div>
        <h2>To Do</h2>

        <select value={category} onInput={onInput}>
          <option value={Categories.TO_DO}>To Do</option>
          <option value={Categories.DOING}>Doing</option>
          <option value={Categories.DONE}>Done</option>
        </select>

        <CreateTodo />
        {toDos?.map((toDo) => (
          <Todo key={toDo.id} {...toDo} />
        ))}
      </div>
    </>
  );
};

export default TodoList;
