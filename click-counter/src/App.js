import "./App.css";
import Button from "./components/Boton.js"
import Counter from "./components/Counter";
import freeCodeCampLogo from "./images/freecodecamp.png";
import {useState} from "react";

function App() {

  const [numClicks, setNumClicks] = useState(0); 

  const handleClick = () => {
    setNumClicks(numClicks + 1);
  }

  const restartButton = () => {
    setNumClicks(0);
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-container'>
        <img 
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='Logo freecodecamp'/>
      </div>
      <div className='principal-container'>
        <Counter  numClicks= {numClicks}
        />
        <Button
          text= "Click"
          esClickButton={ true}
          handleClick={handleClick}/>
        <Button
        text= "Restart"
        esClickButton={ false }
        handleClick={restartButton}/>
      </div>
    </div>
  );
}

export default App;
