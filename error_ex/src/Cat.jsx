const Cat = () => {
  const cat_name = "몽";

  if (cat_name !== "펄이") {
    const makedError = new Error("이름이 잘못됐어요!");
    makedError.cat_name = cat_name;
    throw makedError;
  }

  return (
    <>
      <div>{cat_name}</div>
    </>
  );
};

export default Cat;
