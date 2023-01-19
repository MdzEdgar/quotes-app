import { useState } from 'react'
import { useEffect } from 'react';
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  //Declarar hooks states
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([])

  //Declarar y hacer uso de window.fetch
  useEffect(() => {
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setItems(result);
        console.log(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }, [])
  

  if (error) {
    return (<div>Error!</div>);
  } else if (!isLoaded) {
    return (<div>Loading...</div>);
  } else {
    return (
      <div className="App">
      <div className="container">
        <div className="content">
          <p>{items.content}</p>
        </div>
        <div className="author">
          <p>{items.author}</p>
        </div>
      </div>
    </div>
    )
  }
}

export default App
