import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { carsInfo } from '../data'
import logo from '../assets/logo.png'
import logo2 from '../assets/logo2.png'
import './Navbar.css'

export const Navbar = () => {
    const [display,setDisplay]=useState(false)
    const handleHover=()=>{
        setDisplay(true)
    }
    const handleLeave=()=>{
        setDisplay(false)
    }
  return (
    <div className='navbar' style={{background:display?"white":"rgba(0, 0, 0, 0.000)",height:display?"58vh":"80px"}}>
        <div className='logo'><Link to={'/tesla'} ><img src={display?logo2:logo} /></Link></div>
        <div className='vehicles' style={{color:display?"black":"white"}} onMouseOver={handleHover} onMouseLeave={handleLeave} >Vehicles</div>

        <div className='links' onMouseOver={handleHover} onMouseLeave={handleLeave} style={{display:display?"flex":"none",animation:display?"fadedown 0.5s":"fadeup 0.5s"}} >
            {carsInfo.map((car)=>(<div className='menuItem' style={{animation:display?"fadein 1.2s" : "none"}} >
                <img src={car.img1} />
                <h4>{car.title}</h4>
                <Link to={`/${car.model}`} >Order now</Link>
            </div>))}
        </div>
        <div className='empty'></div>
    </div>
  )
}
