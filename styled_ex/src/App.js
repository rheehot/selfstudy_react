import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const BoxOne = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;

function App() {
  return (
    <div className="App">
      <Father>
        <BoxOne />
      </Father>
    </div>
  );
}

export default App;
