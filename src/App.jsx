import React, { useEffect } from 'react'
import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { carsInfo } from './data'
import { CarInfo } from './pages/carInfo'
import {Home} from './pages/Home'
import './index.css'


export const App = () => {



  const [navStyle,setNavStyle]=useState(false)
  const [logoColor,setLogoColor]=useState(false)

  const handleScroll=()=>{
    if (window.scrollY>150){
      setLogoColor(true)
      setNavStyle(true)
    }
    else{
      setLogoColor(false)
      setNavStyle(false)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
    return()=>{
      window.removeEventListener('scroll',handleScroll)
    }
  },[]
  )


  return (
    <div className='app' >
      <Router>
        <Routes>
          <Route path='/tesla' element={<Home navStyle={navStyle} logoColor={logoColor} ></Home>} ></Route>
          {carsInfo.map((car)=>(
            <Route path={`/${car.model}`} element={<CarInfo img1={car.img1} img2={car.img2} img3={car.img3} title={car.title} price={car.price} speed={car.speed} range={car.range} ></CarInfo>}></Route>
          ))}
          
        </Routes>
      </Router>
    </div>
  )
}
