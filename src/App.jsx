import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  const addValue = () => {
   console.log("Added", counter)
   
   if (counter == 20) {
    setCounter(counter = 20)
   }
   
   else{
    setCounter(counter + 1)
   }
 }
 
 const removeValue = () => {
  console.log("Removed", counter)
  if (counter == 0) {
    setCounter(counter = 0)
  }
  else{
    setCounter(counter - 1)
  }
 }


  return (
    <>
      <h1>React Development</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
