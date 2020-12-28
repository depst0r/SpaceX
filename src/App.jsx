import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Header } from './Components/Header/Header'
import { Main } from './Components/Main/Main'
import { Features } from './Components/Features/Features'
import { Footer } from './Components/Footer/Footer'
import { Home } from './Components/Home/Home'
import { Calendar } from './Components/Calendar/Calendar'

import FetchData from './service/FetchData'

import './style.scss'

  
export const App = () =>  {

const fetchData = new FetchData()

  const [rocket, setRocket] = useState('Falcon 1')
  const [rocketFeatures, setRocketFeatures] = useState(null)
  const [rockets, setRockets] = useState([])
  const [company, setCompany] = useState(null)

useEffect(() => {
     updateRocket()
}, [rocket])

useEffect(() => {
  updateCompany()
}, [])

  const updateRocket = () => {
    fetchData.getRocket()
    .then(data => {
      setRockets( data.map(res => res.name) )
      return data
    })
      .then(data => data.find(item => item.name === rocket))
      .then(rocketFeatures => setRocketFeatures({ rocketFeatures }))
  }

  const changeRocket = rocket => {
      setRocket(rocket)
  }


  const updateCompany = () => {
    fetchData.getCompany()
      .then(companyData => setCompany( companyData ))
  }

  return (
    <BrowserRouter>
      <Header rockets={rockets} changeRocket={changeRocket} />
      <Route exact path='/'>
         <Home company={company} />
      </Route>
      <Route path='/rocket'>
          <Main rocket={rocket} />
          <Features {...rocketFeatures} />
      </Route>
      <Route path='/calendar'>
            <Main />
            <Calendar />
      </Route>
      <Footer  company={company} />
  </BrowserRouter>
  )
}


