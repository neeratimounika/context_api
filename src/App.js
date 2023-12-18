import React,{createContext,useState}from 'react'

import Count from './Count.js';
import Display from './Display';


export const store = createContext();

const App=()=>{
  const [data,setData]=useState([
    {
      brandName:"Nokia",
    },
    {
      brandName:'IPhone',
    },
    {
      brandName:"RedMe",
    },
    {
      brandName:"RealMe",
    }
  ])
  
  return(
    <store.Provider value={[data,setData]}>
      <center>
        <Count/>
        <Display/>
      </center>

    </store.Provider>

  )
}
export default App
