import React from 'react'
import './Login.css'
import { NavLink } from "react-router-dom"
import studentlogo from '../../images/studentlogo.jpg'
import { Outlet } from 'react-router-dom'

function Login() {
  return (
    <div className='container-fluid'>
      <div className="row" style={{ minHeight: "41rem" , }}>
        <div className="col-md-3 bg-light text-white mt-5">
          <img src={studentlogo} className="imag" alt="" />
          <NavLink className="nav-link" to="">
            <button className='btn btn-outline-primary bt'>Login as student</button>
          </NavLink>
          <NavLink className="nav-link" to="admin-login">
            <button className='btn btn-outline-primary bt'>Login as Admin</button>
          </NavLink>
        </div>
        <div className='col-md-9'>
        <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Login

