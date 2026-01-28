import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Spark from './Animated_components/Spark.jsx'

createRoot(document.getElementById('root')).render(
  <Spark>
    <App />
  </Spark>
)
