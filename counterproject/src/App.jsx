import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count,setCount]=useState(0) // hooks concept 
  
// let count=10;

const addValue=()=>{
  setCount(count+1)
  console.log("clicked(+1)",count);
}

const decValue=()=>{
  setCount(count-1) 
  console.log("clicked(-1)",count);
}
  return (
    <>
    <h1>Counter Project</h1>
    <h2>Counter : {count}</h2>
    <button onClick={addValue}>Add Value</button>
    <br />
    <button onClick={decValue}>Decrease Value</button>
    <p>Resulted Value : {count}</p>
    </>
  )
}

export default App
