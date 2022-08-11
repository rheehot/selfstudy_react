import { useForm } from "react-hook-form";

interface IValid {
  todo: string;
  time: string;
  extraError?: string;
}

const TodoList = () => {
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
    setError,
  } = useForm<IValid>({
    defaultValues: {},
  });

  const onValid = (data: IValid) => {
    /* setError(
      "extraError",
      { message: "추가 에러 발생" },
      { shouldFocus: true }
    ); */
    setValue("todo", "");
  };

  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit(onValid)}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <input
            {...register("todo", {
              required: "plz write something",
              minLength: { value: 4, message: "짧습니다." },
              validate: (value) =>
                value.includes("iiii") ? "iiii는 안됩니다." : true,
            })}
            placeholder="Write a to do"
          ></input>
          <span>{errors?.todo?.message}</span>
          {/* <span>{errors?.extraError?.message}</span> */}
          <button>Add</button>
        </form>
      </div>
    </>
  );
};

export default TodoList;
