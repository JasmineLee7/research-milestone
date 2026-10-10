import { useState } from 'react'

function App() {
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [operation, setOperation] = useState('+')
  const [result, setResult] = useState(null)

  function calculate() {
    const x = Number(a)
    const y = Number(b)
    let answer

    if (operation === '+') answer = x + y
    else if (operation === '-') answer = x - y
    else if (operation === '*') answer = x * y
    else if (operation === '/') answer = x / y

    setResult(answer)
  }

  return (
    <div>
      <h1>Calculator</h1>
      <input
        type="number"
        value={a}
        onChange={e => setA(e.target.value)}
        placeholder="First number"
      />
      <select value={operation} onChange={e => setOperation(e.target.value)}>
        <option value="+">+</option>
        <option value="-">−</option>
        <option value="*">×</option>
        <option value="/">÷</option>
      </select>
      <input
        type="number"
        value={b}
        onChange={e => setB(e.target.value)}
        placeholder="Second number"
      />
      <button onClick={calculate}>Calculate</button>
      {result !== null && <h2>Result: {result}</h2>}
    </div>
  )
}

export default App