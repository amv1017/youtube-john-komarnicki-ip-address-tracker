import ComponentWithUseReducer from './components/ComponentWithUseReducer'
import ComponentWithUseContext from './components/ComponentWithUseContext'
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
        <ComponentWithUseContext />
      </div>
    </div>
  )
}

export default App
