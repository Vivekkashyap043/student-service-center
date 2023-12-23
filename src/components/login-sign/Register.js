import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Reglogo from '../../images/Reglogo.jpeg'


function Register() {
  return (
    <div className='container-fluid'>
    <div className="row" style={{ minHeight: "41rem" , }}>
      <div className="col-md-3 bg-gradient-light text-white mt-5">
        <img src={Reglogo} className="imag" alt="" />
        <NavLink className="nav-link" to="">
          <button className='btn btn-outline-primary bt'>Register as student</button>
        </NavLink>
        <NavLink className="nav-link" to="admin-register">
          <button className='btn btn-outline-primary bt'>Register as Admin</button>
        </NavLink>
      </div>
      <div className='col-md-9'>
      <Outlet />
      </div>
    </div>
  </div>
  )
}

export default Register
