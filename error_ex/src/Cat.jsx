const Cat = () => {
  const cat_name = "멍멍이";

  if (cat_name !== "펄이") {
    const makedError = new Error(`이름이 펄이가 아닙니다. ${cat_name}입니다!`);
    makedError.name = "이름 관련 에러";
    throw makedError;
  }

  return (
    <>
      <div>{cat_name}</div>
    </>
  );
};

export default Cat;
