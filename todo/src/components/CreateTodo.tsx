import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { todoList } from "../atoms";

interface IValid {
  todo: string;
}

const CreateTodo = () => {
  // todoList recoil선언 (useRecoilValue, useSetRecoilState)
  const [toDos, setTodos] = useRecoilState(todoList);
  // useForm선언
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IValid>({
    defaultValues: {},
  });
  // handleSumbit의 onValid함수 {toDo}는 hook-form에서 온 것을 구조분해 문법으로 받은 것이다.
  const onValid = ({ todo }: IValid) => {
    setValue("todo", "");
    setTodos((prev) => [
      { text: todo, category: "TO_DO", id: Date.now() },
      ...prev,
    ]);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onValid)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          {...register("todo", {
            required: "plz write something",
          })}
          placeholder="Write a to do"
        ></input>
        <span>{errors?.todo?.message}</span>
        <button>Add</button>
      </form>
    </>
  );
};

export default CreateTodo;