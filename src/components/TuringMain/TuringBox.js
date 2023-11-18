import ControlsBox from "../Controls/ControlsBox";
import CurrentStateBox from "../CurrentState/CurrentStateBox";
import ProgramBox from "../Program/ProgramBox";
import StepsBox from "../Steps/StepsBox";
import TapeBox from "../Tape/TapeBox";
import "./Turing.css";
function TuringBox() {
  return (
    <div className="TuringBox">
      <h1>TuringBox</h1>
      <TapeBox />
      <ProgramBox />
      <StepsBox />
      <ControlsBox />
      <CurrentStateBox />
    </div>
  );
}

export default TuringBox;
