import "./App.css";
import { useEffect } from "react";
import instance from "./shared/axios";

function App() {
  useEffect(() => {
    instance.get("http://localhost:5001/geterror");
  }, []);
  return <div className="App"></div>;
}

export default App;
