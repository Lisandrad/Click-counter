import React from 'react';
import "../style-sheet/Button.css";

function Button ({ text, esClickButton, handleClick }) {
  return (
    <button
      className={ esClickButton ? "click-button" : "restart-button" }
      onClick={ handleClick }>
      {text}
    </button>
  )
}

export default Button;
