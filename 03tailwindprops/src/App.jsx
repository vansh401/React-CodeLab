import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  // let newObj={
  //   name:"vansh verma",
  //   age:21
  // }
  // let newArr=[1,2,3]

  let vanshObj={
    name:"vansh verma",
    age:21,
    city:"Mathura",
    profilepic:"https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }

  let yashObj={
    name:"Yash Patel",
    age:22,
    city:"Noida",
    profilepic:"https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }

  return (
    <>
    <h1 className='bg-green-400 text-black rounded-2xl pt-2 mb-3'>Tailwind Test</h1>
    <Card username='vansh' btnText="Click Me" details={vanshObj} />
    <Card username='yash' btnText="Visit Me" details={yashObj} />
    </>
  )
}

export default App
