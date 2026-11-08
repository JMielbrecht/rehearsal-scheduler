import './App.css'
import { useState } from 'react'
import RehearsalForm from './RehearsalForm/RehearsalForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RehearsalForm />
    </>
  )
}

export default App
