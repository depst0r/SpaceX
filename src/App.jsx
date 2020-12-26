import React, { useState } from 'react'
import { Header } from './Components/Header/Header'
import { Main } from './Components/Main/Main'
import { Features } from './Components/Features/Features'
import { Footer } from './Components/Footer/Footer'
import { Calendar } from './Components/Calendar/Calendar'
import { Details } from './Components/Details/Details'
import './style.scss'

  
function App() {

  const [rocket, setRocket] = useState('Falcone 1')
  
  return (
    <>
    <Header/>
    <Main rocket={rocket}/>
    <Features/>
    <Calendar/>
    <Details/>
    <Footer/>
</>
  )
}

export default App;
