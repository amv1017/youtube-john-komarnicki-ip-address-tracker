import ComponentWithUseReducer from './components/ComponentWithUseReducer'
import Parent from './components/ComponentWithUseContext/Parent'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="Section">
        <p>useReducer</p>
        <ComponentWithUseReducer />
      </div>
      <div className="Section">
        <p>useContext</p>
        <Parent />
      </div>
    </div>
  )
}

export default App
