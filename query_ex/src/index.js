import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// 리액트 쿼리 4버전부터는 이렇게 @tanstack/react-query, @tanstack/react-query-devtools 이렇게 다르게 받아줘야 한다.
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  // 리액트 쿼리와 서스펜스를 같이 써주기 굉장히 편한 부분이 이렇게 defaultOptions 안에 suspense와 관련된 옵션을 설정해줄 수 있다.
  // 리액트 서스펜스에 isLoading 상태이면 로딩 중이라고 해줄 수 있다.
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense
    fullback={
      <div style={{ width: "100vw", height: "100vh" }}>로딩 중이에요! ::: </div>
    }
  >
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <App />
    </QueryClientProvider>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
