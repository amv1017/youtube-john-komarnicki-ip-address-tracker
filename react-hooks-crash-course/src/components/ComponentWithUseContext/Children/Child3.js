import { useContext } from 'react'
import { CountContext } from '../Parent'
import Child4 from './Child4'

export default function Child3() {
  const {count, setCount} = useContext(CountContext)
  return (
    <div className="child-box-3"><Child4 />
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}
