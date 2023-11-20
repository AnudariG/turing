
import "./TapeBox.css" ;
import React, { useState } from 'react';
function InputString() {
    const tapeList = ['1', '0', '1', '0', '1', '1', '1'];
    const [tape, setTape] = useState(tapeList);
    const [headPosition, setHeadPosition] = useState(0);
    const moveHeadLeft = () => {
        setHeadPosition((prev) => Math.max(prev - 1, 0));
      };
    
      const moveHeadRight = () => {
        setHeadPosition((prev) => Math.min(prev + 1, tape.length - 1));
      };
      return (
        <div className="tape">
          {tape.map((symbol, index) => (
            <span key={index} className={`tape-cell ${index === headPosition ? 'head' : ''}`}>
              {symbol}
            </span>
          ))}
          {/* <div className="controls">
            <button onClick={moveHeadLeft}>Move Left</button>
            <button onClick={moveHeadRight}>Move Right</button>
          </div> */}
        </div>
      );
}

export default InputString;
