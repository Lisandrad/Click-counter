import React from "react";
import "../style-sheet/Counter.css";

function Counter({ numClicks }) {
  return(
    <div className="counter">
      {numClicks}
    </div>
  );
}

export default Counter;