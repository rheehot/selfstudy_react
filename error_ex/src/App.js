import "./App.css";

function App() {
  const data = { my_cat: "펄이", age: 20 };

  try {
    try {
      let perl_age = data.age;
      const age_error = new Error("펄이 나이가 틀렸어요!");
      if (perl_age !== 6) {
        age_error.name = "asd";
        throw age_error;
      }
    } catch (e) {
      if (e.name == "asd") {
        throw e;
      }
    } finally {
      console.log("try, catch문 끝남");
    }
  } catch (e) {
    console.log("바깥 E임");
  }

  return (
    <div className="App">
      <p>Running Error</p>
    </div>
  );
}

export default App;
