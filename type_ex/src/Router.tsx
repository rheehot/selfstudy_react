import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coin from "./routes/Coin";
import Home from "./routes/Home";
import Header from "./routes/Header";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/:coinId" element={<Coin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
