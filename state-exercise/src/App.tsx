import { useState } from "react"
import LightToggle from "./components/LightToggle";
import LottoNumbers from './components/LottoNumbers';
import ClickCounter from './components/ClickCounter';

const App = () => {
  /* Your states here */
  const [isOn, setLightsOn] = useState<boolean>(false)

  const toggleLights = () => setLightsOn((prev)=>!prev)


  const [numbers, setNumbers] = useState<number[]>([])

  const randomNumbers = () => {
    const numbers = [1,2,3,4,3,2]
    setNumbers(numbers)
  }


  const [counter, setCounter] = useState(0)

  const addClick = () => {
    setCounter((prev)=> prev+1)
  }

  return (
    <div>
      <h2>Light Toggle</h2>
      <LightToggle toggleLights={toggleLights}/>
      <div style={{backgroundColor: isOn ? "white" : "black"}}>Change this background color using the style attribute</div>

      <h2>Lotto Numbers</h2>
      <LottoNumbers number={randomNumbers}/>
      <div className="output"></div>

      <h2>Click Counter</h2>
      <ClickCounter addClick={addClick}/>
      <div className="output">
        <p>Number of clicks: {counter}</p>
      </div>
    </div>
  );
};

export default App;