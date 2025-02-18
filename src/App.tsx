import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, HelloWorld } from './index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Sushi Bootstrap Test</h1>
      
      {/* Test the exported React Bootstrap Button */}
      <Button variant="primary">Test Button</Button>
      
      {/* Test your custom HelloWorld component */}
      <HelloWorld />
    </div>
  )
}

export default App
