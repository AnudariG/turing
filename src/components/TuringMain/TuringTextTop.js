import "./Turing.css";
function TuringTextTop() {
  return (
    <div className="wrapper">
      <div className="logo-container">
        <img
          src="images/mechanical.svg"
          alt="Mechanical Logo"
          className="logo"
        />
        <h1>Turing Machine Simulator</h1>
      </div>
      <div className="container">
        <ol>
          <li>Load a program, or write your own in the program area.</li>
          <li>Write in the 'Input' area then press "Reset" to load input.</li>
          <li>
            Click 'Run' to start. Click 'Pause' to interrupt. Click 'Step' to
            run one step at a time.
          </li>
          <li>Click 'Reset' to restore to original state.</li>
        </ol>
      </div>
    </div>
  );
}

export default TuringTextTop;
