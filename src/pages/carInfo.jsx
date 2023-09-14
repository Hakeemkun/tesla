import React, { useEffect, useState } from 'react'
import { Slider } from '../components/slider'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import './carInfo.css'
import { motion } from 'framer-motion'

export const CarInfo = (props) => {

  return (

    <div className="infopage">
        <div className='navy'>
            <div className='logy'><Link to={'/tesla'} ><img src={logo} /></Link></div>
        </div>
        <div className="infoBody">
        <Slider img1={props.img1}  img2={props.img2} img3={props.img3}/>
            <div className="info">
              <motion.div className='infoTitle'  initial={{opacity:0,y:-30}} animate={{opacity:1,y:0}} transition={{duration:.3}} >{props.title}</motion.div>
              <motion.div initial={{opacity:0,y:-50}} animate={{opacity:1,y:0}} transition={{duration:.7}} className="speed-range">
                <div className="speed">
                  <div className='topSpeed' >{props.speed}<span style={{fontSize:15}}>mph</span></div>
                  <label style={{fontSize:15,color:"gray",fontWeight:200}} >Top Speed</label>
                </div>
                <div className="range">
                  <div className='topRange' >{props.range}<span style={{fontSize:15}}>mi</span></div>
                  <label style={{fontSize:15,color:"gray",fontWeight:200}} >Range</label>
                </div>
              </motion.div>
              <motion.div className='price' initial={{opacity:0,y:-70}} animate={{opacity:1,y:0}} transition={{duration:.9}} >${props.price} after savings</motion.div>
            </div>
        </div>

    </div>
  )
}
