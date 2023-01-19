import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([])

  return (
    <div className="App">
      <div className="container">
        <div className="content">
          <p></p>
        </div>
        <div className="author">

        </div>
      </div>
    </div>
  )
}

export default App
