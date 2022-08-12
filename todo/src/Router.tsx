import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import TodoList from "./components/todoList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<TodoList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
