import React, { useRef, useEffect,useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Link } from 'react-router-dom';
import './Home.css';
import video1 from '../assets/model3.mp4';
import { motion } from 'framer-motion';

export const Home = (props) => {

  const [navStyle,setNavStyle]=useState(false)
  const [logoColor,setLogoColor]=useState(false)

  const handleScroll=(event)=>{
    if (event.target.scrollTop>20){
      setLogoColor(true)
      setNavStyle(true)
    }
    else{
      setLogoColor(false)
      setNavStyle(false)
    }
  }

  const scrolledDiv=useRef()
  useEffect(() => {
    const div = scrolledDiv.current;

    if (div) {
      div.addEventListener('scroll', handleScroll);

      return () => {
        div.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    < div className='home' >
      <Navbar navStyle={navStyle} logoColor={logoColor} ></Navbar>
      <div className='blacklayer' ></div>
      <div className='homeContent'onScroll={()=>{handleScroll}} ref={scrolledDiv} >
        <div className='hero'>
          <motion.div  className='heroContent' initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:false,margin:'450px'}} transition={{duration:.7}} >
            <div className='upper'>
              <h1>Model 3</h1>
              <h3>from $29,740*</h3>
            </div>
            <div className='down'>
              <Link to={'/model3'} className='order'>
                Order Now
              </Link>
              <Link to={'/'} className='demo'>
                Demo Drive
              </Link>
            </div>
          </motion.div>
          <video className='backvideo' src={video1} autoPlay loop muted />
        </div>

        <div className='hero2'>
          <motion.div className='heroContent'initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:false,amount:'all'}} transition={{duration:.7}} >
            <div className='upper'>
              <h1>Model Y</h1>
              <h3>from $36,090*</h3>
            </div>
            <div className='down'>
              <Link to={'/modely'} className='order'>
                Order Now
              </Link>
              <Link to={'/'} className='demo'>
                Demo Drive
              </Link>
            </div>
          </motion.div>
        </div>

        <div className='hero3'>
          <motion.div className='heroContent' initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:false,amount:'all'}} transition={{duration:.7}} >
            <div className='upper'>
              <h1>Model S</h1>
              <h3>from $72,090*</h3>
            </div>
            <div className='down'>
              <Link to={'/models'} className='order'>
                Order Now
              </Link>
              <Link to={'/'} className='demo'>
                Demo Drive
              </Link>
            </div>
          </motion.div>
        </div>

        <div className='hero4'>
          <motion.div className='heroContent' initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:false,amount:'all'}} transition={{duration:.7}} >
            <div className='upper'>
              <h1>Model X</h1>
              <h3>from $68,090*</h3>
            </div>
            <div className='down'>
              <Link to={'/modelx'} className='order'>
                Order Now
              </Link>
              <Link to={'/'} className='demo'>
                Demo Drive
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
