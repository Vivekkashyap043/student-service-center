import React from 'react'
import Homelogo from '../../images/logo.png'
import './Home.css'

function Home() {
  return (
    <div className='back' style={{minHeight:'41.5rem', marginTop:"0px"}}>
      <div className='pt-5'>
        <img src={Homelogo} className='imag' alt='' />
      </div>
      <div>
        <p className='fs-1 text-center text-white mt-1'>Student Service Center</p>
        <p className='text-center text-white mb-0' >easy to get your academic certificates </p>
        <p className='text-center text-white'>e.g. id card, bonafide </p>
      </div>
    </div>
  )
}
export default Home
