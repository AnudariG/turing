import "./App.css";
import TuringBox from "./components/TuringMain/TuringBox";
import TuringTextTop from "./components/TuringMain/TuringTextTop";
import TuringTextBottom from "./components/TuringMain/TuringTextBottom";

function App() {
  return (
    <div className="App">
      <TuringTextTop />
      <TuringBox />
      <TuringTextBottom />
    </div>
  );
}

export default App;
