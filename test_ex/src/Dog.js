import { Link } from "react-router-dom";
export const Dog = () => {
  return (
    <div>
      <p>강아지 페이지!</p>
      <Link to={"/cat"}>고양이 페이지 가기</Link>
    </div>
  );
};
