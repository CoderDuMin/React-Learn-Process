import React, { useEffect, useState } from 'react'

export default function HookTitleWithCounter() {
  const [counter,setCounter] = useState(0)
  useEffect(()=>{
    document.title = counter
  })
  return (
    <div>
      <h2>当前计数:{counter}</h2>
      <button onClick={e=>setCounter(counter+1)}>+1</button>
      <button onClick={e=>setCounter(counter-1)}>-1</button>
    </div>
  )
}
