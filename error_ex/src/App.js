import "./App.css";
import Cat from "./Cat";
import { ErrorBoundary } from "react-error-boundary";

// error boundary에서 에러가 났을 때 보여주는 UI를 에러fallback이라고 함.
// 얘는 err를 하나 받아올 수 있다.
const ErrorFallback = (err) => {
  console.log(err.error.cat_name);
  return (
    <>
      <div>에러남!</div>
    </>
  );
};

function App() {
  const data = { my_cat: "펄이", age: 20 };
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Cat />
      </ErrorBoundary>
    </div>
  );
}

export default App;
