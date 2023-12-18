import React,{useContext,useState} from 'react'
import { store } from './App'

const Display = () => {
  const[data,setData]=useContext(store)
  const[name,setName]=useState('');
  const submitHandler = e=>{
    e.preventDefault();
    setData([...data,{brandName:name,}])
  }

  return (
    <div>
      {data.map(item=><h3>{item.brandName}</h3>)}
      <form onSubmit={submitHandler}>
        <input type='text' placeholder='Enter Your brand' onChange={(e)=>setName(e.target.value)}/>
        <input type='submit' value='Add'/>
      </form>

    </div>
  )
}

export default Display
