import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coin from "./routes/Coin";
import Home from "./routes/Home";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/:coinId" element={<Coin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
