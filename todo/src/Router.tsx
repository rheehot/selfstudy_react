import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Router;
