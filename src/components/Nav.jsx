import React from 'react'
import './Nav.css'
import { useEffect } from 'react'
import { useState } from 'react'

function Nav() {  

  const [showLogo, setShowLogo] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{

      console.log(window.scrollY);

      if(window.scrollY>600){
        setShowLogo(true)
      }
      else{
        setShowLogo(false)
      }
    })
  })




  return (
    /* classname for if true show nav-bg it will show the background */
    <div className={`nav ${showLogo && 'nav-bg'}`}>
        {/* <img src="E:\Jino\MEARN\REACT\netflix-clone\images\pngwing.com.png" alt="" /> */}
        <img style={{width:'170px'}} src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png" alt="NetflixLogo" />
    </div>
  )
}

export default Nav