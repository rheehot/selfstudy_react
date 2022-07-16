// import StudyContextAPI from "./studyContextAPI";
// import ReviewRedux from "./reviewRedux";
// import ReduxToolKit from "./reduxToolKit";
import RouterExOne from "./routerExOne";
import RouterExTwo from "./routerExTwo";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RouterExOne />} />
        <Route path="/cat/:name" element={<RouterExTwo />} />
      </Routes>
    </div>
  );
};

export default App;
