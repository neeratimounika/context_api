import React,{createContext,useState}from 'react'

import ComponentA from './ComponentA'
import ComponentB from './ComponentB'

export const store = createContext();

const App=()=> {
const[data,setData]=useState(0)

  return (
    <store.Provider value={[data,setData]}>
      <center>
       <ComponentA/>
       <ComponentB/>
       <button type='button' onClick={()=>setData(data+1)}>Increment</button>
      </center>
    </store.Provider>
  )
}

export default App
