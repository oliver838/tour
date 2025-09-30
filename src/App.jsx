import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Tours } from './components/Tours'
import { Footer } from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Header/>
      <Tours/>
      <Footer/>
    </div>
  )
}

export default App
