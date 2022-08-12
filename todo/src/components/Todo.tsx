import { useRecoilValue } from "recoil";
import { todoList } from "../atoms";

const Todo = () => {
  const toDos = useRecoilValue(todoList);
  return (
    <>
      <ul>
        {toDos.map((el) => (
          <li key={el.id}>{el.text}</li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
