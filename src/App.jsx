import { useState } from 'react'

function App() {
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [operation, setOperation] = useState('+')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  function calculate() {
    if (a === '' || b === '') {
      setError('Please enter both numbers.')
      setResult(null)
      return
    }

    const x = Number(a)
    const y = Number(b)
    
    if (operation === '/' && y === 0) {
      setError('Cannot divide by zero.')
      setResult(null)
      return
    }

    let answer
    if (operation === '+') answer = x + y
    else if (operation === '-') answer = x - y
    else if (operation === '*') answer = x * y
    else if (operation === '/') answer = x / y

    setError('')
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
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result !== null && <h2>Result: {result}</h2>}
    </div>
  )
}

export default App