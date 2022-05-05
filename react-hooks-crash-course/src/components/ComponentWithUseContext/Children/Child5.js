import { useContext } from 'react'
import { CountContext } from '../Parent'

export default function Child5() {
  const {count, setCount} = useContext(CountContext)
  return (
    <div className="child-box-5">
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}
