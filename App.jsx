import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(5)

  //let counter = 5

  //increase button is clicked
  const addValue = () => {
    console.log("Clicked",counter);
    //counter = counter +1 ;
    if (counter>=20) return;  // constraint
    setCounter(counter+1);
  }

  //decrease button is clicked
  const removeValue = () => {
    console.log("Clicked",counter);
    if (counter<=0) return;   // constraint
    setCounter(counter-1);
    
  }

  return (
    <>
    <h1>harshita and react</h1>
    <h2>Counter Project</h2>
    <h3>Value of counter gets updated as and when you click on the buttons yay!</h3>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}> Increase value </button>
    <br/>
    <button onClick={removeValue}> Decrease value</button>
    <br/>
    <footer>footer : {counter}</footer>
    </>
  )
}

export default App
