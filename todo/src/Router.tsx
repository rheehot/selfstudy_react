import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./routes/Header";
import TodoList from "./routes/todoList";

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
