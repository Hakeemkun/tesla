import React, { useEffect, useState } from 'react'
import { CaretLeft } from 'phosphor-react'
import { CaretRight } from 'phosphor-react'
import './slider.css'

export const Slider = (props) => {
    const imgs=[props.img1,props.img2,props.img3]
    const [displayArrow,setDisplayArrow]=useState(false)
    const [displayImg,setDisplayImg]=useState(0)

    const handleLeftClick=()=>{
      if(displayImg>0){
        setDisplayImg(displayImg-1)
      }
      else{
        setDisplayImg(2)
      }
    }
    const handleRightClick=()=>{
      if(displayImg<2){
        setDisplayImg(displayImg+1)
      }
      else{
        setDisplayImg(0)
      }
    }

    useEffect(()=>{

        if(document.documentElement.clientWidth<750){
          setDisplayArrow(true)
        }
        else{
          setDisplayArrow(false)
        }
    
    },[])

  return (
    
    <div className="imgSlider" onMouseOver={()=>{setDisplayArrow(true)}} onMouseLeave={()=>{setDisplayArrow(false)}} >
        <div className='left' style={{ display:displayArrow?"block":"none" }} onClick={handleLeftClick} ><CaretLeft></CaretLeft></div>
        <div className='img'><img src={imgs[displayImg]} /></div>
        <div className="right" style={{ display:displayArrow?"block":"none" }} onClick={handleRightClick} ><CaretRight></CaretRight></div>
    </div>
    
  )
}
