import React, { useState, useEffect } from 'react'
import { Header } from './Components/Header/Header'
import { Main } from './Components/Main/Main'
import { Features } from './Components/Features/Features'
import { Footer } from './Components/Footer/Footer'
import { Calendar } from './Components/Calendar/Calendar'
import { Details } from './Components/Details/Details'

import FetchData from './service/FetchData'

import './style.scss'

  
export const App = () =>  {

const fetchData = new FetchData()

  const [rocket, setRocket] = useState('Falcon 1')
  const [rocketFeatures, setRocketFeatures] = useState(null)

useEffect(() => {
    updateRcket()
}, [])

  const updateRcket = () => {
    fetchData.getRocket()
      .then(data => data.find(item => item.name === rocket))
      .then(rocketFeatures => setRocketFeatures({ rocketFeatures }))
  }


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


