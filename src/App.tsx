import { useState } from 'react'
import './App.css'
import { Button, HelloWorld } from './index'
import './styles/index.scss';
import SsButton from './components/SsButton/SsButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Sushi Bootstrap Test</h1>
      
      {/* Test the exported React Bootstrap Button */}
      <Button variant="primary">Test Button</Button>

      <SsButton variant="primary">Test SsButton</SsButton>
      
      {/* Test your custom HelloWorld component */}
      <HelloWorld />
    </div>
  )
}

export default App
