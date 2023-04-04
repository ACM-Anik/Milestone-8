import { useState } from 'react'
import './App.css'
import Device from './components/Device/Device'
import Knob from './components/Knob/Knob'
import Watch from './components/Watch/Watch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Knob steps="400"></Knob>
      <Device name="Samsings" price="50000"></Device>
      <Device name="uPhone" price="60000"></Device>
      <Watch></Watch>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App;
