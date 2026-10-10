import { useState } from 'react'

function App() {
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [result, setResult] = useState(null)

  function calculate() {
    setResult(Number(a) + Number(b))
  }

  return (
    <div>
      <h1>Calculator</h1>
      <input type="number" value={a} onChange={e => setA(e.target.value)} placeholder="First number" />
      <span> + </span>
      <input type="number" value={b} onChange={e => setB(e.target.value)} placeholder="Second number" />
      <button onClick={calculate}>Calculate</button>
      {result !== null && <h2>Result: {result}</h2>}
    </div>
  )
}

export default App