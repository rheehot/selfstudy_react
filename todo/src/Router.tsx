import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Header from "./routes/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
