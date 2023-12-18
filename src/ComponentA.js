import React,{useContext} from 'react'
import { store } from './App'

const ComponentA = () => {
    const[data,setData] = useContext(store)
  return (
    <div>
      <h1>CmpnentA {data}</h1>
    </div>
  )
}

export default ComponentA
