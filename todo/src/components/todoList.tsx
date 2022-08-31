import { useRecoilValue } from "recoil";
import { todoList, todoSelector } from "../atoms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

const TodoList = () => {
  const [toDos, doing, done] = useRecoilValue(todoSelector);
  return (
    <>
      <div>
        <CreateTodo />
        <h2>To Do</h2>
        <ul>
          {toDos.map((el) => (
            <Todo key={el.id} {...el} />
          ))}
        </ul>
        <h2>Doing</h2>
        <ul>
          {doing.map((el) => (
            <Todo key={el.id} {...el} />
          ))}
        </ul>
        <h2>Done</h2>
        <ul>
          {done.map((el) => (
            <Todo key={el.id} {...el} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
