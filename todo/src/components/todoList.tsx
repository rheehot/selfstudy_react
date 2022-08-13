import { useRecoilValue } from "recoil";
import { todoList } from "../atoms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

const TodoList = () => {
  const toDos = useRecoilValue(todoList);
  console.log(toDos);
  return (
    <>
      <div>
        <CreateTodo />
        <ul>
          {toDos.map((el) => (
            <Todo key={el.id} {...el} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
