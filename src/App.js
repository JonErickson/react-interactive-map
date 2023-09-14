import './App.css'
import Map from './components/Map'
import { useEffect } from 'react'

function App() {
  const handleStateSelectedEvent = (event) => {
    if (event.target.id !== 'map') {
      const stateSelectedEvent = new CustomEvent('state-selected', {
        detail: event.target.querySelector('title').innerHTML
      })

      window.dispatchEvent(stateSelectedEvent)
    }
  }

  useEffect(() => {
    document.getElementById('map').addEventListener('click', handleStateSelectedEvent)

    return () => {
      document.getElementById('map').removeEventListener('click', handleStateSelectedEvent)
    }
  })

  return <Map />
}

export default App
