import { useState } from "react"

function App() {
const [color,setColor]= useState("olive")

  return (
    <div className="w-full h-screen duration-100" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center shadow-lg gap-3 bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=>setColor("red")}
          className="rounded-full outline-none px-4 py-1 text-white shadow-lg"
          style={{backgroundColor:"red"}}
          >Red</button>

          <button onClick={()=>setColor("green")}
          className="rounded-full outline-none px-4 py-1 text-white shadow-lg"
          style={{backgroundColor:"green"}}
          >Green</button>

          <button onClick={()=>setColor("blue")}
          className="rounded-full outline-none px-4 py-1 text-white shadow-lg"
          style={{backgroundColor:"blue"}}
          >Blue</button>

          <button onClick={()=>setColor("black")}
          className="rounded-full outline-none px-4 py-1 text-white shadow-lg"
          style={{backgroundColor:"black"}}
          >Black</button>

          <button onClick={()=>setColor("orange")}
          className="rounded-full outline-none px-4 py-1 text-white shadow-lg"
          style={{backgroundColor:"orange"}}
          >Orange</button>

          <button onClick={()=>setColor("pink")}
          className="rounded-full outline-none px-4 py-1 text-white shadow-lg"
          style={{backgroundColor:"pink"}}
          >Pink</button>

          <button onClick={()=>setColor("violet")}
          className="rounded-full outline-none px-4 py-1 text-white shadow-lg"
          style={{backgroundColor:"violet"}}
          >Violet</button>

          <button onClick={()=>setColor("olive")}
          className="rounded-full outline-none px-4 py-1 text-white shadow-lg"
          style={{backgroundColor:"olive"}}
          >Olive</button>

          <button onClick={()=>setColor("yellow")}
          className="rounded-full outline-none px-4 py-1 text-white shadow-lg"
          style={{backgroundColor:"yellow"}}
          >Yellow</button>

          <button onClick={()=>setColor("grey")}
          className="rounded-full outline-none px-4 py-1 text-white shadow-lg"
          style={{backgroundColor:"grey"}}
          >Grey</button>

          <button onClick={()=>setColor("gold")}
          className="rounded-full outline-none px-4 py-1 text-white shadow-lg"
          style={{backgroundColor:"gold"}}
          >Gold</button>

          <button onClick={()=>setColor("silver")}
          className="rounded-full outline-none px-4 py-1 text-white shadow-lg"
          style={{backgroundColor:"silver"}}
          >Silver</button>
          
        </div>
      </div>
    </div>
  )
}

export default App
