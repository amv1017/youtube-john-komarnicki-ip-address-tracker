import { useState, createContext } from 'react'
import Child1 from './Children/Child1'

export const CountContext = createContext({})

export default function Parent() {
  const [count, setCount] = useState(0)

  return (
    <CountContext.Provider value={{count, setCount}}>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <Child1 />
    </CountContext.Provider>
  )
}
