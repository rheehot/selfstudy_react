// propTypes는 코드 실행 '후' 브라우저에 에러가 나타난다.
// component의 props를 type하면(props에 type을 주면) 코드 실행 '전'에 에러가 나타난다.
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
}

// 상위 컴포넌트에서 받아 온 props를 적용시켜주기 위해서는 styled-components를 통해서 만든 components도 type해야 한다.
const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
`;

// interface 안에 ts에 Object shape를 설명
interface CircleProps {
  bgColor: string;
}

function Circle({ bgColor }: CircleProps) {
  return (
    <>
      <Container bgColor={bgColor} />
    </>
  );
}

export default Circle;
