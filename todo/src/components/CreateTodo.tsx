import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, todoList } from "../atoms";

interface IValid {
  todo: string;
}

const CreateTodo = () => {
  // todoList recoil선언 (useRecoilValue, useSetRecoilState, useRecoilState)
  const setTodos = useSetRecoilState(todoList);
  const category = useRecoilValue(categoryState);
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
  // TODO : Add할 때 LocalStorage에 넣어보기
  const onValid = ({ todo }: IValid) => {
    const id = Date.now();
    setValue("todo", "");
    setTodos((prev) => [{ text: todo, category, id }, ...prev]);
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
