import React from 'react'
import { Slider } from '../components/slider'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import './carInfo.css'

export const CarInfo = (props) => {
  console.log(props.title)
  return (
    <div className="infopage">
        <div className='navy'>
            <div className='logy'><Link to={'/'} ><img src={logo} /></Link></div>
        </div>
        <div className="infoBody">
        <Slider img1={props.img1}  img2={props.img2} img3={props.img3}/>
            <div className="info">
              <div className='infoTitle'>{props.title}</div>
              <div className="speed-range">
                <div className="speed">
                  <div className='topSpeed' >{props.speed}<span style={{fontSize:15}}>mph</span></div>
                  <label style={{fontSize:15,color:"gray",fontWeight:200}} >Top Speed</label>
                </div>
                <div className="range">
                  <div className='topRange' >{props.range}<span style={{fontSize:15}}>mi</span></div>
                  <label style={{fontSize:15,color:"gray",fontWeight:200}} >Range</label>
                </div>
              </div>
              <div className='price' >${props.price} after savings</div>
            </div>
        </div>

    </div>
  )
}
