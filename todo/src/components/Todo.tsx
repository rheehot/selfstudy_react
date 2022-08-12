import { ITodo } from "../atoms";

const Todo = ({ text }: ITodo) => {
  return (
    <>
      <li>
        <span>{text}</span>
        <button>Todo</button>
        <button>Doing</button>
        <button>Done </button>
      </li>
    </>
  );
};

export default Todo;
