import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.backgroundColor};
`;

const animation = keyframes`
  from{
    transform: rotate(0deg);
  }to{
    transform: rotate(360deg);
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Extends = styled(Emoji)`
  font-size: 10px;
`;

const Input = styled.input.attrs({ required: true })`
  width: 100px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${animation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji}:hover {
    font-size: 98px;
  }
  /* @keyframes identifier {
  
  } */
`;

function App() {
  return (
    <div>
      <Wrapper>
        <Box>
          <Emoji as="div">😎</Emoji>
        </Box>
        <Emoji>💤</Emoji>
      </Wrapper>
    </div>
  );
}

export default App;
