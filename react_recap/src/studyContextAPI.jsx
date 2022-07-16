import "./App.css";
import React from "react";

const MyStore = React.createContext();

function StudyContextAPI() {
  const [name, setName] = React.useState("donggyu");

  return (
    <div className="App">
      <MyStore.Provider value={{ name, setName }}>
        {/*         <MyStore.Consumer>
          {(value) => {
            return <div>{value.name}</div>;
          }}
        </MyStore.Consumer> */}
        <MyStoreConsumer></MyStoreConsumer>
      </MyStore.Provider>
    </div>
  );
}

// 위 방법은 생성한 콘텍스트를 Provider를 통해서 제공해주고 Consumer를 통해서 받아오는 형식
// useContext를 이용해서도 context API를 쓸 수 있다.
// 여기선 useContext를 이용해서 MyStore 데이터를 구독하겠다는 모양(useReducer를 이용해서는 전역 데이터를 관리했나봄)
// 즉 Provider까지는 똑같다. 하지만 Consumer를 이용해서 데이터를 구독하는 것이 아니라
// useContext라는 훅을 이용해서 데이터를 구독하는 것이다.
const MyStoreConsumer = () => {
  const { name, setName } = React.useContext(MyStore);

  const onClickBtn = () => {
    setName("이건 내 영어이름이지롱~");
  };
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={onClickBtn}>사실은...</button>
    </div>
  );
};

export default StudyContextAPI;
