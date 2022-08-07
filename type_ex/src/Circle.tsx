// propTypes는 코드 실행 '후' 브라우저에 에러가 나타난다.(리액트에 내장된 걸로 보이는데 props의 타입을 지정해주는 역할을 한 것으로 보임)
// component의 props를 type하면(= props에 type을 주면 = typescript에 props의 type을 알려주면) 코드 실행 '전'에 에러가 나타난다.
import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

// 상위 컴포넌트에서 받아 온 props를 적용시켜주기 위해서는 styled-components를 통해서 만든 components도 type해야 한다.
const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border: 1px solid ${(props) => props.borderColor};
  /* border: ${(props) =>
    props.borderColor ? `10px solid ${props.borderColor}` : `none`}; */
`;

// interface 안에 ts에 Object shape를 설명
interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

function Circle({ bgColor, borderColor, text = "default Text" }: CircleProps) {
  const [counter, setCounter] = useState<string | number>(1);
  return (
    <>
      <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
        {text}
      </Container>
    </>
  );
}

export default Circle;
