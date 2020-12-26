import React from 'react'
import { Header } from './Components/Header/Header'
import { Main } from './Components/Main/Main'
import { Features } from './Components/Features/Features'
import { Footer } from './Components/Footer/Footer'
import './style.scss'
import { Calendar } from './Components/Calendar/Calendar'

function App() {
  return (
    <>
    <Header/>
    <Main/>
    <Features/>
    <Calendar/>
    <Footer/>
</>
  )
}

export default App;
