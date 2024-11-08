import { useState } from "react"

const Counter = () => {
    const [count,setCount] =  useState(0);
  return (
    <div>
        <p>Current Count : {count}</p>
        <button onClick={()=>setCount(count + 1)}>Increase By One</button>
        <button onClick={()=>setCount(count - 1)}>Decrease By One</button>
        <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default Counter